import React from 'react';
import { ApolloError } from '@apollo/client';
import { QueryQuery } from '../../generated/tvshows';
import { 
    StyledUL, GridContainer, StyledLi,
    StyledLink, Img, Skeleton, H3,
    Overlay } from './style';
export const TvShowsLayout: React.FunctionComponent<{
    loading: boolean | undefined,
    error: ApolloError | undefined
    data: QueryQuery | undefined
}> = ({loading, error, data}) => {
    
    return (
        <StyledUL>
            <GridContainer>
            {
                loading ? <Skeleton />
                : error ? <H3>Oh no! {error.message} </H3>
                : data?.getTvShows?.results.map((show) => {
                    return (
                        <StyledLink 
                            to={{
                                pathname: '/showdetails',
                                state: {
                                    details: show.details,
                                    name: show.name,
                                    id: show.id,
                                    credits: show.credits
                                }
                            }} 
                            key={show.id}
                        >
                            <StyledLi>
                                <Overlay> More Info </Overlay>
                                <Img 
                                    src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                                    alt='movie poster'
                                />
                            </StyledLi>
                        </StyledLink>
                    );
                })
            }
            </GridContainer>
        </StyledUL>
    );
}