import React from 'react';
import { ApolloError } from '@apollo/client';
import { QueryQuery } from '../../generated/graphql';
import { 
    StyledUL, GridContainer, StyledLi,
    StyledLink, Img, Skeleton, H3,
    Overlay } from './style';

export const MoviesLayout: React.FunctionComponent<{
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
                : data?.getMovies?.results.map((movie) => {
                    return (
                        <StyledLink 
                            to={{
                                pathname: '/moviedetails',
                                state: {
                                    details: movie.details,
                                    reviews: movie.reviews,
                                    credits: movie.credits,
                                    videos: movie.videos,
                                    title: movie.title,
                                    id: movie.id
                                }
                            }} 
                            key={movie.id}
                        >
                            <StyledLi>
                                <Overlay> More Info </Overlay>
                                <Img 
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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