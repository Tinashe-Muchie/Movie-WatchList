import { RESTDataSource } from 'apollo-datasource-rest';

class MovieAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://api.themoviedb.org/3/';
    }

    async getMovies(page_number: number) {
        return this.get(`discover/movie?api_key=${process.env.API_KEY}&language=en-US&
        sort_by=popularity.desc&include_adult=false&include_video=false&page=${page_number}`);
    }

    async getTvShows(page_number: number) {
        return this.get(`discover/tv?api_key=${process.env.API_KEY}&language=en-US&
        sort_by=popularity.desc&page=${page_number}&include_null_first_air_dates=false`);
    }

    async getMovieDetails(movie_id: number) {
        return this.get(`movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`);
    }

    async getTvShowsDetails(tv_id: number) {
        return this.get(`tv/${tv_id}?api_key=${process.env.API_KEY}&language=en-US`);
    }

    async getMovieCasts(movie_id: number) {
        const {cast} = await this.get(`movie/${movie_id}/credits?api_key=${process.env.API_KEY}&
        language=en-US`);
        return cast;
    }

    async getMovieReviews(movie_id: number) {
        const {results} = await this.get(`movie/${movie_id}/reviews?api_key=${process.env.API_KEY}&
        language=en-US&page=1`);
        return results;
    }

    async getMovieVideos(movie_id: number) {
        const {results} = await this.get(`movie/${movie_id}/videos?api_key=${process.env.API_KEY}&
        language=en-US`);
        return results;
    }

    async getPopularMovies() {
        const {results} = await this.get(`movie/popular?api_key=${process.env.API_KEY}&
        language=en-US&page=1`);
        return results;
    }

    async getTopRatedMovies() {
        const {results} = await this.get(`movie/top_rated?api_key=${process.env.API_KEY}&
        language=en-US&page=1`);
        return results;
    }

    async getUpcomingMovies() {
        const {results} = await this.get(`movie/upcoming?api_key=${process.env.API_KEY}&
        language=en-US&page=1`);
        return results;
    }

    async getTvShowCasts(tv_id: number) {
        const {cast} = await this.get(`tv/${tv_id}/credits?api_key=${process.env.API_KEY}&
        language=en-US`);
        return cast;
    }

    async getTvShowReviews(tv_id: number) {
        const {results} = await this.get(`tv/${tv_id}/reviews?api_key=${process.env.API_KEY}&
        language=en-US&page=1`);
        return results;
    }

    async getTvShowVideos(tv_id: number) {
        const {results} = await this.get(`tv/${tv_id}/videos?api_key=${process.env.API_KEY}&
        language=en-US`);
        return results;
    }

    async getPopularTvShows() {
        const {results} = await this.get(`tv/popular?api_key=${process.env.API_KEY}&
        language=en-US&page=1`);
        return results;
    }

    async getTopRatedTvShows() {
        const {results} = await this.get(`tv/top_rated?api_key=${process.env.API_KEY}&
        language=en-US&page=1`);
        return results;
    }

    async Search(query: string) {
        const {results} = await this.get(`search/multi?api_key=${process.env.API_KEY}&
        language=en-US&query=${query}&page=1&include_adult=false`);
        return results;
    } 
}

export default MovieAPI;