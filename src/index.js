//'use strict';

//var db = require('./db.js');

const Hapi = require('hapi');
import Config from './config';
// Create a server with a host and port
const server = new Hapi.Server();
console.log(Config);
Config.increment();
setTimeout(function(){ console.log(Config); }, 6000);
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
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
 
