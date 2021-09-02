const resolvers = {
    Query: {
        /*returns an array of movies from the discover endpoint that will be used to 
        populate the movie section in the frontend */
        getMovies: async (_: unknown, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getMovies();
        },
        /*returns an array of Tv Shows from the discover endpoint*/
        getTvShows: async (_: unknown, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getTvShows();
        },
        /*returns an array of top rated movies on tmdb*/
        getTopRatedMovies: async (_: unknown, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getTopRatedMovies();
        },
        /*returns an array of upcoming movies*/
        getUpcomingMovies: async (_: unknown, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getUpcomingMovies();
        },
        /*returns an array of top rated tv shows on tmdb*/
        getTopRatedTvShows: async (_: unknown, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getTopRatedTvShows();
        },
        /*returns an array of either TvShows or movies depending on the client's input*/
        search: async ( _: unknown, {name}:{name: string}, {dataSources}: {dataSources: any}) => {
            const data: MovieIF[] | TvShowIF[] = await dataSources.movieAPI.Search(name);
            return data.map((item: MovieIF | TvShowIF) => {
                if(item.media_type === 'movie') return {
                    __typename: 'Movies',
                    ...item
                }

                if(item.media_type === 'tv') return {
                    __typename: 'TvShows',
                    ...item
                }
            });
        }
    },

    Movies: {
        /*returns an object of movie details*/
        details: async ({id}:{id: number}, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getMovieDetails(id);
        },
        /*returns an array of people/actors involved in a movie/Tv Show*/
        credits: async ({id}:{id: number}, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getMovieCasts(id);
        },
        /*returns an array of reviews for a selected movie*/
        reviews: async ({id}:{id: number}, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getMovieReviews(id);
        },
        /*returns an array of trailer videos for a selected movie*/
        videos: async ({id}:{id: number}, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getMovieVideos(id);
        }
    },

    TvShows: {
        /*returns an object of Tv Shows' details*/
        details: async ({id}:{id: number}, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getTvShowsDetails(id);
        },
        /*returns an array of people involved in a tv show*/
        credits: async ({id}:{id: number}, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getTvShowCasts(id);
        },
        /*returns an array of reviews posted by people on the internet about a selected 
        tv show*/
        reviews: async ({id}:{id: number}, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getTvShowReviews(id);
        },
        /*returns an array of trailer videos for tv shows*/
        videos: async ({id}:{id: number}, __: unknown, {dataSources}: {dataSources: any}) => {
            return dataSources.movieAPI.getTvShowVideos(id);
        }
    } 
}

export default resolvers;

interface MovieIF {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string; 
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
    
interface TvShowIF {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: Array<string>;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}