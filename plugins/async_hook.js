// 异步钩子
import async_hooks from "async_hooks";

// 当前执行上下文的 ID
const eid = async_hooks.executionAsyncId();

// 执行范围回调的句柄ID
const tid = async_hooks.triggerAsyncId();

// 创建异步钩子的实例 里面的回调都是可选的
// 将这些回调理解为不同生命周期事件注册要掉用的函数
const asyncHook = async_hooks.createHook({
	init,
	before,
	after,
	destroy,
	promiseResolve,
});

// 必须显示允许才能开始使用回调
asyncHook.enable();

// 用于禁止监听新的异步事件
asyncHook.disable();

// init() 在对象构造过程中被调用。
// 当此回调运行时，资源可能还没有完成构造。
// 因此，"asyncId" 引用的资源的所有字段可能都没有被填充。
function init(asyncID, type, triggerAsyncId, resource) {}

// before() 在调用资源的回调之前被调用。
// 对于句柄（例如 TCPWrap），它可以被调用 0-N 次，
// 而对于请求（例如 FSReqCallback），它将被调用恰好 1 次。
function before(asyncId) {}

// after() 在资源回调完成后被调用。
function after(asyncId) {}

// destroy() 在销毁资源时被调用。
function destroy(asyncId) {}

// promiseResolve() 仅被 promise 资源调用，
// 当调用传给 Promise 构造函数的 resolve() 函数时
// （直接或通过其他解决 promise 的方式）。
function promiseResolve(asyncId) {}
