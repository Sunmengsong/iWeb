<template>
  <section class="container user clearfloat">
    <aside class="user_side">
      <ul>
        <li class="active">
          <router-link to="user">个人中心首页</router-link>
        </li>
        <li>
          <router-link to="mycourse">我的课程</router-link>
        </li>
        <li>
          <router-link to="favorite">我的收藏</router-link>
        </li>
        <li>
          <router-link to="personal">个人资料</router-link>
        </li>
        <li>
          <router-link to="changepwd">修改密码</router-link>
        </li>
      </ul>
    </aside>
    <div class="user_main">
      <div class="user_info">
        <h2>丁当，您好~欢迎来到会员中心！</h2>
        <p>
          <span>邮箱：ding@tedu.cn</span>
          <span>手机号：18501051518</span>
          <a href>修改资料</a>
        </p>
        <p>您在i前端共购买过10门课程，其中已学完3门，剩余7门。</p>
      </div>
      <section class="user_course">
        <h2 class="title3">
          <span>我购买的课程</span>
        </h2>
        <ul class="clearfloat">
          <li>
            <a href>
              <div class="uc_img">
                <img src="img-course/01.png" alt />
                <span>未学习</span>
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
          <li>
            <a href>
              <div class="uc_img">
                <img src="img-course/02.png" alt />
                <span>未学习</span>
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
          <li>
            <a href>
              <div class="uc_img">
                <img src="img-course/03.png" alt />
                <span class="history">已学完</span>
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
        </ul>
      </section>
      <section class="user_course">
        <h2 class="title3">
          <span>我的收藏</span>
        </h2>
        <ul class="clearfloat">
          <li>
            <a href>
              <div class="uc_img">
                <img src="img-course/01.png" alt />
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
          <li>
            <a href>
              <div class="uc_img">
                <img src="img-course/02.png" alt />
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
          <li>
            <a href>
              <div class="uc_img">
                <img src="img-course/03.png" alt />
              </div>
              <p>HTML5基础入门</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>