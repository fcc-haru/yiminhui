<template>
    <div class="loginContainer">    
        <form @submit.prevent = "submitForm($event)">
            <div class="logo">logo</div>
            <div class="inputItem">
              <label for="telBox">手机号</label>
              <input type="tel" id="telBox" name = "user" placeholder="请输入手机号" @focus="actived($event)" @keyup="blurHaddle($event)" @blur="blur($event)" v-bind:class="{ active: isTelActive }" v-model="telNum" required>
              <div class="message" v-show="wrongTelMsg">{{errorTelMessage}}</div>
            </div>
            <div class="inputItem">
              <label for="pwdBox" class="pwdlabel">密  码</label>
              <input type="password" id="pwdBox" name = "pwd"  placeholder="请输入密码" @focus="actived($event)" @keyup="blurHaddle($event)" @blur="blur($event)" v-bind:class="{ active: isPwdActive }" v-model="pwdNum" required>
              <div class="message" v-show="wrongPwdMsg">{{errorPwdMessage}}</div>
            </div>
            <div class="submit"> 
               <button type="submit" v-bind:disabled='isdisabled' v-bind:class="{ activeBtn: !isdisabled}">登 录</button>
               <div class="error" v-show="iserror">{{errorMessage}}</div>
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
        wrongTelMsg: false,
        wrongPwdMsg: false,
        telNum:'',
        pwdNum:'',
        errorTelMessage:'',
        errorPwdMessage:'',
        isdisabled:true,
        iserror:false,
        errorMessage:"登录失败：请输入正确的用户名和密码！"
      }
    },
    methods: {
      actived(event){
        this.iserror = false;
        if(event.target.id === "telBox"){
           this.isTelActive=true;
        }else if(event.target.id === "pwdBox"){
          this.isPwdActive=true;
        }   
      },
      blur(){
        if(event.target.id === "telBox"){
           this.isTelActive=false;
        }else if(event.target.id === "pwdBox"){
          this.isPwdActive=false;
        }  
      },
      blurHaddle(event){
        if(event.target.id === "telBox"){
           this.isTelActive=false;
           this.validatePassTel(this.telNum);
           if(this.telNum !=="" && this.pwdNum!==""){
             this.isdisabled=false;
           }else{
             this.isdisabled=true;
           }
        }else if(event.target.id === "pwdBox"){
          this.isPwdActive=false;
          this.validatePassPwd(this.pwdNum);
          if(this.telNum !=="" && this.pwdNum!==""){
             this.isdisabled=false;
           }
        }  
      },
      validatePassTel(value){
        var PATTERN_CHINAMOBILE = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/; 
        var PATTERN_CHINAUNICOM = /^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/; 
        var PATTERN_CHINATELECOM = /^1(3[3])|(8[019])\d{8}$/; 
        if (value === '') {
          this.isdisabled=true;
          this.wrongTelMsg =true;
          this.errorTelMessage='请输入手机号';
        } else if(value.length !== 11){
          this.wrongTelMsg =true;
          this.errorTelMessage='请输入有效的手机号！';
        }else {
          if (PATTERN_CHINAUNICOM.test(value)||
            PATTERN_CHINAMOBILE.test(value)||
            PATTERN_CHINATELECOM.test(value)) {
               this.wrongTelMsg =false;
          }else{
            this.wrongTelMsg =true;
            this.errorTelMessage='请输入有效的手机号！';
          }
        }
      },
      validatePassPwd(value){
          if (value === '') {
            this.isdisabled=true;
            this.wrongPwdMsg =true;
            this.errorPwdMessage='请输入密码';
        } else{
          this.wrongPwdMsg =false;
        }
      },
      submitForm(e) {
        var that = this;
        // e.preventDefault();
        // 为了让服务端渲染正确请求数据
        this.$axios.defaults.baseURL = 'http://localhost:5757';
        console.log(e)
        that.$axios.post('/weapp/login', this.qs.stringify({
          data: e
        }))
        .then(function (response) {
          console.log(response.data)
          if(response.data==="success"){
            that.$router.push({path: '/main'});
          }else if(response.data==="error"){
            that.iserror = true;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
.activeBtn{
  background: greenyellow;
}
.error{
  margin-top:10px;
  padding: 10px;
  color:red;
}
</style>
