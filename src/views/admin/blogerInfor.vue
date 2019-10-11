<template>
  <div>
    <logout></logout>
    <el-upload
      class="avatar-uploader"
      action="http://119.23.235.237/index.php"
      :show-file-list="false"
      :on-change="handlePictureCardPreview"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      
    </el-upload>
    <el-button type="primary" @click="sub" round>上传图片</el-button>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="你的方向" prop="direction">
        <el-select v-model="ruleForm.direction" placeholder="请选择你的方向">
          <el-option label="web" value="web"></el-option>
          <el-option label="Java" value="Java"></el-option>
          <el-option label="U3d" value="U3d"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自我介绍" prop="intro">
        <el-input type="textarea" v-model="ruleForm.intro"></el-input>
      </el-form-item>
        <el-form-item label="座右铭" prop="motto">
        <el-input type="textarea" v-model="ruleForm.motto"></el-input>
      </el-form-item>
       <el-form-item label="建议" prop="advice">
        <el-input type="textarea" v-model="ruleForm.advice" class="textdiv"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import logout from "../../components/logout";
export default {
  data() {
    return {
      imageUrl: "",
      file: null,
      ruleForm: {
        name: "",
        direction: "",
        intro: "",
        motto: "",
        advice: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名 最好是真实姓名",
            trigger: "blur"
          },
          { min: 1, max: 20, message: "长度在20个字符内", trigger: "blur" }
        ],
        direction: [
          { required: true, message: "请选择你的方向", trigger: "change" }
        ],
        intro: [{ required: true, message: "请填写自我介绍", trigger: "blur" }],
        motto: [{ required: true, message: "请填写座右铭", trigger: "blur" }],
        advice: [{ required: true, message: "请填写建议", trigger: "blur" }]
      }
    };
  },
  mounted() {
    console.log(123)
    this.cookieOperation.setCookie("id",12)
    if (!this.cookieOperation.getCookie("token")) {
      alert("你未登录或者你的登录过期");
      this.$router.push({ name: "login" });
    }

    this.axios.post(this.api.getBlogerInfor,{
      bloger:this.cookieOperation.getCookie("id")
    },'')
      .then(res => {
        if (res.data.code == 1) {
          alert("获取信息成功");
          this.imageUrl=res.data.imageUrl;
          this.name = res.data.name;
          this.direction = res.data.direction;
          this.intro = res.data.intro;
          this.motto = res.data.motto;
        } else {
          alert("无信息");
        }
      })
      .catch(error => {
        console.log("发生错误", error);
      });
  },
  methods: {
    sub() {
      var param = new FormData(); //创建form对象
      param.append("file", this.file); //通过append向form对象添加数据
      console.log(param.get("file")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      // let config = {
      //   headers: { "Content-Type": "multipart/form-data" }
      // }; //添加请求头
      // this.axios.post("http://119.23.235.237/index.php",param,config)
      this.axios.postImg(this.api.blogerImg,param).then(res => {
        console.log(res.data);
      });
    },
    handlePictureCardPreview(file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      this.file = file;
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.axios.post(this.api.changeBlogerInfor, {
              name: this.ruleForm.name,
              direction: this.ruleForm.direction,
              intro: this.ruleForm.intro,
              motto: this.ruleForm.motto,
              advice: this.ruleForm.advice
            },'',1)
            .then(res => {
              if (res.data.code == 1) {
                alert("保存成功");
                history.go(0);
              } else {
                alert("保存失败");
              }
            })
            .catch(error => {
              console.log("发生错误", error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  components:{
    logout
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.textdiv textarea {
  height: 130px;
}
</style>
