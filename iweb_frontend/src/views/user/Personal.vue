<template>
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
        <li class="active">
          <router-link to="personal">个人资料</router-link>
        </li>
        <li>
          <router-link to="changepwd">修改密码</router-link>
        </li>
      </ul>
    </aside>
    <div class="user_main">
      <h2 class="title3">
        <span>个人资料修改</span>
      </h2>
      <div class="userform">
        <ul>
          <li>
            <span>昵称：</span>
            <p>
              <input type="text" placeholder="你的昵称" />
            </p>
          </li>
          <li>
            <span>邮箱：</span>
            <p>
              <input type="text" value="ding@126.com" disabled />
            </p>
          </li>
          <li>
            <span>手机号：</span>
            <p>
              <input type="text" value="18501000000" disabled />
            </p>
          </li>
          <li>
            <span>性别：</span>
            <p>
              <label>
                <input type="radio" checked /> 男
              </label>
              <label>
                <input type="radio" /> 女
              </label>
            </p>
          </li>
          <li>
            <span>年龄：</span>
            <p>
              <select name="age">
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20" selected>20</option>
                <option value="21">21</option>
              </select>
            </p>
          </li>
          <li>
            <span>学历：</span>
            <p>
              <select name="education">
                <option value="高中及以下">高中及以下</option>
                <option value="大专">大专</option>
                <option value="本科" selected>本科</option>
                <option value="硕士">硕士</option>
                <option value="博士">博士</option>
              </select>
            </p>
          </li>
          <li>
            <span>职业：</span>
            <p>
              <select name="profession">
                <option value="IT/互联网" selected>IT/互联网</option>
                <option value="职员">职员</option>
                <option value="公务员">公务员</option>
                <option value="教师">教师</option>
                <option value="自由职业">自由职业</option>
              </select>
            </p>
          </li>
          <li class="li_btn">
            <button type="button">提交修改</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>