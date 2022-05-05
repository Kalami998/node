//
const http = require("http");
const fs = require("fs");
const { Socket } = require("dgram");

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/plain",
	});
	res.end("okay");
});

server.on("upgrade", (req, socket, head) => {
	socket.write("HTTP/1.1 101 Web Socket Protocal Handshake\r\n");
});
