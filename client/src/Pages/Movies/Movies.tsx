import React from 'react';
import { useQuery } from '@apollo/client';
import { MOVIES } from '../../Queries/index';
import { QueryQuery } from '../../generated/graphql';
import TopRatedMovies from '../TopRated/TopRatedMovies';
import { Pagination } from '../../Components/index';
import { 
    Container, Wrapper } from './styles';

function Movies() {

    const { loading, error, data } = useQuery<QueryQuery>(MOVIES);
    return (
        <>
        <TopRatedMovies />
        <Container>
            <Wrapper>
            
            <Pagination />
            </Wrapper>
        </Container>
        </>
    );
}

export default Movies;