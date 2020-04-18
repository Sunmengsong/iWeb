const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//创建路由对象
let router = express.Router();

//1.1 添加收藏
router.post("/add", (req, res, next) => {
  let cid = req.body.cid;
  if (!cid) {
    let output = {
      code: 401,
      msg: "cid required",
    };
    res.json(output);
    return;
  }
  let uid = req.session.user.uid;

  //验证客户端提交的cid是否存在
  let sql0 = "SELECT cid FROM course WHERE cid=?";
  pool.query(sql0, cid, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.length === 0) {
      let output = {
        code: 409,
        msg: "cid not exists",
      };
      res.json(output);
      return;
    }
    //再验证是否已经添加过该收藏
    let sql1 = "SELECT fid FROM favorite WHERE userId=? AND courseId=?";
    pool.query(sql1, [uid, cid], (err, result) => {
      if (err) {
        next(err);
        return;
      }
      if (result.length === 0) {
        let sql2 = "INSERT INTO favorite VALUES(NULL, ?, ?, ?)";
        pool.query(sql2, [uid, cid, new Date().getTime()], (err, result) => {
          if (err) {
            next(err);
            return;
          }
          let output = {
            code: 200,
            msg: "favorite add success",
            fid: result.insertId,
          };
          res.json(output);
        });
      } else {
        let sql3 = "UPDATE favorite SET fTime=? WHERE fid=?";
        pool.query(
          sql3,
          [new Date().getTime(), result[0].fid],
          (err, result) => {
            if (err) {
              next(err);
              result;
            }
            let output = {
              code: 201,
              msg: "favorite update success",
            };
            res.json(output);
          }
        );
      }
    });
  });
});
//1.2 收藏列表
router.get("/list", (req, res, next) => {
  let uid = req.session.user.uid;
  let sql =
    "SELECT fid, courseId, fTime, title, pic, price FROM favorite AS f,course AS c WHERE c.cid=f.courseId AND f.userId=? ORDER BY f.fTime DESC";
  pool.query(sql, uid, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    res.json(result);
  });
});

//导出路由
module.exports = router;
