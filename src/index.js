const Hapi = require('hapi');
import { config } from './config';
import { logger } from './services/logger';

// Create a server with a host and port
const server = new Hapi.Server();
server.on('response', function(request, response) {logger.info(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);});
//server.on('log', function(data) {logger.info(data);});
import db from './db2';
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

//setup socket io documentation https://github.com/sibartlett/hapi-io/blob/master/README.md
server.register({
  register: require('hapi-io'),
  options: {
  }
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {

        return reply('Hello World!');
    }
});

// Start the server
server.start((err) => {

    if (err) {
	logger.error(err);
        throw err;
    }
    logger.info('Server running at: '+ server.info.uri);
});
 
