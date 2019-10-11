<template>
    <div id="home">
        <el-row>
            <el-col :span="24" class="nav-logomenu">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">主页</el-menu-item>
                    <el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">学习方向</template>
                        <el-menu-item class="second-navmenu" index="2-1" @click="c1()">>web</el-menu-item>
                        <el-menu-item class="second-navmenu" index="2-2" @click="c2()">java</el-menu-item>
                        <el-menu-item class="second-navmenu" index="2-3" @click="c3()">u3d</el-menu-item>
                    </el-submenu>
                    </el-menu-item>
                    <el-menu-item index="3"><router-link :to="{path:'./blogs'}">博文</router-link></el-menu-item>
                    <el-menu-item index="4">加入我们</el-menu-item>
                </el-menu>
                <img src="../assets/logo1.jpg" class="logo-img">
                
            </el-col>
        </el-row>
        <div class="divider-line">
        <el-divider content-position="center" >方向</el-divider>
        </div>
        <el-row type="flex" class="study-direction">
          <el-col :span="13"> <img class="study-item"  src="../assets/java-logo.jpg"></el-col>
          <el-col :span="8" class="text"><div >Java是一种简单的，面向对象的，分布式的，解释型的，健壮安全的，结构中立的，可移植的，性能优异、多线程的动态语言。</div></el-col>
        </el-row>
        <el-row type="flex" class="study-direction">
          <el-col :span="8" class="text"><div >Java是一种简单的，面向对象的，分布式的，解释型的，健壮安全的，结构中立的，可移植的，性能优异、多线程的动态语言。</div></el-col>
          <el-col :span="13"> <img class="study-itemt"  src="../assets/web-logo.jpg"></el-col>
        </el-row>
        <el-row type="flex" class="study-direction">
          <el-col :span="13"> <img class="study-item"  src="../assets/unity-logo.jpg"></el-col>
          <el-col :span="8" class="text"><div >Java是一种简单的，面向对象的，分布式的，解释型的，健壮安全的，结构中立的，可移植的，性能优异、多线程的动态语言。</div></el-col>
        </el-row>
        <el-row type="flex" class="project-share" >
          <el-col :span="11" class="project-text"><div>项目介绍的全部资料文本项目介绍的全部资料文本项目介绍的全部资料文本项目介绍的全部资料文本项项目介绍的全部资料文本项目介绍的全部资料文本项目介绍的全部资料文本项目介绍的全部资料文本目介绍的全部资料文本项目介绍的全部资料文本项目介绍的全部资料文本</div></el-col>
          <el-col :span="11"><img src="../assets/show.png" class="project-img"></el-col>
        </el-row>
        <el-row class="foot" v-show="show" >
          <el-col :span="8">
            <ul class="foot-intro">
              <li>指导老师：</li>
              <li>侯崇富</li>
              <li>吴雪曼</li>
              <li>谢文兰</li>
            </ul>
          </el-col>
           
          <el-col :span="8">
            <ul class="foot-intro">
              <li>官方通讯：</li>
              <li>qq群：1364568607</li>
              <li>邮箱：1364568607@qq.com</li>
            </ul>
          </el-col>
          <el-col :span="8"><div class="foot-intro">办公室：二饭三楼梦工场办公室</div></el-col>
        </el-row>
        <div v-show="!show">
        <el-collapse  accordion >
  <el-collapse-item title="指导老师" name="1">
    <ul class="foot-intro2">
              <li>侯崇富</li>
              <li>吴雪曼</li>
              <li>谢文兰</li>
            </ul>
  </el-collapse-item>
  <el-collapse-item title="官方通讯" name="2">
    <ul class="foot-intro2">
              <li>qq群：1364568607</li>
              <li>邮箱：1364568607@qq.com</li>
            </ul>
  </el-collapse-item>
  <el-collapse-item title="办公室" name="3">
    <div>地点：二饭三楼梦工场办公室</div>
    <div>上课时间段一般不会有人在办公室，如果要过去咨询，请事先联系我们</div>
  </el-collapse-item>
</el-collapse>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      show: true,
      screenWidth: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    c1() {
      this.$router.push({ name: "studyDirectionWeb", params: { dir: "web" } });
    },
    c2() {
      this.$router.push({ name: "studyDirectionWeb", params: { dir: "java" } });
    },
    c3() {
      this.$router.push({ name: "studyDirectionWeb", params: { dir: "u3d" } });
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    if (this.screenWidth <= 1000000) {
      this.show = false;
    } else {
      this.show = true;
    }
    var that = this;
    window.onresize = function() {
      that.screenWidth = document.body.clientWidth;
      if (that.screenWidth <= 10000000) {
        that.show = false;
      } else {
        that.show = true;
        
      }
    };
  }
};
</script>
<style>
li {
  list-style: none;
}
.nav-logomenu {
  position: relative;
}
.nav-logomenu img {
  width: 100%;
}
.el-menu-demo .el-menu-item {
  width: 25%;
  padding: 0;
  text-align: center;
}
.el-submenu__title i {
  display: none;
}
.divider-line {
  width: 40vw;
  margin: 0 auto;
}
.study-direction {
  width: 80%;
  margin: 0 auto;
  align-items: stretch;
}
.study-item {
  width: 80%;
  min-width: 150px;
}
.study-itemt {
  width: 100%;
  min-height: 130px;
}
.text {
  margin: auto auto;
}
.project-share {
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  align-items: stretch;
}
.project-text {
  margin: auto auto;
  max-height: 146px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-size: 1.5vw;
}
@media screen and (max-width: 800px) {
  .project-text {
    font-size: 18px;
  }
}
.project-img {
  width: 100%;
  margin: 15px auto;
}
.foot-intro {
  margin: 20px auto;
  padding: 0;
  text-align: center;
}
.foot {
  color: black;
}
.foot-intro2 {
  margin: 0;
  padding: 0;
}
</style>
