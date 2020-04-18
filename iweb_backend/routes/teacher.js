const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//创建路由对象
let router = express.Router();

//1.1 获取讲师列表
router.get("/list", (req, res, next) => {
  //读取客户端提交的请求数据
  let format = req.query.format;
  if (!format || format !== "full") {
    format = "short";
  }

  let sql = "SELECT ";
  if (format === "short") {
    sql += " tid,tname,maincourse,tpic ";
  } else if (format === "full") {
    sql += " tid,tname,maincourse,tpic,experience,style ";
  }
  sql += " FROM teacher ORDER BY tid";
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
