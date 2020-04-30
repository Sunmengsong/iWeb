<template>
  <section class="container user clearfloat">
    <aside class="user_side">
      <ul>
        <li>
          <router-link to="user">个人中心首页</router-link>
        </li>
        <li class="active">
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
      <section class="user_course">
        <h2 class="title3">
          <span>我的课程</span>
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>