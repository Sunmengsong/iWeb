<template>
  <div>
    <Header></Header>
    <!--面包屑导航-->
    <div class="breadcrumb container">
      <a href>首页</a> &gt;
      <a href>全部课程</a>
    </div>
    <!--主体内容-->
    <article class="container">
      <section class="course_head clearfloat">
        <div class="course_img">
          <img :src="'http://127.0.0.1/iweb/'+data.pic" alt />
        </div>
        <aside class="course_info">
          <h2></h2>
          <ul>
            <li>讲师：{{data.tname}}</li>
            <li>课时：{{data.cLength}}</li>
            <li>开课时间：{{data.startTime}}</li>
            <li>
              上课地点：{{data.address}}
              <a href>查看各校区地址</a>
            </li>
          </ul>
          <p>
            课程价格：
            <strong id="price">{{data.price | currency}}</strong>
          </p>
          <div class="course_link">
            <span href id="addCart">
              <em class="icon-cart"></em>加入购物车
            </span>
            <a href id="favorite">加入收藏</a>
          </div>
        </aside>
      </section>
      <section class="course_detail">
        <h2 class="title">
          <span>课程详情</span>
        </h2>
        <div class="details" v-html="data.details"></div>
      </section>
    </article>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data: () => {
    return {
      data: {}
    };
  },
  methods: {
    getDetails() {
      let url = "/course/detail?cid=" + this.$route.params.cid;
      this.$http
        .get(url)
        .then(res => {
          //console.log(res);
          this.data = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    // console.log(this.$route.params.cid);
    this.getDetails();
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>
