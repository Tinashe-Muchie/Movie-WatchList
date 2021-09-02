import 'dotenv/config';
import { createLocalServer } from './server';

const server = createLocalServer();

server.listen().then(() => {
    console.log('server is running on port 4000');
})
