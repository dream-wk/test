<template>
    <div>
    <el-row>
            <el-col :span="24" class="nav-logomenu">
                <el-menu :default-active="zindex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">主页</el-menu-item>
                    <el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">学习方向</template>
                        <el-menu-item class="second-navmenu" index="2-1"><router-link :to="{path:'./studyDirectionWeb'}">web</router-link></el-menu-item>
                        <el-menu-item class="second-navmenu" index="2-2">选项2</el-menu-item>
                        <el-menu-item class="second-navmenu" index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    </el-menu-item>
                    <el-menu-item index="3">博文</el-menu-item>
                    <el-menu-item index="4">加入我们</el-menu-item>
                </el-menu>
              
            </el-col>
        </el-row>
        </div>
</template>
<script>
export default {
  props: ["index"],
  computed:{
    zindex:function(){
      return String(this.index)
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted(){
    // this.index=String(this.index)
    console.log(this.index)
    console.log(typeof this.index)
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
.el-menu-demo .el-menu-item {
  width: 25%;
  padding: 0;
  text-align: center;
}
.el-submenu__title i {
  display: none;
}
</style>
