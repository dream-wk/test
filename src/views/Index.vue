<template>
<div class="index">
    <div class="nav-fixed">
        <img :src="imgurl" class="logo-ltem">
        <a href="" class="list-item">博文</a>
        <a href="" class="list-item">学习小组</a>
        <a href="" class="list-item">学习路线</a>
        <a href="" class="list-item butt " >加入我们</a>
    </div>
    <div id="i" >
        <MainIntro :message="message" ></MainIntro>
    </div>
    <!-- <div id="app4">
        <my-component4 message="red"></my-component4>
       </div> -->
    <div class="study-directions">
        <div class="headline">
            <div class="line-top"></div>
            <p>梦工场学习方向</p>
        </div>
        <div class="direction-item">
            <img class="item-left"  src="../assets/java-logo.jpg">
            <div class="item-right">
                <div class="introOne">Java学习</div>
                <div class="introOnes">1.something something somethink</div>
                <div class="introOnes">2.something something somethink</div>
                <div class="introOnes">3.something something somethink</div>
            </div>
        </div>
        <div class="direction-item">
            <img class="item-r"  src="../assets/web-logo.jpg">
            <div class="item-l">
                <div class="introOne">web学习</div>
                <div class="introOnes">1.something something somethink</div>
                <div class="introOnes">2.something something somethink</div>
                <div class="introOnes">3.something something somethink</div>
            </div>
        </div>
        <div class="direction-item">
                <img class="item-left"  src="../assets/unity-logo.jpg">
                <div class="item-right">
                    <div class="introOne">u3d学习</div>
                    <div class="introOnes">1.something something somethink</div>
                    <div class="introOnes">2.something something somethink</div>
                    <div class="introOnes">3.something something somethink</div>
                </div>
            </div>
    </div>

    <div class="project-show">
        <div class="project-div">
        <div class="project-intro">
            <h3>{{projectTitle}}</h3>
            <div class="wrap">
                    <div class="text">
                        {{projectText}}
                    </div>
                </div>
        <img src="../assets/show.png" class="project-img">
    </div>
    </div>
</div>
<Rocket></Rocket>
</div>
</template>

<script>
import MainIntro from "../components/nav";
import Rocket from "../components/rocket";
export default {
  name: "Index",
  data() {
    return {
      // message: require("../assets/3.jpg"),
      message:"3.jpg",
      projectTitle: "项目名称",
      projectText:
        "很多很多很多很多很多很多很多很多很多很多很好的很多很多还打电话的回答道很好的很多很多文本很多很多很多很多很多很多很多很多很多很多很好的很多很多还打电话的回答道很好的很多很多文本.",
      projectImg: "../assets/show.png",
      imgurl: require("../assets/1.jpg")
    };
  },
  methods: {
    afterLoadAutoFunction() {
      var that = this;
      this.$(function() {
        that.$(window).scroll(function() {
          if (that.$(window).scrollTop() >= 100) {
            that.$(".nav-fixed").css("display", "flex");
          } else {
            that.$(".nav-fixed").hide();
          }
        });
      });
      this.$(function() {
        function changeProHeight() {
          var projectShowImgHeight = that.$(".project-img").height(); //获取img的高
          var projectShowNow = projectShowImgHeight + 20 + "px";
          that.$(".project-show").css("height", projectShowNow);
          that.$(".project-show").css("background-color", "#eceff1");
        }
        changeProHeight();
         that.$(".project-show").css("background-color", "#eceff1");
        window.onresize = function() {
          changeProHeight();
        };
      });
    }
  },
  mounted() {
    this.afterLoadAutoFunction();
  },
  components: {
    MainIntro,
    Rocket
  }
};
</script>

<style lang="less" scoped>
.nav-fixed {
  width: 100%;
  position: fixed;
  display: none;
  flex-direction: row;
  z-index: 1;
  background-color: #fff;
  box-shadow: 5px 5px 5px #e4e4e4;
}
.logo-ltem {
  width: 3vw;
  height: 3vw;
  margin-right: auto;
}
.list-item {
  width: 70px;
  height: 40px;
  margin-right: 1vw;
  text-decoration: none;
  line-height: 40px;
  text-align: center;
}
.butt {
  border: 2px solid;
  border-radius: 10px;
  width: 70px;
  height: 40px;
  background-color: rgb(81, 176, 240);
}

#introduction {
  background-size: 100%;
  min-height: 30vw;
}
#nav {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
}
#nav li {
  list-style: none;
  font-size: 2.1vw;
  margin-left: 2vw;
}
#logo {
  position: absolute;
  left: 0;
}
#logo img {
  width: 6vw;
}
#text {
  padding-top: 2vw;
  color: aliceblue;
  width: 20vw;
  margin: 0 auto;
  text-align: center;
}
#text p {
  font-size: 2vw;
}
#button {
  border: 2px solid;
  border-radius: 10px;
  width: 20vw;
  background-color: rgb(81, 176, 240);
  font-size: 2vw;
  cursor: pointer;
  text-align: center;
  color: rgb(52, 150, 235);
  margin: 5vw auto;
}
#button:hover {
  -ms-transform: scale(1.2, 1.2); /* IE 9 */
  -webkit-transform: scale(1.2, 1.2); /* Safari */
  transform: scale(1.2, 1.2); /* 标准语法 */
}
#button a {
  color: aliceblue;
  text-decoration: none;
}
.study-directions {
  width: 75vw;
  margin: 5vw auto;
}
.line-top {
  margin: 0 auto;
  width: 10vw;
  height: 5px;
  border-top: solid rgb(210, 227, 247) 5px;
}
.study-directions p {
  margin: 10px;
  color: rgb(21, 23, 24);
  font-size: 2vw;
  text-align: center;
  font-weight: 500;
}
.direction-item {
  width: 100%;
  position: relative;
}
.direction-item:after {
  content: ".";
  height: 0;
  display: block;
  clear: both;
}
.item-right {
  float: right;
  width: 50%;
  position: absolute;
  top: 30%;
  right: 0;
}
.introOne {
  font-size: 2.5vw;
  font-weight: 400;
}
.introOnes {
  font-size: 1.2vw;
}
.item-left {
  float: left;
  width: 50%;
  max-height: 550px;
}
.item-l {
  float: left;
  width: 40%;
  position: absolute;
  top: 30%;
  left: 0;
  text-align: right;
}
.item-l .introOne {
  text-align: right;
  font-size: 2.5vw;
  font-weight: 400;
}
.item-r {
  float: right;
  width: 60%;
  max-height: 550px;
}
.project-show {
  width: 100%;
  background-color: rgb(236, 239, 241);
}
.project-div {
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  position: relative;
}
/* .project-div:after {
    content: '.';
    height: 0;
    display: block;
    clear: both;
} */
.project-intro {
  font-size: 1vw;
  width: 40%;
}
.project-img {
  padding-top: 20px;
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  min-height: 150px;
}
.wrap {
  height: 120px;
  line-height: 30px;
  overflow: hidden;
}
.wrap .text {
  float: right;
  margin-left: -5px;
  width: 100%;
  word-break: break-all;
}
.wrap::before {
  float: left;
  width: 5px;
  content: "";
  height: 150px;
}
.wrap::after {
  float: right;
  content: "...";
  height: 150px;
  line-height: 30px;
  /* 为三个省略号的宽度 */
  width: 3em;
  /* 使盒子不占位置 */
  margin-left: -3em;
  /* 移动省略号位置 */
  position: relative;
  left: 100%;
  top: -30px;
  padding-right: 5px;
  background-color: rgb(236, 239, 241);
}
</style>