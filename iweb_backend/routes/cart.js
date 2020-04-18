const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//创建路由对象
let router = express.Router();

//导出路由
module.exports = router;
