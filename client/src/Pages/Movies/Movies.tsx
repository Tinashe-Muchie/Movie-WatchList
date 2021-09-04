import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { QueryQuery } from '../../generated/graphql';
import TopRatedMovies from '../TopRated/TopRatedMovies';
import { Pagination } from '../../Components/index';
import { 
    Container, Wrapper, Title } from './styles';
import { Context } from '../../Context/GlobalContext'; 
import { MoviesLayout } from '../../Components/index';

export const Movies: React.FunctionComponent = () => {

    const { MOVIES } = useContext(Context);

    const { loading, error, data } = useQuery<QueryQuery>(MOVIES);
    console.log(data)
    return (
        <>
        <TopRatedMovies />
        <Container>
            <Wrapper>
            <Title>
                Discover More Movies
            </Title>
            <MoviesLayout 
                loading={loading}
                error={error}
                data={data}
            />
            <Pagination />
            </Wrapper>
        </Container>
        </>
    );
}
