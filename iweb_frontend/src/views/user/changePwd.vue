<template>
  <div>
    <section class="container user clearfloat">
      <aside class="user_side">
        <ul>
          <li>
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
          <li class="active">
            <router-link to="changepwd">修改密码</router-link>
          </li>
        </ul>
      </aside>
      <div class="user_main">
        <h2 class="title3">
          <span>修改密码</span>
        </h2>
        <div class="userform">
          <ul>
            <li>
              <span>原密码：</span>
              <p>
                <input type="text" placeholder="请输入您的旧密码" />
              </p>
            </li>
            <li>
              <span>新密码：</span>
              <p>
                <input type="text" placeholder="请输入新密码" />
              </p>
            </li>
            <li>
              <span>重复新密码：</span>
              <p>
                <input type="text" placeholder="请重复输入新密码" />
              </p>
            </li>
            <li class="li_btn">
              <button type="button">提交修改</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>