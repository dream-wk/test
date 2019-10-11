<template>
    <Bloglist @changenowBlogContent1="changenowBlogContent" :i="i" :totalNum="totalNum" :nowBlogContent="nowBlogContent" 
    :blognum="blognum" ></Bloglist>
</template>
<script>
import Bloglist from "../components/blogsList";
export default {
  data() {
    return {
      blognum: 2, //每页的条数
      
      totalNum: 20, //总条数
      nowBlogContent: [
        {
          blogid: "777",
          date: "2016-05-02",
          name: "王小虎",
          blogName: "博文名字名字名字名字名字名字名字名字",
          blogIntro: "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄"
        },
        {
          blogid: "77",
          date: "2016-05-04",
          name: "王小虎",
          blogName: "博文名字",
          blogIntro:
            "上海市普陀区金沙江路 1517 弄Java是一种简单的，面向对象的，分布式的，解释型的，健壮安全的，结构中立的，可移植的，性能优异、多线程的动态语言。"
        },
      ], //当前要显示出来的博文
      i: [1, 1, 1]
    };
  },
  mounted() {
    // var that=this;
    // this.axios.post(this.api.getBlogList,{
    //   method: "post",
    //   url: "http://119.23.235.237/index.php",
    //   data: {
    //     identify: "all",
    //     blognum: this.blognum, //每页的条数
    //   }
    // }).then(function(response){//总条数 和  目录数据
    //   console.log(111)
    //   console.log(that.nowBlogContent)
    //   console.log(response.data.nowBlogContent)

    // })
      this.axios.post(this.api.getBlogList,{//默认为all 的博文列表获取
        type1:'all',
        type2:'all',
        blognum: this.blognum, //每页的条数
        choosePage: 1, //选择的页码
      }).then(res=>{
        if(res.data.code==1){
          console.log("获取成功");
          this.nowBlogContent=res.data.nowBlogContent;
          this.totalNum=res.data.totalNum
        }else{
          console.log("获取失败")
          
        }
    }).catch(error => {
      alert("发生错误，请重新刷新")
    });
  },
  methods: {
    changenowBlogContent(newnowBlogContent){
      console.log(11);
      console.log(newnowBlogContent)
      this.nowBlogContent=newnowBlogContent

    },
  },
  components: { Bloglist }
};
</script>
<style lang="less">

</style>
