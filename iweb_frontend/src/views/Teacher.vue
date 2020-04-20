<template>
  <div>
    <Header></Header>
    <!--面包屑导航-->
    <div class="breadcrumb container">
      <a href>首页</a> &gt;
      <a href>名师堂</a>
    </div>
    <!--主体内容-->
    <article class="container">
      <h2 class="title2">金牌讲师</h2>
      <section class="teacher_list">
        <ul>
          <li class="clearfloat" v-for="(it, i) in teacherList" :key="i">
            <img :src="'http://127.0.0.1/iweb/'+it.tpic" alt />
            <div>
              <h3>
                {{it.tname}}
                <span>{{it.maincourse}}</span>
              </h3>
              <dl>
                <dt>工作经历：</dt>
                <dd>{{it.experience}}</dd>
              </dl>
              <dl>
                <dt>授课风格：</dt>
                <dd>{{it.style}}</dd>
              </dl>
            </div>
          </li>
        </ul>
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
      teacherList: []
    };
  },
  methods: {
    //获取教师列表(包含工作经历及教学风格)
    getTeacher() {
      let url = "/teacher/list?format=full";
      this.$http
        .get(url)
        .then(res => {
          console.log(res.data);
          this.teacherList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getTeacher();
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>
