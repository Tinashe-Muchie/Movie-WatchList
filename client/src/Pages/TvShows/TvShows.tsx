import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Context } from '../../Context/GlobalContext';
import { 
    Container, Wrapper, Title } from './style';
import TopRatedTvShows from '../TopRated/TopRatedTvShows';
import { TvShowsLayout } from '../../Components/index';
import { TvShowsPagination } from '../../Components/index';
import { QueryQuery } from '../../generated/tvshows';

function TvShows() {

    const { TvSHOWS } = useContext(Context);

    const { loading, error, data } = useQuery<QueryQuery>(TvSHOWS);
    return (
        <>
        <TopRatedTvShows />
        <Container>
            <Wrapper>
            <Title>
                Discover More Shows
            </Title>
            <TvShowsLayout 
                loading={loading}
                error={error}
                data={data}
            />
            <TvShowsPagination />
            </Wrapper>
        </Container>
        </>
    );
}

export default TvShows;