<template>
  <div>
    <!--顶部-->
    <div class="top">
      <div class="container">
        <ul>
          <li class="favorite">
            <a href>收藏i前端</a>
          </li>
          <li class="mobilephone">
            <a href>下载手机客户端</a>
          </li>
          <li class="email">反馈邮箱：iweb@126.com</li>
          <li class="telephone">客服热线：4008-200-200</li>
        </ul>
      </div>
    </div>

    <!--header-->
    <header class="header">
      <div class="container">
        <h1 class="logo">
          <a href></a>
        </h1>
        <div class="h_right">
          <div class="search">
            <input type="text" placeholder="课程搜索" />
            <button type="button"></button>
          </div>
          <div class="h_cart">
            <a href>
              <em class="icon-cart"></em>我的购物车(0)
              <em class="icon-arrows"></em>
            </a>
            <div class="cart_dropdown">
              <span class="line"></span>
              <ul>
                <li class="clearfloat">
                  <a href>
                    <img src="img-course/01.png" alt />
                  </a>
                  <dl>
                    <dt>
                      <a href>HTML零基础入门零基础入门零基础入门</a>
                    </dt>
                    <dd>¥599.00</dd>
                  </dl>
                  <em class="icon-remove"></em>
                </li>
                <li class="clearfloat">
                  <a href>
                    <img src="img-course/02.png" alt />
                  </a>
                  <dl>
                    <dt>
                      <a href>HTML零基础入门</a>
                    </dt>
                    <dd>¥599.00</dd>
                  </dl>
                  <em class="icon-remove"></em>
                </li>
              </ul>
              <div class="sum clearfloat">
                <p>
                  共计：
                  <span>¥1298.00</span>
                </p>
                <a href>去结算</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!--导航-->
    <nav class="navbar">
      <div class="container">
        <div class="nav">
          <ul>
            <li class="active">
              <a href>个人中心</a>
            </li>
          </ul>
        </div>
        <router-link to="/" class="backhome">回到首页</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>