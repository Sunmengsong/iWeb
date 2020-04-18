/**
 * 数据库连接池模块
 */
const mysql = require("mysql");

module.exports = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "iweb",
  connectionLimit: 5,
});
