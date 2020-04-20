<template>
  <div>
    <Header></Header>
    <!--banner-->
    <div class="banner">
      <!-- 图片列表-->
      <ul>
        <li
          style="background: url(/assets/images/banner01.jpg) center 0 no-repeat; display: block;z-index: 20;"
        >
          <a href="#"></a>
        </li>
        <li style="background: url(/assets/images/banner02.jpg) center 0 no-repeat;">
          <a href="#"></a>
        </li>
        <li style="background: url(/assets/images/banner03.jpg) center 0 no-repeat;">
          <a href="#"></a>
        </li>
        <li style="background: url(/assets/images/banner04.jpg) center 0 no-repeat;">
          <a href="#" class="link"></a>
        </li>
      </ul>
      <!-- 左右箭头-->
      <span class="cut prev"></span>
      <span class="cut next"></span>
      <!-- 小圆点指示器-->
      <div class="indicator">
        <a href class="cur"></a>
        <a href></a>
        <a href></a>
        <a href></a>
      </div>
    </div>
    <!--主体内容-->
    <div class="container">
      <section class="ind_1">
        <h2 class="title">
          <span>最新课程</span>
          <a href>更多</a>
        </h2>
        <ul class="course clearfloat">
          <li v-for="(item, index) in newestList" :key="index">
            <a href class="a_img">
              <img :src="'http://127.0.0.1/iweb/'+item.pic" />
            </a>
            <!-- <a href class="a_img">
              <img src="../assets/img-course/01.png" />
            </a>-->
            <a href class="a_text">{{item.title}}</a>
            <p>{{item.tname}}</p>
            <strong>{{item.price | currency}}</strong>
          </li>
          <!-- <li>
                <a href="" class="a_img"><img src="img-course/02.png" alt=""/></a>
                <a href="" class="a_text">HTML5基础入门</a>
                <p>讲师：成亮</p>
                <strong>¥ 799.00</strong>
            </li>
            <li>
                <a href="" class="a_img"><img src="img-course/03.png" alt=""/></a>
                <a href="" class="a_text">HTML5基础入门</a>
                <p>讲师：成亮</p>
                <strong>¥ 799.00</strong>
            </li>
            <li>
                <a href="" class="a_img"><img src="img-course/04.png" alt=""/></a>
                <a href="" class="a_text">HTML5基础入门</a>
                <p>讲师：成亮</p>
                <strong>¥ 799.00</strong>
          </li>-->
        </ul>
      </section>
      <section class="ind_2">
        <h2 class="title">
          <span>热门课程</span>
          <a href>更多</a>
        </h2>
        <ul class="course clearfloat">
          <li v-for="(item, index) in hottestList" :key="index">
            <a href class="a_img">
              <img :src="'http://127.0.0.1/iweb/'+item.pic" alt />
            </a>
            <!-- <a href class="a_img">
              <img src="../assets/img-course/01.png" alt />
            </a>-->
            <a href class="a_text">{{item.title}}</a>
            <p>讲师：{{item.tname}}</p>
            <strong>{{item.price | currency}}</strong>
          </li>
          <!-- <li>
            <a href class="a_img">
              <img src="img-course/05.png" alt />
            </a>
            <a href class="a_text">HTML5基础入门</a>
            <p>讲师：成亮</p>
            <strong>¥ 799.00</strong>
          </li>
          <li>
            <a href class="a_img">
              <img src="img-course/02.png" alt />
            </a>
            <a href class="a_text">HTML5基础入门</a>
            <p>讲师：成亮</p>
            <strong>¥ 799.00</strong>
          </li>
          <li>
            <a href class="a_img">
              <img src="img-course/01.png" alt />
            </a>
            <a href class="a_text">HTML5基础入门</a>
            <p>讲师：成亮</p>
            <strong>¥ 799.00</strong>
          </li>-->
        </ul>
      </section>
      <section class="ind_3">
        <h2 class="title">
          <span>名师堂</span>
          <a href>更多</a>
        </h2>
        <ul class="ind_teacher clearfloat">
          <li v-for="(item, index) in teacherList" :key="index">
            <a href>
              <img :src="'http://127.0.0.1/iweb/'+item.tpic" alt />
            </a>
            <p>讲师：{{item.tname}}</p>
            <span>主讲：{{item.maincourse}}</span>
          </li>
          <!-- <li>
                <a href=""><img src="img-teacher/cl.jpg" alt=""/></a>
                <p>讲师：成亮</p>
                <span>主讲：Bootstrap</span>
          </li>-->
          <!-- <li>
                <a href=""><img src="img-teacher/cl.jpg" alt=""/></a>
                <p>讲师：成亮</p>
                <span>主讲：HTML&CSS</span>
            </li>
            <li>
                <a href=""><img src="img-teacher/cl.jpg" alt=""/></a>
                <p>讲师：成亮</p>
                <span>主讲：AngularJS</span>
          </li>-->
        </ul>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data: () => {
    return {
      newestList: {},
      hottestList: {},
      teacherList: {}
    };
  },
  methods: {
    //获取最新课程
    getNewest() {
      let url = "/course/newest";
      this.$http
        .get(url)
        .then(res => {
          this.newestList = res.data;
          //console.log(this.newestList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取热门课程
    getHottest() {
      let url = "/course/hottest";
      this.$http
        .get(url)
        .then(res => {
          this.hottestList = res.data;
          //console.log(this.newestList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取教师列表
    getTeacher() {
      let url = "/teacher/list";
      this.$http
        .get(url)
        .then(res => {
          this.teacherList = res.data;
          //console.log(this.teacherList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getNewest();
    this.getHottest();
    this.getTeacher();
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>
