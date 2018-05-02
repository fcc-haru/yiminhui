<template>
    <div class="loginContainer">    
        <form>
            <div class="logo">logo</div>
            <div class="inputItem">
              <label for="telBox">手机号</label>
              <input type="tel" id="telBox" placeholder="请输入手机号" @focus="actived($event)" @blur="blurHaddle($event)" v-bind:class="{ active: isTelActive }" v-model="telNum">
              <div class="message" v-show="wrongMsg">{{errorTelMessage}}</div>
            </div>
            <div class="inputItem">
              <label for="pwdBox" class="pwdlabel">密  码</label>
              <input type="password" id="pwdBox" placeholder="请输入密码" @focus="actived($event)" @blur="blurHaddle($event)" v-bind:class="{ active: isPwdActive }" v-model="pwdNum">
              <div class="message" v-show="wrongMsg">{{errorPwdMessage}}</div>
            </div>
            <div class="submit"> 
               <button type="submit" @click="submitForm()">登 录</button>
            </div>
        </form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        isTelActive:false,
        isPwdActive:false,
        wrongMsg: false,
        telNum:'',
        pwdNum:''

      }
      // var validatePassTel = (rule , value, callback) => {
      //   var PATTERN_CHINAMOBILE = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/; 
      //   var PATTERN_CHINAUNICOM = /^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/; 
      //   var PATTERN_CHINATELECOM = /^1(3[3])|(8[019])\d{8}$/; 
      //   if (value === '') {
      //     callback(new Error('请输入手机号'));
      //   } else if(value.length !== 11){
      //       callback(new Error('请输入有效的手机号！'));
      //   }else {
      //     if (PATTERN_CHINAUNICOM.test(value)||
      //       PATTERN_CHINAMOBILE.test(value)||
      //       PATTERN_CHINATELECOM.test(value)) {
      //       this.$refs.ruleForm2.validateField('checkPass');
      //     }
      //     callback();
      //   }
      // };
      // var validatePassWord = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   }else {
      //     callback();
      //   }
      // };
      // return {
      //   ruleForm2: {
      //       passTel: '13612345678',
      //       passWord: '123456',
      //   },
      //   rules2: {
      //     passTel: [
      //       { validator: validatePassTel, trigger: 'blur' }
      //     ],
      //     passWord: [
      //       { validator: validatePassWord, trigger: 'blur' }
      //     ]
      //   }
      // };
    },
    methods: {
      actived(event){
        if(event.target.id === "telBox"){
           this.isTelActive=true;
        }else if(event.target.id === "pwdBox"){
          this.isPwdActive=true;
        }   
      },
      blurHaddle(event){
        if(event.target.id === "telBox"){
           this.isTelActive=false;
           console.log(telNum);
           console.log(this.telNum);
           validatePassTel(this.telNum)
        }else if(event.target.id === "pwdBox"){
          this.isPwdActive=false;
        }  
      },
      validatePassTel(value){
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
          // callback();
        }
      },
      submitForm(formName) {
        // 为了让服务端渲染正确请求数据
        this.$axios.defaults.baseURL = 'http://localhost:5757';
      
        this.$axios.post('/weapp/login', this.qs.stringify({
          title: 'Fred'
        }))
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('登录成功');
        //   } else {
        //     console.log('提交失败');
        //     return false;
        //   }
        // });
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
    padding:20px;
}
.logo{
    height:100px;
    line-height:50px;
    text-align:center;
}
.inputItem{
  margin: 0 50px 40px 50px;
}
button{
    padding:10px 30px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
}
label{
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color:#555;
  margin-right:20px;
  width: 60px;

}
input{
  border: 1px solid #ccc;
  padding: 8px 15px;
}
.submit{
  text-align: center;
}
.active{
  border:1px solid blue
}
.message{
  color:red;
  margin-top:5px;
  padding-left: 82px;
}
</style>
