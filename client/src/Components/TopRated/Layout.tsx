import React, { useState } from 'react';
import { 
    Container, Slider, Button,
    LButtonWrapper, Image, ImageContainer, 
    ActiveImage, Wrapper, SideContainer,
    Skeleton, RButtonWrapper, H2, H3,
    WatchButton, StyledLink} from './style';
import { GoArrowSmallRight, GoArrowSmallLeft } from 'react-icons/go'; 
import { ApolloError } from '@apollo/client';
import { QueryQuery } from '../../generated/gql';

export const TopRatedMoviesLayout: React.FunctionComponent<{
  loading: boolean,
  error: ApolloError | undefined,
  data: QueryQuery | undefined
}> = ({ loading, error, data }) => {

    const [ current, setCurrent ] = useState<number>(0);
    /*if the current slide number is equal to 0, it means that there 
    is no slide to go back to therefore set disabled to true*/
    const ldisabled:boolean = (current === 0) ? true : false;
    /*if the current slide number is equal to 19, it means we have reached
    the end of the slides therefore set disabled to true*/
    const rdisabled:boolean = (current === 19) ? true : false;

    const next = (): void => {
        //increase the current slide number by one
        setCurrent(current + 1);
    }

    const prev = (): void => {
        //decrease the current slide number by 1
        setCurrent(current -1);
    }

    return (
        <Container>
            <Wrapper>
            <Slider>
                <LButtonWrapper>
                <Button 
                    onClick={()=> prev()}
                    disabled={ldisabled}
                >
                    <GoArrowSmallLeft />
                </Button>
                </LButtonWrapper>
                <RButtonWrapper>
                <Button
                    onClick={()=>  next()}
                    disabled={rdisabled}
                >
                    <GoArrowSmallRight />
                </Button>
                </RButtonWrapper>
                <ImageContainer>
                    {
                        loading ? <Skeleton />
                        : error ? <p>Oh no! {error.message} </p>
                        : data?.getTopRatedMovies.map((movie,index)=> {
                            return (
                                <>
                                {
                                    (index === current)
                                    ?   <>
                                        <ActiveImage 
                                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                                            alt='image' 
                                            key={movie.id}
                                        />
                                        <SideContainer>
                                            <H2>{movie.title}</H2>
                                            <H3> Year: {movie.release_date?.slice(0, 4)} </H3>
                                            <H3> Genres: {movie.details?.genres?.map(genre => genre?.name).join(', ')} </H3> 
                                            <H3> Rating: {movie.vote_average}/10 </H3>
                                            <H3> Runtime: {movie.details?.runtime}min </H3>
                                            <StyledLink to='moviedetails'>
                                                <WatchButton>
                                                    View  More  Info
                                                </WatchButton>
                                            </StyledLink>
                                            <WatchButton>
                                                Add to Watchlist
                                            </WatchButton>    
                                        </SideContainer>
                                        </>  
                                    :   <Image 
                                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                                            alt='image' 
                                            key={movie.id}
                                        /> 
                                }
                                </>
                                );
                            })  
                            }   
                </ImageContainer>
            </Slider>
            </Wrapper> 
        </Container>
    );
}


