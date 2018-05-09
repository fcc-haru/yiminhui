// 登录授权接口
const mysql = require('../tools/dbConnect');

module.exports = async (ctx, next) => {

let user = ctx.request.body.user;
let pwd = ctx.request.body.pwd

let data = await mysql("userMaster").select("*").where({"userId":user,"password":pwd})
  if(data.length!==0){
    ctx.response.body = "success"
  }else{
    ctx.response.body = "error"
  }
}
