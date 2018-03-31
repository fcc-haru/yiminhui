<template>
    <div class="loginContainer">
           
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <div class="logo">logo</div>
            <el-form-item label="手机号" prop="passTel">
                <el-input type="tel" v-model="rules2.passTel" auto-complete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input type="password" v-model="rules2.passWord" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      var validatePassTel = (rule , value, callback) => {
        var PATTERN_CHINAMOBILE = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/; 
        var PATTERN_CHINAUNICOM = /^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/; 
        var PATTERN_CHINATELECOM = /^1(3[3])|(8[019])\d{8}$/; 
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else if(value.length !== 11){
            callback(new Error('请输入有效的手机号！'));
        }else {
          if (PATTERN_CHINAUNICOM.test(value)||
            PATTERN_CHINAMOBILE.test(value)||
            PATTERN_CHINATELECOM.test(value)) {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePassWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else {
          callback();
        }
      };
      return {
        ruleForm2: {
            passTel: '13612345678',
            passWord: '123456',
        },
        rules2: {
          passTel: [
            { validator: validatePassTel, trigger: 'blur' }
          ],
          passWord: [
            { validator: validatePassWord, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功');
          } else {
            console.log('提交失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.loginContainer{
    width:100%;
    height:100%;
    position:relative;
    
}
.loginContainer form{
    width:500px;
    height:400px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-200px;
    margin-left:-250px;
    border:1px solid #ccc;
    padding:20px 40px 0 0;
}
.logo{
    height:100px;
    line-height:50px;
    text-align:center;
}
.el-form-item:last-of-type {
    margin-top:50px;
}
.el-form-item:last-of-type .el-form-item__content{
    text-align:center;
    margin:0 !important;
}
.el-button{
    padding:12px 50px;
   
}
</style>