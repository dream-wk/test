<template>
    <el-button type="primary" icon="el-icon-search" @click="logout">logout</el-button>
</template>
<script>
export default {
    methods:{
        logout(){
            this.axios.delete(
                this.api.logout,'',{headers: { "Content-Type": "application/x-www-form-urlencoded" }}
            ).then(res=>{
                if(res.data.code==1){
                    alert("退出成功");
                    this.$router.push({
                        name:"login"
                    })
                }else{
                    alert("退出失败+")
                }
            })
        }
    }
}
</script>