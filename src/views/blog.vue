<template>
    <div>
        <div class="blog-infor">
            <div class="photo-articletitle">
                <div class="photo">
                <img :src="imgsrc" class="img">
                </div>
                <div class="text-infor">
                    <div class="text-infor-tao">
                        <div class="title">标题：{{blogName}}</div>
                        <div class="author-time">
                            <div class="author">作者：{{name}}</div>
                            <div class="time">时间：{{date}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog">
        <vue-markdown>{{mdConten}}</vue-markdown>
        </div>
        <comment :comment="comment"></comment>
    </div>
</template>
<script>
import comment from "../components/comment";
import VueMarkdown from "vue-markdown";
export default {
  data() {
    return {
      blogid : this.$route.params.blogid,
      imgsrc : "/5.jpg",
      blogName  : "啛啛喳喳错的士大夫撒错错错错的标题",
      name : "dream-wk",
      date   :  "2019-6-9",
      mdConten: 
`# 欢迎使用 Cmd Markdown 编辑阅读器
我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，**Cmd Markdown** 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。 您可以使用 Cmd Markdown：
> * 整理知识，学习笔记
> * 发布日记，杂文，所见所想
> * 撰写发布技术文稿（代码支持）
> * 撰写发布学术论文（LaTeX 公式支持）

![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)

除了您现在看到的这个 Cmd Markdown 在线版本，您还可以前往以下网址下载：

### [Windows/Mac/Linux 全平台客户端](https://www.zybuluo.com/cmd/)

> 请保留此份 Cmd Markdown 的欢迎稿兼使用说明，如需撰写新稿件，点击顶部工具栏右侧的 <i class="icon-file"></i> **新文稿** 或者使用快捷键

------

## 什么是 Markdown

Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体* 某些文字，更棒的是，它还可以

### 1. 制作一份待办事宜 [Todo 列表](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#13-待办事宜-todo-列表)

- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能

### 2. 书写一个质能守恒公式[^LaTeX]

$$E=mc^2$$

### 3. 高亮一段代码[^code] 
\`\`\`javascript
var a = 16;
console.log(a);
\`\`\`
`,
  comment: [
        {
          name: "wk",
          reviewers: "",
          time: "",
          content: "wk的评论"
        },
        {
          name: "wkw",
          reviewers: "wk",
          time: "",
          content: "wkw回复wk"
        },
        {
          name: "wkww",
          reviewers: "",
          time: "",
          content: "wkww的评论"
        }
      ],
    };
  },
  mounted() {
    alert(this.blogid);
    if (this.$route.params.blogid) {
      this.axios
        .post(this.api.getBlog, { blogid: this.$route.params.blogid }, "")
        .then(res => {
          if (res.data.code == 1) {
            alert("获取成功");
            this.imgsrc=res.data.imageUrl;//头像链接
            this.date=res.data.date//博文创建的时间
            this.name=res.data.name//博主的名字
            this.blogName=res.data.blogName;//博文名字
            this.blogIntro=res.data.blogIntro;//博文的介绍文本
            this.mdConten=res.data.mdConten;//博文内容
            this.axios.post(this.api.getComment,{blogid:this.$route.params.blogid},'').then(res=>{
              this.comment=res.data.comment
            })
          } else  {
            alert("获取失败");
          }
        }
        )
        .catch(error => {
          console.log("发生错误", error);
        });
    }
  },
  // methods: {
  //   postBlog(value) {
  //     // var that=this;
  //     this.axios({
  //       method: "post",
  //       url: "http://119.23.235.237/index2.php",
  //       data: {blogid:value}
  //     }).then(res => {
  //       // that.innernowBlogContent = res.data.nowBlogContent;
  //       // that._nowBlogContent=res.data.nowBlogContent;
  //       console.log(res.data.blog);
  //       this.blogid=res.data.blog.blogid
  //       this.imgsrc=res.data.blog.imgsrc
  //       this.title=res.data.blog.title
  //       this.author=res.data.blog.axios
  //       this.time=res.data.blog.time
  //       this.blogconnet=res.data.blog.blogconnet
  //       // this.innernowBlogContent = res.data.nowBlogContent;

  //       // let willCopyArr = ['1', '2', '3']
  //       // let newArr = JSON.parse(JSON.stringify(willCopyArr))
  //       this.axios({
  //         method:"post",
  //         url:"http://119.23.235.237/index.php",
  //         data: {blogid:value}
  //       }).then(res2=>{
  //         console.log(res2.data);
  //         // this.comment=res2.data.comment 赋值评论
  //       })
  //     });
  //   }
  // },
  components: {
    comment,
    VueMarkdown
  }
};
</script>
<style>
.blog-infor {
  width: 60%;
  margin: 0 auto;
}
.photo {
  width: 100%;
}
.img {
  display: block;
  width: 100px;
  height: 100px;
  margin: 10px auto;
}
.text-infor {
  font-size: 20px;
}

.title {
  font-size: 30px;
  font-weight: 400;
  text-align: center;
}
.author-time {
  font-size: 20px;
  text-align: center;
}
@media screen and (max-width: 800px) {
  .title {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
  }
  .author-time {
    font-size: 15px;
    text-align: center;
  }
}
.blog {
  width: 80%;
  display: block;
  margin: 0 auto;
  word-wrap: break-word;
}
</style>
