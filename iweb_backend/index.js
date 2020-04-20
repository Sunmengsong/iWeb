/**
 * 入口文件
 */
const express = require("express");

// 创建服务器, 监听端口
let port = 9090;
let app = express();
app.listen(port, () => {
  console.log("Server start, listening on port: ", port);
});

/* 使用前置中间件 */
//bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.json({})); //将application/json数据解析到req.body

//cors
const cors = require("cors");
app.use(
  cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
    //响应消息必须明确允许客户端携带身份认证信息
    credentials: true,
  })
);

//session
const session = require("express-session");
app.use(
  session({
    secret: "iweb000", //生成随机的sessionID
    saveUninitialized: true, //自动保存未存储的会话数据
    resave: true, //当会话数据被修改后, 需要自动保存?
  })
);

/* 路由 */
//用户相关
const userRouter = require("./routes/user");
app.use("/user", userRouter);
//检查用户登录状态中间件
const loginCheck = require("./middleware/loginCheck");
//收藏夹相关操作需进行登录检查
app.use("/favorite", loginCheck);
//收藏夹相关
const favoriteRouter = require("./routes/favorite");
app.use("/favorite", favoriteRouter);
//课程类型相关
const typeRouter = require("./routes/type");
app.use("/type", typeRouter);
//课程相关
const courseRouter = require("./routes/course");
app.use("/course", courseRouter);
//教师相关
const teacherRouter = require("./routes/teacher");
app.use("/teacher", teacherRouter);
//购物车相关
//购物车相关操作需进行登录检查
app.use("/cart", loginCheck);
const cartRouter = require("./routes/cart");
app.use("/cart", cartRouter);
//验证码相关
const captchaRouter = require("./routes/captcha");
app.use("/captcha", captchaRouter);
//文件上传相关
const uploadRouter = require("./routes/upload");
app.use("/upload", uploadRouter);

/* 后置中间件 */
//自定义错误中间件
app.use((err, req, res, next) => {
  res.status(500);
  let output = {
    code: 500,
    msg: "Server Interval Error",
    err: err,
  };
  res.json(output);
});
