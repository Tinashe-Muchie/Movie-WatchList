import { useQuery } from '@apollo/client';
import { TOPRATEDMOVIES } from '../../Queries/index';
import { QueryQuery } from '../../generated/gql';
import { TopRatedMoviesLayout } from '../../Components/index';
import { 
    Container, Wrapper, Title } from './styles';

function TopRatedMovies() {

    const { loading, error, data } = useQuery<QueryQuery>(TOPRATEDMOVIES);
    
    return (
        <>
        <Container>
            <Wrapper>
                <Title>
                    Top Rated Movies
                </Title>
            </Wrapper>
        </Container>
        <TopRatedMoviesLayout 
            loading={loading}
            error={error}
            data={data}
        />
        </>
    );
}

export default TopRatedMovies;