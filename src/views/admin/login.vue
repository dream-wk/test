<template>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="loginform">
  <el-form-item label="账号" prop="id">
    <el-input v-model.number="ruleForm.id"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item> 
  <el-form-item class="buttons">
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import md5 from 'js-md5'
export default {
  data() {
    var checkId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      var reg = /^[0-9a-zA-Z]+$/;
      if (!reg.test(value)) {
        callback(new Error("账号只能是数字和字母"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      console.log(rule,123)
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      ruleForm: {
        pass: "",
        id: ""
      },
      rules: {
        //输入字段的规则
        pass: [{ validator: validatePass, trigger: "blur" }],
        id: [{ validator: checkId, trigger: "blur" }]
      }
    };
  },
  // mounted() {
  //   this.cookieOperation.setCookie("token", "wkk");
  //   this.axios.post(this.api.login).then(res => {
  //     console.log(res, 1111, this.cookieOperation.getCookie("token"));
  //   });
  //   console.log("mounted函数")
  // },
  methods: {
    submitForm(formName) {
      console.log(this.$refs);
      this.$refs[formName].validate((valid) => {
        //对整个表单进行校验的方法,参数为一个回调函数.该回调函数会在校验结束后被调用，并传入两个参数:是否校验成功和未通过校验的字段
        if (valid) {
          this.axios.post(this.api.login, {
              username: this.ruleForm.id,
              password: md5(this.ruleForm.pass)
            },'',0).then(res => {
              if (res.data.code == 1) {
                alert("欢迎你的登录"),
                  this.$router.push({
                    name: "adminpage",
                    // params: { id: res.data.id }//把博主的id传过去
                  });
              } else {
                alert("账号或密码输入出错");
              }
            }).catch(error => {
              alert("发生错误，请重新登录");
              console.log("发生错误", error);
            });
          console.log(this.ruleForm, "ok");
        } else {
          alert("输入的账号或密码不符合要求，重新输入");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less">
.loginform {
  width: 80vw;
  margin: 0 auto;
  margin-top: 100px;
}
.buttons {
  width: 250px;
  margin: 0 auto;
}
</style>
