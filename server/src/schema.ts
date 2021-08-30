import { gql } from 'apollo-server';

const typeDefs = gql`

    type Query {
        getMovies: [Movies!]!
        getTvShows: [TvShows!]!
        getTopRatedMovies: [Movies!]!
        getUpcomingMovies: [Movies!]!
        getTopRatedTvShows: [TvShows!]!
        search(name: String!): [Search!]
    }
    "The Search returns either Movies or TvShows"
    union Search = Movies | TvShows

    "The Movies type represents movies retrieved from discover movies"
    type Movies {
        poster_path: String
        release_date: String
        id: Int!
        title: String
        vote_average: Float
        details: MovieDetails
        credits: [Cast!]
        reviews: [Reviews]
        videos: [Videos]
    }

    "The Tv Shows type represents movies retrieved from discover Tv Shows"
    type TvShows {
        poster_path: String
        id: Int!
        vote_average: Float
        first_air_date: String
        name: String
        details: TvShowDetails
        credits: [Cast!]
        reviews: [Reviews]
        videos: [Videos]
    }

    type MovieDetails {
        genres: [Genres]
        id: Int!
        poster_path: String
        release_date: String
        revenue: Int
        runtime: Int
        title: String
        vote_average: Float
    }

    type TvShowDetails {
        created_by: [Creators]
        first_air_date: String
        genres: [Genres]
        id: Int!
        last_air_date: String
        name: String
        number_of_episodes: Int
        number_of_seasons: Int
        poster_path: String    
        seasons: [Seasons]
        vote_average: Float
    }

    type Genres {
        id: Int!
        name: String
    }

    type Seasons {
        air_date: String
        episode_count: Int
        id: Int!
        name: String
        poster_path: String
        season_number: Int
    }
    """
    These are the people that created a Tv Show, to be used in the Tv Show
    details type. 
    """
    type Creators {
        id: Int!
        name: String
        profile_path: String
    }

    "Movie/Tv Show cast"
    type Cast {
        id: Int!
        name: String
        profile_path: String
        character: String
    }

    "Movie/TvShows reviews"
    type Reviews {
        author_details: Author
        content: String
        id: String
    }

    "A movie/Tv Show review author"
    type Author {
        name: String
        avatar_path: String
        rating: String
    }

    "Videos is used to retrieve trailers for movies/ Tv Shows"
    type Videos {
        name: String
        key: String
        site: String
        type: String
        id: String
    }
`;

export default typeDefs;