<template>
<div>
    <Bloglist  @changenowBlogContent1="changenowBlogContent" :i="i"     :totalNum="totalNum" :nowBlogContent="nowBlogContent" 
    :blognum="blognum" :choosePage="choosePage"></Bloglist>
    <div class="right">
    <el-button type="primary" icon="el-icon-edit" @click="updateBlog" class="rightson">新增</el-button>
    </div>
</div>
</template>
<script>
import Bloglist from "../../components/blogsList";
export default {
  data() {
    return {
      blognum: 4, //每页的条数
      choosePage: 1, //选择的页码
      totalPageNumber:null , //总条数
      nowBlogContent: [], //目前要显示的文章
      i: [0, 0, 0]
    };
  },
  mounted() {
    this.axios.post(this.api.getBlogList,{
        type1:'per',
        type2:this.cookieOperation.getCookie("id"),
        blognum: this.blognum, //每页的条数
        choosePage: this.choosePage, //选择的页码
      }).then(res=>{
        this.nowBlogContent=res.data.nowBlogContent;
        this.totalNum=res.data.totalNum
    });
  },
  methods:{
    changenowBlogContent(newnowBlogContent){
      console.log(newnowBlogContent)
      this.nowBlogContent=newnowBlogContent
    },
    updateBlog(){
      console.log("xinz");
      this.$router.push({name:'updateBlog',params:{p1:1}})//1为新增 0为查看
    }
  },
  components:{Bloglist}
};
</script>
<style>
.right{
  display: flex;
  flex-direction: row-reverse
}
.rightson{
  margin-right: 30px
}
</style>
