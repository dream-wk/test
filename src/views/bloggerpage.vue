<template>
    <div>
        <div class="blogger-box">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick"  tab-position="left">
            <el-tab-pane label="简介" name="first">简介</el-tab-pane>
            <el-tab-pane label="博文" name="second" @click="getBloglist">
                <el-table :data="nowBlogContent" >
                    <el-table-column prop="date" label="日期" width="50"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="50"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
                <el-pagination class="pagination" :page-size="4" :pager-count="4" layout="prev, pager, next" :total="400"></el-pagination>
            </el-tab-pane>
            <el-tab-pane label="建议" name="third">角色管理</el-tab-pane>
          </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeName: 'first',
            id:'',//博主的id
            bloggerImg:'',//头像的地址
            introSelf:'',//自我介绍
            motto:'',//座右铭
            advice:'',//建议 
            blognum:4,//每页的条数
            choosePage:'0',//选择的页码
            totalPageNumber:'',//总页数
            nowBlogContent:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄Java是一种简单的，面向对象的，分布式的，解释型的，健壮安全的，结构中立的，可移植的，性能优异、多线程的动态语言。'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]//当前要显示出来的博文
        }
    },
    // mounted(){
    //     this.id=this.$route.params.id
    //     console.log("kkkk")
    //     this.axios({
    //         method:"post",
    //         url:"",
    //         data:{
    //             id:this.id
    //         }
    //     }).then(res=>{
    //         this.bloggerImg='../assets/'+res.bloggerImg 
    //         this.introSelf=res.introSelf;
    //         this.motto=res.motto;
    //         this.advice=res.advice;
    //     })
    // },
    methods:{
        handleClick(tab, event) {
        console.log(tab, event);
    },
        getBloglist(){
          console.log(this.id)
          this.axios({  
            method:"post",
            url:"",
            data:{
                id:this.id,
                blognum:4,
                choosePage:this.choosePage
            }
        }).then(res=>{
            this.totalPageNumber=res.totalPageNumber;
            this.nowBlogContent=res.nowBlogContent;
        })
    }
}
}
</script>
<style>
.blogger-box {
  width: 364px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #686869;
  height: 550px;
}
.el-tabs__item {
  font-size: 20px;
}
.pagination{
    margin-top: 15px
}
</style>
