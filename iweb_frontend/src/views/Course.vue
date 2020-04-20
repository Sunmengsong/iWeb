<template>
  <div>
    <Header></Header>
    <!--面包屑导航-->
    <!-- <div class="breadcrumb container">
      <a href>首页</a> &gt;
      <a href>{{courseLevel}}</a>
    </div>-->
    <!--主体内容-->
    <div class="container">
      <!-- <section class="course_tag">
        <span>课程等级：</span>
        <a href class="active">不限</a>
        <a href="javascript:;" v-for="(it, i) in $store.state.courseTypes" :key="i">{{it.tpname}}</a>
      </section>-->
      <section class="course_list">
        <ul>
          <li class="clearfloat" v-for="(it, i) in courseType.list" :key="i">
            <a href="javascript:;" class="course_img" @click="toDetail(it.cid)">
              <img :src="'http://127.0.0.1/iweb/'+it.pic" alt />
            </a>
            <div class="information">
              <h2 @click="toDetail(it.cid)">{{it.title}}</h2>
              <p>讲师：{{it.tname}}</p>
              <p>课时：{{it.cLength}}</p>
              <p>开课时间：{{it.startTime}}</p>
              <p>
                上课地点：{{it.address}}
                <a href>查看各校区地址</a>
              </p>
            </div>
            <span>{{it.price | currency}}</span>
            <a href="javascript:;" class="course_btn" @click="toDetail(it.cid)">查看详情</a>
          </li>
        </ul>
      </section>
      <!-- 分页导航-->
      <div class="pages">
        <a href="javascript:;" v-if="pageNum>1" @click="getCourseType(pageNum-1)">上一页</a>
        <a
          href="javascript:;"
          v-for="i in pageCount"
          :class="i==pageNum ? 'cur':''"
          :key="i"
          @click="getCourseType(i)"
        >{{i}}</a>
        <a href="javascript:;" v-if="pageNum!==pageCount" @click="getCourseType(pageNum+1)">下一页</a>
      </div>
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
      courseType: {},
      pageNum: Number,
      pageCount: Number,
      courseLevel: "全部课程"
    };
  },
  methods: {
    //获取课程列表
    getCourseType(pageNum = 1) {
      let url;
      //如果要求页数
      if (pageNum) {
        url = "/course/list?pageNum=" + pageNum;
      } else {
        url = "/course/list";
      }
      //如果要求课程等级
      if (this.$route.query.tpid) {
        url += `&typeId=${this.$route.query.tpid}`;
      }
      this.$http
        .get(url)
        .then(res => {
          this.courseType = res.data;
          this.pageNum = res.data.pageNum;
          this.pageCount = res.data.pageCount;
          //console.log(this.courseType);
        })
        .catch(err => {
          console.log(err);
        });
    },
    toDetail(cid) {
      this.$router.push("/course_detail/" + cid);
    }
  },
  //监听路由query字符串的变化, 获取新数据
  watch: {
    "$route.query.tpid": function(val) {
      if (val !== undefined) {
        //console.log(val);
        let url = "/course/list?typeId=" + val;
        this.$http.get(url).then(res => {
          //console.log(res.data.list);
          this.courseType = res.data;
          this.pageNum = res.data.pageNum;
          this.pageCount = res.data.pageCount;
        });
      } else {
        this.getCourseType();
      }
    }
  },
  created() {
    this.getCourseType();
  },
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>
