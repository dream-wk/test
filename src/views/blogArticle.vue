<template>
    
</template>
<script>
export default {
  name: "BlogArticle",
  data() {
    return {};
  },
  methods: {
    getBlogMes() {
      this.axios("", {
        method: "get",
        url: "",
        params: {id:this.id}
      }).then(res => {
        if(res.code==200){
            console.log(res.blogMes)
        }else{
            console.log("传过来的博文id号有问题")
        }
      })
    }
  },
  created() {
    this.axios("", {
      method: "get",
      url: "",
      params: {}
    }).then(res => {
      if (res.mesCode == 1) {
          getBlogMes()
      }else{
          //跳转到设置名字的组件那里去设置名字
      }
    });
  }
};
</script>
<style>
</style>
