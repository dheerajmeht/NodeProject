const http = require("http");
const routes = require("./route");

const server = http.createServer(routes);
//console.log(req.url, req.method, req.headers);

server.listen(3000);

/* function rqListener(req, res) {} */
//http.createServer(function(req, res) {});
