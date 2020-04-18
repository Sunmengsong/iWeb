const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//创建路由对象
let router = express.Router();

//课程类型
router.get("/", (req, res, next) => {
  let sql = "SELECT tpid,tpname FROM type ORDER BY tpid";
  pool.query(sql, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.json(result);
  });
});

//导出路由
module.exports = router;
