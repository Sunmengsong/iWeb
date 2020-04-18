const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//引入验证码验证中间件
const captchaCheck = require("../middleware/captchaCheck");
//创建路由对象
let router = express.Router();

//1.1 用户注册
router.use("/register", captchaCheck);
router.post("/register", (req, res, next) => {
  let uname = req.body.uname;
  let upwd = req.body.upwd;
  let phone = req.body.phone;
  //验证是否为空
  if (!uname) {
    let output = {
      code: 401,
      msg: "uname required",
    };
    res.json(output);
    return;
  }
  if (!upwd) {
    let output = {
      code: 402,
      msg: "upwd required",
    };
    res.json(output);
    return;
  }
  if (!phone) {
    let output = {
      code: 403,
      msg: "phone required",
    };
    res.json(output);
    return;
  }
  //检测用户名或电话是否已存在
  let sql = "SELECT uid FROM user WHERE uname=? OR phone=?";
  pool.query(sql, [uname, phone], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.length > 0) {
      let output = {
        code: 409,
        msg: "uname or phone already exists",
      };
      res.json(output);
      return;
    }
    //用户名和手机均未被使用
    let sql = "INSERT INTO user(uname,upwd,phone) VALUES(?,?,?)";
    pool.query(sql, [uname, upwd, phone], (err, result) => {
      if (err) {
        next(err);
        return;
      }
      let output = {
        code: 200,
        msg: "register success",
        uid: result.insertId,
      };
      res.json(output);
    });
  });
});
//1.2 用户登录
router.post("/login", (req, res, next) => {
  let uname = req.body.uname;
  let upwd = req.body.upwd;
  //检测是否为空
  if (!uname) {
    let output = {
      code: 401,
      msg: "uname required",
    };
    res.json(output);
    return;
  }
  if (!upwd) {
    let output = {
      code: 402,
      msg: "upwd required",
    };
    res.json(output);
    return;
  }
  let sql =
    "SELECT uid, uname, nickname FROM user WHERE (uname=? OR phone=?) AND upwd=?";
  pool.query(sql, [uname, uname, upwd], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.length === 0) {
      let output = {
        code: 403,
        msg: "login error",
      };
      res.json(output);
    } else {
      //在当前服务器会话中记录登录用户信息
      req.session.user = result[0];
      req.session.save();
      let output = {
        code: 200,
        msg: "login success",
        sessionUser: req.session.user,
      };
      res.json(output);
    }
  });
});
//1.3 检测用户名是否已存在
router.get("/check_uname", (req, res, next) => {
  let uname = req.query.uname;
  if (!uname) {
    let output = {
      code: 400,
      msg: "uname required",
    };
    res.json(output);
    return;
  }
  let sql = "SELECT uid FROM user WHERE uname=?";
  pool.query(sql, uname, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.length > 0) {
      let output = {
        code: 200,
        msg: "uname exists",
      };
      res.json(output);
    } else {
      let output = {
        code: 401,
        msg: "uname not exists",
      };
      res.json(output);
    }
  });
});
//1.4 检测手机号是否已存在
router.get("/check_phone", (req, res, next) => {
  let phone = req.query.phone;
  if (!phone) {
    let output = {
      code: 400,
      msg: "phone required",
    };
    res.json(output);
    return;
  }
  let sql = "SELECT uid FROM user WHERE phone=?";
  pool.query(sql, phone, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.length > 0) {
      let output = {
        code: 200,
        msg: "phone exists",
      };
      res.json(output);
    } else {
      let output = {
        code: 401,
        msg: "phone not exists",
      };
      res.json(output);
    }
  });
});

//导出路由
module.exports = router;
