const http = require('http')

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Sever request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html' )

    res.write('<head><link rel="stylesheet" href="#"></head>')

    res.write('<h1>Hello World</h1>')

    res.end()

});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});