const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//创建路由对象
let router = express.Router();

//1.1 获取课程列表
router.get("/list", (req, res, next) => {
  let pageNum = req.query.pageNum;
  if (!pageNum) {
    pageNum = 1; //默认页号为1
  } else {
    pageNum = parseInt(pageNum);
  }
  let typeId = req.query.typeId;
  //WHERE 1: 所有条件都为真, 查询的结果都要
  let whereCondition = " WHERE 1 "; //WHERE的条件
  let sqlValues = []; //SQL中占位符对应的值
  if (typeId) {
    whereCondition += "AND typeId=? ";
    sqlValues.push(typeId);
  }

  let output = {
    pageNum: pageNum,
    pageSize: 3,
    totalCount: 0, //满足条件的总记录数
    pageCount: 0, //总记录数分为几页
    list: null,
  };
  //查询满足条件的总条数
  let sql = "SELECT COUNT(*) AS c FROM course " + whereCondition;
  pool.query(sql, sqlValues, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    output.totalCount = result[0]["c"];
    //总页数
    output.pageCount = Math.ceil(output.totalCount / output.pageSize);
    //从哪一条记录开始获取数据
    let start = (output.pageNum - 1) * output.pageSize;
    //最多读取的记录条数
    let count = output.pageSize;
    sqlValues.push(start);
    sqlValues.push(count);
    let sql =
      "SELECT cid,typeId,title,teacherId,cLength,startTime,address,pic,price,tpid,tpname,tid,tname,maincourse,tpic FROM type AS tp, course AS c, teacher AS t " +
      whereCondition +
      " AND t.tid=c.teacherId AND tp.tpid=c.typeId ORDER BY c.cid DESC LIMIT ?,?";
    pool.query(sql, sqlValues, (err, result) => {
      if (err) {
        next(err);
        return;
      }
      output.list = result;
      res.json(output);
    });
  });
});
//1.2 获取课程详情
router.get("/detail", (req, res, next) => {
  let cid = req.query.cid;
  if (!cid) {
    let output = {
      code: 400,
      msg: "cid required",
    };
    res.json(output);
    return;
  }

  //执行数据库查询--course和teacher表
  let sql =
    "SELECT cid,typeId,teacherId,cLength,startTime,address,pic,price,details,tid,tname,maincourse,tpic,experience,style FROM course AS c, teacher AS t WHERE t.tid=c.teacherId AND cid=?";
  pool.query(sql, cid, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.length === 0) {
      let output = {
        code: 402,
        msg: "cid not exists",
      };
      res.json(output);
    } else {
      res.json(result[0]);
    }
  });
});
//1.3 获取最新课程
router.get("/newest", (req, res, next) => {
  let count = req.query.count;
  if (!count) {
    count = 4;
  } else {
    count = parseInt(count);
  }
  //执行数据库查询--按照课程标号降序排列
  let sql =
    "SELECT cid,title,pic,price,tname FROM course AS c, teacher AS t WHERE t.tid=c.teacherId ORDER BY cid DESC LIMIT ?";
  //LIMIT  ?,?  第一个?表示从哪行开始读取,第二个?表示读取几行
  // LIMIT  ?   唯一的一个?表示从0行开始读取几行
  pool.query(sql, count, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.json(result);
  });
});
//1.4 获取热门课程
router.get("/hottest", (req, res, next) => {
  let count = req.query.count;
  if (!count) {
    count = 4;
  } else {
    count = parseInt(count);
  }
  //执行数据库查询--按照课程购买次数降序排列
  let sql =
    "SELECT cid,title,pic,price,tname FROM course AS c, teacher AS t WHERE t.tid=c.teacherId ORDER BY buyCount DESC LIMIT ?";
  //LIMIT  ?,?  第一个?表示从哪行开始读取,第二个?表示读取几行
  // LIMIT  ?   唯一的一个?表示从0行开始读取几行
  pool.query(sql, count, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.json(result);
  });
});

//导出路由
module.exports = router;
