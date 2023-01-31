const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    if (request.url === "/produto") {
        response.end(
            JSON.stringify({
                message: "Rota do produto",
            })
        );
    }

    response.end(("Minha primeira aplicação com NodeJS"));

}).listen(4001, () => console.log("O servidor está rodando na porta 4001"));