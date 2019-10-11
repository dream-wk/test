<template>
    <div class="blogger">
        <HeaRun :index="2"></HeaRun>
        <div class="main">
        <el-tabs tab-position="left" style="min-height: 600px;">
            <el-tab-pane label="简介">
                <img :src="bloggerImg" class="bloggerimg" >
                <div class="i">
                    <p class="introself">自我介绍：{{introSelf}}</p>
                    <p class="motto">座右铭：{{motto}}</p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="个人博文" @tab-click="blogList">
                <Bloglist :i="i" :totalPageNumber="totalPageNumber" :nowBlogContent="nowBlogContent" :blognum="blognum" :choosePage="choosePage"></Bloglist>
            </el-tab-pane>
            <el-tab-pane label="建议"><div class="i advice">个人建议：{{advice}}</div></el-tab-pane>
        </el-tabs>
    </div>
    </div>
</template>
<script>
import HeaRun from "../components/headerNav";
import Bloglist from "../components/blogsList";
export default {
  name: "blogger",
  data() {
    return {
      bloggerImg: require("../assets/5.jpg"),
      activeName: "first",
      bloggerId: "", //博主的id
      introSelf:
        "一大堆自我介绍介绍介绍一大堆自我介绍介绍介绍一大堆自我介绍介绍介绍一大堆自我介绍介绍介绍一大堆自我介绍介绍介绍一大堆自我介绍介绍介绍一大堆自我介绍介绍介绍一大堆自我介绍介绍介绍", //自我介绍
      motto:
        "长长的座右铭长长的座右铭长长的座右铭长长的座右铭长长的座右铭长长的座右铭", //座右铭
      advice:
        "个人的一大段建议个人的一大段建议个人的一大段建议个人的一大段建议个人的一大段建议个人的一大段建议个人的一大段建议个人的一大段建议", //建议
      blognum: 4, //每页的条数
      choosePage: 1, //选择的页码
      totalPageNumber: 100, //总页数
      nowBlogContent: [
        {
          blogid:"777",
          date: "2016-05-02",
          name: "王小虎",
          blogName: "博文名字",
          blogIntro: "上海市普陀区金沙江路 1518 弄"
        },
        {
          blogid:"77",
          date: "2016-05-04",
          name: "王小虎",
          blogName: "博文名字",
          blogIntro:
            "上海市普陀区金沙江路 1517 弄Java是一种简单的，面向对象的，分布式的，解释型的，健壮安全的，结构中立的，可移植的，性能优异、多线程的动态语言。"
        },
        {
          blogid:"7",
          date: "2016-05-01",
          name: "王小虎",
          blogName: "博文名字",
          blogIntro: "上海市普陀区金沙江路 1519 弄"
        },
        {
          blogid:"7777",
          date: "2016-05-03",
          name: "王小虎",
          blogName: "博文名字",
          blogIntro: "上海市普陀区金沙江路 1516 弄"
        }
      ], //当前要显示出来的博文
      i: [0, 0, 0]
    };
  },
  methods: {
    blogList() {
      console.log(this.bloggerId);
      this.axios({
        method: "post",
        url: "",
        data: {
          bloggerId: this.bloggerId,
          blognum: 4,
          choosePage: 0
        }
      }).then(res => {
        this.totalPageNumber = res.totalPageNumber;
        this.nowBlogContent = res.nowBlogContent;
      });
    },
    getTextAbout() {
      this.axios({
        method: "post",
        url: "",
        data: {
          bloggerId: this.bloggerId
        }
      }).then(res => {
        this.bloggerImg = require("../assets" + res.bloggerImg);
        this.introSelf = res.introSelf;
        this.motto = res.motto;
        this.advice = res.advice;
      });
    }
  },
  mounted() {
    this.getTextAbout();
  },
  components: { HeaRun, Bloglist }
};
</script>
<style>
.main {
  margin-left: 50px;
  margin-top:20px
}
.bloggerimg {
  width: 100px;
  height: 100px;
  margin-left: 55px;
  margin-top: 20px;
}
.el-tabs__nav-scroll {
  display: flex;
  align-items: center;
}
.i {
  margin-left: 20px;
  margin-top: 30px;
}
.introself {
  max-width: 400px;
  margin-bottom: 25px;
}
.motto {
  max-width: 600px;
}
.advice {
  max-width: 500px;
}
</style>
