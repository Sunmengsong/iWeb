<template>
  <div>
    <Header></Header>
    <section class="register_box container">
      <div class="register">
        <h2>新用户注册</h2>
        <ul>
          <li>
            <span>邮箱：</span>
            <input type="text" v-model="uname" placeholder="请输入邮箱名" />
            <em></em>
            <i></i>
          </li>
          <li>
            <span>手机号：</span>
            <input type="text" v-model="phone" placeholder="请输入手机号" />
            <em></em>
            <i></i>
          </li>
          <li>
            <span>密码：</span>
            <input type="password" v-model="upwd" placeholder="请输入密码" />
            <em></em>
            <i></i>
          </li>
          <li>
            <span>重复密码：</span>
            <input type="password" v-model="upwd2" placeholder="请重复输入密码" />
            <em></em>
            <i></i>
          </li>
          <li>
            <span>验证码：</span>
            <input type="text" class="inp_yzm" placeholder="请输入验证码" v-model="captcha" />
            <img :src="captchaImg" alt />
            <strong class="icon_refresh" @click="randomNum=Math.random()"></strong>
          </li>
          <li class="li_checkbox">
            <label>
              <input v-model="agree" type="checkbox" checked />
              <span>我已阅读并同意用户注册协议</span>
            </label>
          </li>
          <li class="li_btn">
            <button :disabled="!agree" type="button" @click="doRegister">提交注册</button>
          </li>
        </ul>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data: () => {
    return {
      uname: "",
      phone: "",
      upwd: "",
      upwd2: "",
      captcha: "",
      agree: false,
      randomNum: Math.random()
    };
  },
  computed: {
    //获取随机验证码
    captchaImg() {
      return (
        this.$http.defaults.baseURL + "/captcha/register?" + this.randomNum
      );
    }
  },
  methods: {
    doRegister() {
      let url = "/user/register";
      let options = {
        uname: this.uname,
        upwd: this.upwd,
        phone: this.phone,
        captcha: this.captcha
      };
      this.$http
        .post(url, options)
        .then(res => {
          console.log(res);
          if (res.data.code === 200) {
            alert("注册成功, 点击确定跳转至登录页");
            this.$router.push("/login");
          } else {
            alert("错误消息: " + res.data.msg);
          }
        })
        .catch(err => {
          alert("错误消息: " + err);
        });
    }
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>
