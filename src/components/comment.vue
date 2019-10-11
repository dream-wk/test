<template>
   <div id="comment-area">
       <div class="commentBox">
           <h3>评论</h3>
        <p v-if="comment.length==0">暂无评论，我来发表第一篇评论！</p>
        <div id="scroll-comment" else>		
					<div class="comment" v-for="(item,index) in comment" :key="index" v-bind:index="index">
						<div v-if="!(item.reviewers)">
						 <div @click="changCommmer(item.name,index)" >
              <b>{{item.name}}<span>{{item.time}}</span></b>
              <p class="contentp">{{item.content}}</p>
             </div>
						</div>
						<div v-if="(item.reviewers)">
							 <div @click="changCommmer(item.name,index)" >
                <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}&nbsp;&nbsp;回复&nbsp;&nbsp;{{item.reviewers}}<span>{{item.time}}</span></b>
                <p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</p>
                </div>
						</div>
					</div>
        </div>
      </div>
      <div class="commentBox">
        <h3>发表评论</h3>
        <b v-if="type">你回复&nbsp;{{oldComment}}</b>
        <textarea name="" value="请填写评论内容" v-model="commentText"></textarea>
        <button class="btn" @click="addComment">发表</button>
		    <button class="btn" @click="canelCommit">取消</button>
	    </div>
    </div>
</template>
<script>
export default {
  name: "CommentArea",
  props:["comment"],
  data() {
    return {
      // comment: [
      //   {
      //     name: "wk",
      //     reviewers: "",
      //     time: "",
      //     content: "wk的评论"
      //   },
      //   {
      //     name: "wkw",
      //     reviewers: "wk",
      //     time: "",
      //     content: "wkw回复wk"
      //   },
      //   {
      //     name: "wkww",
      //     reviewers: "",
      //     time: "",
      //     content: "wkww的评论"
      //   }
      // ],
      commenter: "", //评论人
      commentText: "",
      index: "",
      type: 0, //0为评论作者1为评论别人的评论
      oldComment: null,//要回复的人
      reviewersContent:null,//要回复的内容
      chosedIndex: -1
    };
  },
  // watch:{
  //   comment:function(){
  //     if(this.type==0&&cookieOperation.getCookie("commenter")){
  //       console.log(document.getElementById('scroll-comment').scrollHeight);
  //       document.getElementById('scroll-comment').scrollTop=document.getElementById('scroll-comment').scrollHeight
  //     }
  //   }
  // },
  methods: {
    addComment: function() {
      if(!this.cookieOperation.getCookie("commenter")){//如果不存在cookie中不存在commenter
        console.log("dfsd");
          this.$prompt('请输入你的游客名', '提示', {
          confirmButtonText: '确定',
          inputPattern: /^[\u4e00-\u9fa5a-zA-Z1-9]+$/,
          inputErrorMessage: '只允许汉字、字母、数字的组合！否则判定为存在非法字符'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '您的游客名为: ' + value
          });
          this.cookieOperation.setCookie("commenter",value)
          this.commenter=value
          this.axios.post(this.api.addComment,{
          type:this.type,
          name:this.commenter,
          reviewers:this.oldComment,
          content:this.commentText,
          reviewersContent:this.reviewersContent
        },'').then(res2=>{
          if(res2.data.code==1){//code为1时
             console.log(res2.data);
           var len=this.comment.length;
        if (this.type == 0) {
        this.comment.splice(len, 0, {
          name: this.commenter,
          time: res2.time,
          content: this.commentText,
        });
        // document.getElementById('scroll-comment').scrollTop = (document.getElementById('scroll-comment').scrollHeight-document.getElementById('scroll-comment').clientHeight)
        // var len1=document.getElementById('scroll-comment').scrollHeight;
        // document.getElementById('scroll-comment').scrollTop=(len1-200);
        // console.log(len1,document.getElementById('scroll-comment').scrollTop)
        console.log(document.getElementById('scroll-comment').scrollHeight)
        //  document.getElementById('scroll-comment').scrollTop=((document.getElementById('scroll-comment').scrollHeight))
        this.commentText = "";
      } else if (this.type == 1) {
        this.comment.splice(this.chosedIndex + 1, 0, {
          name: this.commenter,
          reviewers: this.oldComment,
          time: res2.data.time,
          content: this.commentText
        });
        this.commentText = "";
              document.getElementById('scroll-comment').scrollTop=((document.getElementsByClassName("comment")[this.chosedIndex+1].offsetTop)-(document.getElementById("scroll-comment").offsetTop))
      }
          }else{
            alert("评论或回复失败")
          }
         
        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    
    }else {
  this.axios.post(this.api.addComment,{
          type:this.type,
          name:this.commenter,
          reviewers:this.oldComment,
          content:this.commentText,
          reviewersContent:this.reviewersContent
        },'').then(res2=>{
          console.log(res2.data);
          // this.comment=res2.data.comment 赋值评论

           var len=this.comment.length;
           console.log(this.type,123456)
        if (this.type == 0) {
        this.comment.splice(len, 0, {
          name: this.cookieOperation.getCookie("commenter"),
          time: res2.data.time,
          content: this.commentText,
        });
        // document.getElementById('scroll-comment').scrollTop = (document.getElementById('scroll-comment').scrollHeight-document.getElementById('scroll-comment').clientHeight)
        // var len1=document.getElementById('scroll-comment').scrollHeight;
        // document.getElementById('scroll-comment').scrollTop=(len1-200);
        // console.log(len1,document.getElementById('scroll-comment').scrollTop)
        console.log(document.getElementById('scroll-comment').scrollHeight)
        //  document.getElementById('scroll-comment').scrollTop=((document.getElementById('scroll-comment').scrollHeight))
        this.commentText = "";
      } else if (this.type == 1) {
        this.comment.splice(this.chosedIndex + 1, 0, {
          name:this.cookieOperation.getCookie("commenter"),
          reviewers: this.oldComment,
          time: 2323,
          content: this.commentText
        });
        this.commentText = "";
        document.getElementById('scroll-comment').scrollTop=((document.getElementsByClassName("comment")[this.chosedIndex+1].offsetTop)-(document.getElementById("scroll-comment").offsetTop))
      }
        })
      }
   
    },
    // addComment(){
    //    if(!this.cookieOperation.getCookie("commenter")){//如果不存在cookie中不存在commenter
    //     console.log("shuru");
    //       this.$prompt('请输入你的游客名', '提示', {
    //       confirmButtonText: '确定',
    //       inputPattern: /^[\u4e00-\u9fa5a-zA-Z1-9]+$/,
    //       inputErrorMessage: '只允许汉字、字母、数字的组合！否则判定为存在非法字符'
    //     }).then(({ value }) => {
    //       this.$message({
    //         type: 'success',
    //         message: '您的游客名为: ' + value
    //       });
    //       this.cookieOperation.setCookie("commenter",value)
    //       this.commenter=value;
    //       this.axios.post(this.api.addComment,{
    //       type:this.type,
    //       name:this.commenter,
    //       reviewers:this.oldComment,
    //       content:this.commentText,
    //       reviewersContent:this.reviewersContent
    //     },'',0).then(res=>{
    //       // if(res.data.code==1){
    //         console.log(res)
    //       // }
    //     })
    //     }).catch(() => {
    //       this.$message({
    //         type: 'info',
    //         message: '取消输入'
    //       });       
    //     });
   
    //   }
    //   //  this.$options.methods.judeg();

    // },
    // judeg(){
    //   var that=this
    //    if(!that.cookieOperation.getCookie("commenter")){//如果不存在cookie中不存在commenter
    //     console.log("shuru");
    //       this.$prompt('请输入你的游客名', '提示', {
    //       confirmButtonText: '确定',
    //       inputPattern: /^[\u4e00-\u9fa5a-zA-Z1-9]+$/,
    //       inputErrorMessage: '只允许汉字、字母、数字的组合！否则判定为存在非法字符'
    //     }).then(({ value }) => {
    //       this.$message({
    //         type: 'success',
    //         message: '您的游客名为: ' + value
    //       });
    //       this.cookieOperation.setCookie("commenter",value)
    //       this.commenter=value;
    //     }).catch(() => {
    //       this.$message({
    //         type: 'info',
    //         message: '取消输入'
    //       });       
    //     });
   
    //   }
    // },

    changCommmer: function(name, index) {
      if (name == this.commenter) {
        alert("不可评论自己的发言");
        return;
      }
      this.oldComment = name;
      this.chosedIndex = index;
      this.type = 1;
    },
    canelCommit: function() {
      this.type = 0;
      this.commentText = "";
    }
  },
  updated (){
      if(this.type==0&&this.cookieOperation.getCookie("commenter")||this.chosedIndex==this.comment.length){
        console.log(this.type)
        console.log(document.getElementById('scroll-comment').scrollHeight);
        document.getElementById('scroll-comment').scrollTop=document.getElementById('scroll-comment').scrollHeight}
      
  },
};
</script>
<style>
.blog-md {
  font-size: 1.3vw;
  width: 85%;
  margin: 0 auto;
}
@media all and (max-width: 1350px) {
  .blog-md {
    font-size: 20px;
    width: 88%;
    margin: 0 auto;
  }
}
.titleBox {
  border-bottom: 1px solid #ccc;
  margin: 10px 20px 0;
}
.titleBox h1 {
  text-align: center;
  color: #6bade4;
}
.titleBox p {
  text-align: right;
  font-size: 16px;
  margin: 10px 0;
}
.titleBox i {
  margin: 0 10px 0 40px;
}
/* .articleText {font-size:16px; margin:20px;} */
@media all and (max-width: 800px) {
  .commentBox {
    margin: 20px;
  }
}
#scroll-comment {
  height: 200px;
  overflow: scroll;
  overflow-x: hidden;
}
.commentBox {
  margin: 0 auto;
  width: 80%;
}
.commentBox h3 {
  color: #2c69b9;
  background: #6888f1;
  padding: 8px 15px;
  text-align: left;
  font-size: 18px;
}
.noComment {
  display: none;
}
.comment {
  margin-bottom: 15px;
}
.comment + .comment {
  border-top: 1px solid #ccc;
}
.comment b {
  color: #366ee6;
  font-size: 18px;
  display: block;
  margin: 5px 0;
}
.comment b span {
  color: #333;
  font-size: 14px;
  margin-left: 20px;
}
.comment p {
  font-size: 18px;
  color: #333;
}
.commentBox textarea {
  overflow: auto;
  width: 100%;
  height: 95px;
  outline: none;
  resize: none;
  font-size: 18px;
}
.commentBox button {
  float: right;
  margin-left: 20px;
  padding: 5px 30px;
  background: #6888f1;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
}
.commentBox button:hover {
  color: #fff;
  background: #3286e6;
}
.contentp{word-break: break-all}
</style>
