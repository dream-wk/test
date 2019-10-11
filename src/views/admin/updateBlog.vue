<template>
  <div>
    <el-input
      type="textarea"
      placeholder="请输入标题"
      v-model="blogName"
      maxlength="25"
      show-word-limit
      :autosize="{ minRows: 1, maxRows: 4}"
    ></el-input>
    <el-input
      type="textarea"
      placeholder="请输入博文描述"
      v-model="blogIntro"
      maxlength="40"
      show-word-limit
      :autosize="{ minRows: 1, maxRows: 4}"
    ></el-input>
    <el-input
      type="textarea"
      placeholder="请输入博文内容，内容形式为markdown"
      v-model="mdContent"
      show-word-limit
      :autosize="{ minRows: 2, maxRows: 1000000000000000000000000000000000000000}"
    ></el-input>
    <div class="two-butt">
      <el-button type="primary" icon="el-icon-edit" @click="save" class="rightson">保存</el-button>
      <el-button type="primary" icon="el-icon-edit" v-show="p1" @click="empty" class="rightson">清空</el-button>
      <el-button type="primary" icon="el-icon-edit" v-show="!p1" @click="del" class="rightson">删除</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogid:'',
      p1: this.$route.params.p1,
      blogName: "",
      blogIntro: "",
      mdContent: `# 欢迎使用 Cmd Markdown 编辑阅读器
我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，**Cmd Markdown** 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。 您可以使用 Cmd Markdown：
> * 整理知识，学习笔记
> * 发布日记，杂文，所见所想
> * 撰写发布技术文稿（代码支持）
> * 撰写发布学术论文（LaTeX 公式支持）

![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)

除了您现在看到的这个 Cmd Markdown 在线版本，您还可以前往以下网址下载：

### [Windows/Mac/Linux 全平台客户端](https://www.zybuluo.com/cmd/)

> 请保留此份 Cmd Markdown 的欢迎稿兼使用`
    };
  },
  mounted() {
    if (this.$route.params.blogid) {
      this.blogid=this.$route.params.blogid;
      this.axios
        .post(this.api.getBlog, { blogid: this.$route.params.blogid }, "", 1)
        .then(res => {
          if (res.data.code == 1) {
            alert("获取成功");
            this.blogName = res.data.blogName;
            this.blogIntro = res.data.blogIntro;
            this.mdConten = res.data.mdConten;
          } else {
            alert("获取失败");
          }
        })
        .catch(error => {
          console.log("发生错误", error);
        });
    }
  },
  methods: {
    save() {
      this.axios.post(this.api.updateBlog,{
          blogid: this.blogid,
          blogName: this.blogName,
          blogIntro: this.blogIntro,
          mdContent: this.mdContent,},
          "",1)
          .then(res => {if (res.data.code == 1) {
            alert("添加或更新"),
              this.$router.push({
                name: "blog",
                params: { blogid: res.data.blogid }//把博文的id传过去
              });
          } else {
            alert("出错");
          }
        })
        .catch(error => {
          alert("发生错误，请重新登录");
          console.log("发生错误", error);
        });
    },
    del() {
          this.axios.post(this.api.updateBlog,{
            blogid: this.blogid,
            blogName: this.blogName,},
            "",1)
          .then(res => {if (res.data.code == 1) {
            alert("删除");
            this.blogid=''
            this.blogName = res.data.blogName;
            this.blogIntro = res.data.blogIntro;
            this.mdConten = res.data.mdConten;  
          } else {
            alert("出错");
          }
        })
        .catch(error => {
          alert("发生错误，请重新登录");
          console.log("发生错误", error);
        });
    },
    empty() {
      this.blogName = "";
      this.mdContent = "";
      this.blogIntro = "";
    }
  }
};
</script>
<style>
.two-butt {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
}
.rightson {
  margin-right: 30px;
}
</style>
