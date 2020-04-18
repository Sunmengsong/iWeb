/**
 * 处理所有以/upload/*开头请求的路由器
 */
const express = require("express");
const multer = require("multer");
const fs = require("fs");
let router = express.Router();
module.exports = router;

/**
 * 接收客户端上传给服务器的头像文件
 * 访问地址：
 * 		/upload/avatar
 * 请求方法
 * 		POST
 * 请求内容类型
 * 		Content-Type: multipart/form-data
 * 文件字段名
 * 		avatar - 图片文件
 * 		其它文本字段....
 */
let options = {
  dest: "tmp/", //客户端上传的文件临时存储目录
  //limits: {fileSize:8*1024},		//限制上传的文件大小不能超过指定的字节数
  /*
	fileFilter: (req, file, cb)=>{
		//此处可以检查file的原始后缀名，如果符合条件，则保存该文件：
		cb(null, true)
		//否则，文件类型非法，则删除该文件
		cb(null, false)
		//也可以抛出错误，终止文件上传
		cb(new multer.MulterError('文件类型非法'))
	}
	*/
};
let upload = multer(options);
router.post("/avatar", upload.single("avatar"), (req, res, next) => {
  //req.body中保存着随同文件一起上传的文本字段
  //req.file中保存着上传的头像文件(字段名为avatar)
  //console.log('BODY:',  req.body)
  //console.log('FILE:',  req.file)

  //把服务器接收到的客户端上传的文件由临时目录保存到有意义的目录下，并重命名
  let oldPath = req.file.path;
  //原始文件的后缀名为： 原文件名中从最后一个.开始的子串
  let ext = req.file.originalname.substring(
    req.file.originalname.lastIndexOf(".")
  );
  let newPath = randomFileName(ext);
  fs.rename(oldPath, newPath, (err) => {
    //重命名文件，可以实现把文件剪切走功能
    if (err) {
      next(err);
      return;
    }
    let output = {
      code: 200,
      msg: "avatar upload success",
      newName: newPath,
    };
    res.json(output);
  });
});

/**
 *根据指定的后缀名，生成同样后缀的随机文件名
 * 例如：ext:   .jpg
 * 生成的随机文件名可能形如：   时间戳+五位随机数.jpg
 * 10000~100000
 */
function randomFileName(ext) {
  let path = "img/avatar/";
  let timestamp = new Date().getTime();
  let suffix = parseInt(Math.random() * 90000 + 10000);
  return path + timestamp + suffix + ext;
}
