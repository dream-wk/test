<template>
    <div id="introduction" :style="{ backgroundImage: 'url(' +  a+ ')' }" >
        <!-- <div id="introduction" :style="note" >  -->
	<nav id="nav"><li id="logo"><img src="../assets/logo.png"></li>
	<li>博文</li><li>学习小组</li>
	<li>学习路线</li></nav><div id="text"><p>培正软件梦工厂</p><p> 技术创新，放飞梦想</p></div>
	<div id="button"><a href="" id="a">加入我们</a></div></div >
</template>
<script>
const b=require("../assets/logo.png")
export default {
  props: ["message"],
  data(){
    return{
       a:require('../assets/'+this.message)
    }
  },
  //   mounted() {
  //     const m1=require(this.message);
  //     this.m=m1
  //   },
  // data() {
  //   return {
  //     // note: {
  //     //   backgroundImage: `url(${require(this.message)}) `
  //     // }
  //   };
  // },
  computed: {
    ms() {
      return b;
    }
  }
};
</script>
<style>
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
</style>
