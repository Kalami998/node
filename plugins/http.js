//
const http = require("http");
const consola = require("consola");

// 创建一个代理(agent)实例
const keepAliveAgent = new http.Agent({
	//  即使没有未完成的请求，也要保留套接字，这样它们就可以用于未来的请求，而无需重新建立 TCP 连接
	keepAlive: true,
	// 使用 keepAlive 时，指定TCP keep-alive 数据包的处事延迟
	// keepAliveMsecs,
	// 每个主机允许的最大套接字数量
	// maxSockets,
	// 所有主机总共允许的最大套接字数量
	// maxTotalSockets,
	// 每台主机在空闲状态下保持打开的最大套接字数
	// maxFreeSockets,
	// 选择下一个要使用的空闲套接字时应用的调度策略。
	// scheduling,
	// 套接字超时
	// timeout
});

/**
 * http.createServer([options][, requestListener])
 *
 */

const server = http.createServer();

// 通过 on 绑定事件
server.on("request", (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/plain",
	});
	res.end("hello word");
});

// 通过listen启动服务
// 127.0.0.1 是本电脑的测试ip地址 ，对应的域名是常用的localhost
server.listen(6001, () => {
	consola.success("server is lisenning on 127.0.0.1:6001");
});

// 此外 requestListener 是自动添加到 'request' 事件的函数。
// 所以在创建server实例时也可以直接定义request方法
const server1 = http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/plain",
	});
	res.end(
		JSON.stringify({
			code: 1000,
			data: {
				dataList: [1, 2, 3, 5],
			},
		})
	);
});

server1.listen(6002, () => {
	consola.success("server1 is lisenning on 127.0.0.1:6002");
});

// Agent 负责HTTP客户端的持久性与重用
