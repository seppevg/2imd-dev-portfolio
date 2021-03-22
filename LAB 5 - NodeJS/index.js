/*Testing Node - Chalk
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
*/

//Getting Started
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    switch (req.url) {
        case "/signup":
            res.end('This is the sign up page!');
            break;

        default:
            res.end('Hello World');
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});