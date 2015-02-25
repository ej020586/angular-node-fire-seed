#!/usr/bin/env node

/* Create the logs folder */
var fs = require('fs');
try {
    fs.readdirSync('logs');
} catch (error) {
    fs.mkdirSync('logs');
}

/* Winston */
var winston = require('winston');
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
    colorize: true,
    timestamp: true
});
winston.add(winston.transports.DailyRotateFile, {
    colorize: true,
    datePattern: '-yyyy-MM-dd.log',
    filename: 'logs/server',
    timestamp: true
});

/* Uncaught exceptions*/
process.on('uncaughtException', function (error) {
    winston.error('Exiting process due to uncaught exception: ' + error.toString());
    process.exit(error);
});

/* RequireJS */
var requirejs = require('requirejs');
requirejs.config({
    baseUrl: ''
});

/* Express server */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 7677;

//create a web server on the specified port to server files to the browser
server.listen(port);

app.use(express.static(__dirname));// Serve static files from this directory.
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', request.headers['access-control-request-method']);
    response.header('Access-Control-Allow-Headers', request.headers['access-control-request-headers']);
    if (request.method.toLowerCase() === "options") {
        response.send(200);
    } else {
        next();
    }
});

/* Running server */
winston.info('Started server');