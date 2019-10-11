<template>
    <div>
        <el-select v-model="firstvalue" placeholder="请选择方向" @change="changeStuDirection" v-show="i[0]" >
            <el-option v-for="item in firstoptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="secendvalue" placeholder="博主名字" v-show="i[1]"  @change="changeBlogger">
            <el-option v-for="item in secendoptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" v-show="i[2]"  @click="find">搜索</el-button>
        <el-table   :data="nowBlogContent" @row-click="gotoBlog" >
            <el-table-column prop="date" label="日期" width="60"></el-table-column>
            <el-table-column prop="blogName" label="博文标题" width="100"></el-table-column>
            <el-table-column prop="name" label="博主" width="60"></el-table-column>
            <el-table-column prop="blogIntro" label="博文介绍"></el-table-column>
        </el-table>
        <el-pagination class="pagination" :current-page.sync="choosePage" :page-size="blognum"  layout="prev, pager, next" 
        :total="totalNum"  @current-change="handleCurrentChange" >
        </el-pagination>
        
    </div>
</template>
<script>
export default {
  props: ["i","totalNum","nowBlogContent","blognum"],
  mounted(){
    console.log( this.nowBlogContent)
  },
  data() {
    return {
      choosePage:1,
      type1:'all',
      type2:"all",//per 时  博主id
      // innernowBlogContent:[],使用computed时不用先定义变量
      firstoptions: [
        {
          value: "web",
          label: "web前端"
        },
        {
          value: "java",
          label: "java后端"
        },
        {
          value: "u3d",
          label: "unity游戏开发"
        }
      ],
      firstvalue: "",
      secendoptions: [
        {
          value: 1,
          label: "王凯"
        },
        {
          value: 2,
          label: "李颖豪"
        },
        {
          value: 3,
          label: "周泽帆"
        },
        {
          value: 4,
          label: "关铮任"
        },
        {
          value: 5,
          label: "符艺耀"
        }
      ],
      secendvalue: ""
    };
  },
  computed:{
    innernowBlogContent:{
      get(){
        console.log(22222)
        return this.nowBlogContent;
      },
      set(value){
        this.$emit('changenowBlogContent1',value)
      }
    }
  },
  // watch:{
  //     innernowBlogContent(val){
  //       this.$emit('changenowBlogContent1',val)
  //   }},
  //     },
  // watch: {
  //   nowBlogContent(value){
  //      value.forEach((data, index)=>{
  //       this.nowBlogContent1[index].blogid = data.blogid;
  //       this.nowBlogContent1[index].date = data.data;
  //       this.nowBlogContent1[index].name = data.name
  //       this.nowBlogContent1[index].blogName = data.blogName;
  //       this.nowBlogContent1[index].blogIntro = data.blogIntro;
  //     })
  //     console.log(this.nowBlogContent1)
  //   }
  // },
  // computed:{
  //   nowBlogContent2(){
  //     // for{
  //     //   this.nowBlogContent1.blogid = i.blogid;
  //     //   this.nowBlogContent1.date = i.data;
  //     //   this.nowBlogContent1.name = i.name
  //     //   this.nowBlogContent1.blogName = i.blogName;
  //     //   this.nowBlogContent1.blogIntro = i.blogIntro;
  //     // }
  //     this.nowBlogContent.forEach((data, index)=>{
  //       this.nowBlogContent1[index].blogid = data.blogid;
  //       this.nowBlogContent1[index].date = data.data;
  //       this.nowBlogContent1[index].name = data.name
  //       this.nowBlogContent1[index].blogName = data.blogName;
  //       this.nowBlogContent1[index].blogIntro = data.blogIntro;
  //     })
  //     console.log(this.nowBlogContent1)
  //     console.log(11111)
  //     return this.nowBlogContent1;
  //   }
  // },
  methods:{
    gotoBlog(row){
      alert(row.blogid)
      if(this.cookieOperation.getCookie("token")){
        this.$router.push({name:'updateBlog',params:{blogid: row.blogid,p1:0}})
      }else{this.$router.push({name:'blog', params:{ blogid: row.blogid }})}
    },
    find(){
      this.axios.post(this.api.getBlogList,{//默认为all 的博文列表获取
        type1:'per',
        type2:this.id,
        blognum: this.blognum, //每页的条数
        choosePage: 1, //选择的页码
      }).then(res=>{
        if(res.data.code==1){
          console.log("获取成功");
          this.innernowBlogContent=res.data.nowBlogContent;
          this.totalNum=res.data.totalNum
        }else{
          console.log("获取失败")
          
        }
    }).catch(error => {
      alert("发生错误，请重新刷新")
    });
      console.log(this.id)
      
    },
    changeStuDirection(i) {
     console.log(i);
     this.type1='per'
      if (i === "web") {
        this.secendoptions= [
          {
            value: 1,
            label: "王凯"
          },
           {
            value: 4,
            label: "关铮任"
          }
        ];
        this.secendvalue="王凯"
        this.type2=1
      } else if (i === "java") {
        this.secendoptions= [
          {
            value: 2,
            label: "李颖豪"
          },
          {
            value: 3,
            label: "周泽帆"
          }
        ];
        this.secendvalue="李颖豪"
        this.type2=2
      } else {
        this.secendoptions=[
          {
            value: 5,
            label: "符艺耀"
          }
        ];
        this.secendvalue="符艺耀"
        this.type2=5
      }
    },
    changeBlogger(val){
      console.log(val);
      this.type1='per';
      this.type2=val;
      // this.secendvalue=this.secendoptions[val-1].value
      // console.log(this.secendvalue)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.choosePage=val;
      this.axios.post(this.api.getBlogList,{//默认为all 的博文列表获取
        type1:this.type1,
        type2:this.type2,
        blognum: this.blognum, //每页的条数
        choosePage: this.choosePage, //选择的页码
      }).then(res=>{
        // if(res.data.code==1){
        //   console.log("获取成功");
        //   this.nowBlogContent=res.data.nowBlogContent;
        //   this.totalNum=res.data.totalNum
        // }else{
        //   console.log("获取失败")
          
        // }
          console.log("获取成功");
          this.innernowBlogContent=res.data.nowBlogContent;
    }).catch(error => {
      alert("发生错误，请重新刷新")
    });
    },
    }
};
</script>
<style lang="less">

</style>

