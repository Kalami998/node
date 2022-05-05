// 引入 consola
const consola = require("consola");

// types:
//  'silent'
//  'fatal'
//  'error'
//  'warn'
//  'log'
//  'info'
//  'success'
//  'debug'
//  'trace'
//  'verbose'
//  'ready'
//  'start'

// 指定 类型 type/info/error
consola.start("服务启动");

consola.info("提示");

consola.success("执行成功");

consola.error("运行错误");

// console.log("index");
