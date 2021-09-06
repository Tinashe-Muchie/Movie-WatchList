import React from 'react';
import { useQuery } from '@apollo/client';
import { TOPRATEDTvSHOWS } from '../../Queries/index';
import { 
    Container, Wrapper, Title } from './styles';
import { TopRatedShowsLayout } from '../../Components/index';
import { QueryQuery } from '../../generated/ttv';

function TopRatedTvShows() {

    const { loading, error, data } = useQuery<QueryQuery>(TOPRATEDTvSHOWS);
    return (
        <>
        <Container>
            <Wrapper>
                <Title>
                    Top Rated Shows
                </Title>
            </Wrapper>
        </Container>
        <TopRatedShowsLayout 
            loading={loading}
            error={error}
            data={data}
        />
        </>
    );
}

export default TopRatedTvShows;