import { ApolloServer } from 'apollo-server';
import { 
    ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import typeDefs from './schema';
import resolvers from './resolvers';
import MovieAPI from './datasources/movie-api';

function createLambdaServer() {
    return new ApolloServerLambda({
        typeDefs, 
        resolvers, 
        dataSources: () => {
            return { 
                movieAPI : new MovieAPI()
            }
        }
    });
}

function createLocalServer() {
    return new ApolloServer({
        typeDefs, 
        resolvers, 
        dataSources: () => {
            return { 
                movieAPI : new MovieAPI()
            }
        }
    });
}

export { createLocalServer, createLambdaServer};