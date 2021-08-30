import { gql } from '@apollo/client';

export const MOVIES = gql`
    query Query {
        getMovies {
            poster_path
            release_date
            id
            title
            vote_average
            details {
            genres {
                name
                id
            }
            id
            poster_path
            release_date
            revenue
            runtime
            title
            vote_average
            }
            credits {
            id
            name
            profile_path
            character
            }
            reviews {
            author_details {
                name
                avatar_path
                rating
            }
            content
            id
            }
            videos {
            name
            key
            site
            type
            id
            }
        }
    }
`;