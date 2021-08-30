import { gql } from '@apollo/client';

export const TvSHOWS = gql`
    query Query {
        getTvShows {
            poster_path
            id
            vote_average
            name
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
            first_air_date
            details {
            created_by {
                id
                name
                profile_path
            }
            first_air_date
            genres {
                id
                name
            }
            id
            last_air_date
            name
            number_of_episodes
            number_of_seasons
            poster_path
            seasons {
                air_date
                episode_count
                id
                name
                poster_path
                season_number
            }
            vote_average
            }
        }
    }
`;