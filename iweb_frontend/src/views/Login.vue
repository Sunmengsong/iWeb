<template>
  <div>
    <Header></Header>
    <!--主体内容-->
    <section class="login_box container">
      <h2 class="title2">
        <router-link to="/register">新用户注册</router-link>
        <span>用户登录</span>
      </h2>
      <div class="clearfloat">
        <div class="login">
          <dl class="clearfloat">
            <dt>
              <span class="tips" :style="unameNull">用户名不能为空</span>用户名：
            </dt>
            <dd>
              <input type="text" v-model="uname" placeholder="邮箱/手机号" @blur="unameBlur" />
              <em class="icon_user"></em>
              <i class="icon_error"></i>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="tips" :style="upwdNull">密码不能为空</span>密码：
            </dt>
            <dd>
              <input type="password" v-model="upwd" placeholder="密码" @blur="upwdBlur" />
              <em class="icon_pwd"></em>
              <i class="icon_error"></i>
            </dd>
          </dl>
          <p class="clearfloat">
            <label>
              <input type="checkbox" />
              <span>自动登录</span>
            </label>
            <button type="button" id="login" @click="doLogin()">立 即 登 录</button>
          </p>
        </div>
        <em class="linebetween"></em>
        <p class="qrcode">
          <i></i>
          <span>扫码登录</span>
        </p>
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
      upwd: "",
      unameNull: {},
      upwdNull: {}
    };
  },
  methods: {
    doLogin() {
      let url = "/user/login";
      let data = {
        uname: this.uname,
        upwd: this.upwd
      };
      this.$http.post(url, data).then(res => {
        if (res.data.code === 200) {
          //console.log(res.data.sessionUser);
          this.$store.commit("setSessionUser", res.data.sessionUser);
          alert("登录成功! 点击确定返回之前的页面");
          this.$router.push("/");
        } else {
          alert("登录失败! 错误原因: " + res.data.msg);
        }
      });
    },
    //用户名为空
    unameBlur() {
      if (this.uname === "") {
        this.unameNull = { display: "block !important" };
        //console.log(1);
      } else {
        this.unameNull = { display: "none !important" };
      }
    },
    //密码为空
    upwdBlur() {
      if (this.upwd === "") {
        this.upwdNull = { display: "block !important" };
        //console.log(2);
      } else {
        this.upwdNull = { display: "none !important" };
      }
    }
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>
