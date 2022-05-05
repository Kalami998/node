// 测试使用 http2 协议
let http2;

try {
	http2 = require("http2");
} catch {
	console.log("http2 support is disabled!");
}

// 引入文件模块
const fs = require("fs");

// 创建一个实例，在与浏览器客户端通信时使用
const server = http2.createSecureServer({
	key: fs.readFileSync("localhost-privkey.pem"),
	cert: fs.readFileSync("localhost-cert.pem"),
});

server.on("error", (err) => {
	console.log("error");
});

server.on("connect", (err) => {
	console.log("connect");
});

server.on("stream", (stream, headers) => {
	stream.respond({
		"content-type": "text/html;charset=utf-8",
		":status": 200,
	});
	stream.end("<h1>hello word</h1>");
});

server.listen("4396");
