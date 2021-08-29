import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import MovieAPI from './datasources/movie-api';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return { 
            movieAPI : new MovieAPI()
        }
    }
});

server.listen().then(() => {
    console.log('server is running on port 4000');
})
