// 引入事件模块
const events = require("events");
const { listeners } = require("process");

// 创建 是事件触发与事件监听器 实例 eventEmitter
const eventEmitter = new events.EventEmitter();

// 或者使用简单的声明方式
/**
 *  const EventEmitter = require("events").EventEmitter
 *
 *  const event = new EventEmitter()
 */

const connection = function () {
	console.log("链接成功");
};

// 1.通过 addListener 为指定事件添加一个监听器
eventEmitter.addListener("receive", () => {
	console.log("接收到监听 addListener");
});

// 2.通过 on 为事件制定一次监听器，绑定监听值，后面跟回调
eventEmitter.on("trigger", () => {
	console.log("事件触发");
	connection();
});

// 3.通过 once 绑定，但这种方式只会触发一次
eventEmitter.once("once", (data) => {
	console.log("执行一次", data);
});

eventEmitter.on("remove", (msg) => {
	console.log(msg);
});

// 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。
// setMaxListeners 函数用于改变监听器的默认限制的数量。
eventEmitter.setMaxListeners(10);

// 查询当前事件的监听数组 listeners 需要绑定到具体的事件名
var listenerList = eventEmitter.listeners("trigger");

console.log("当前事件绑定的监听数组", listenerList);

var eventListeners = eventEmitter.listenerCount("trigger");
console.log(eventListeners + " 个监听器监听连接事件。");

setTimeout(() => {
	// 通过 emit 触发，后面可以进行传参
	eventEmitter.emit("receive");
	eventEmitter.emit("trigger");
	eventEmitter.emit("once", "edddd");

	eventEmitter.emit("remove", "先出发一次移除");

	eventEmitter.removeListener("remove", () => {
		console.log("事件移除成功");
	});

	// removeAllListeners([event])
	// 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
	eventEmitter.removeAllListeners();

	console.log("当前", eventEmitter);
}, 500);
