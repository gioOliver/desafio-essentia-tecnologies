const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Frontend rodando');
});

server.listen(4200, () => {
    console.log('Frontend rodando na porta 4200');
});