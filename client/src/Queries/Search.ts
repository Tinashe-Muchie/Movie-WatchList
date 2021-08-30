import { gql } from '@apollo/client';

export const SEARCH = gql`
    query Query($searchName: String!) {
        search(name: $searchName) {
            ... on Movies {
            poster_path
            release_date
            id
            title
            vote_average
            details {
                genres {
                id
                name
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
            ... on TvShows {
            poster_path
            vote_average
            first_air_date
            name
            id
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
            credits {
                id
                name
                profile_path
                character
            }
            reviews {
                author_details {
                avatar_path
                name
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
    }
`;