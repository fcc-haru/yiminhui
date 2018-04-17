// 登录授权接口
module.exports = async (ctx, next) => {
const title = ctx.request.body.title;
//   // const content = ctx.request.body.content;
//   // const abstract = ctx.request.body.abstract;
//   // const publish = ctx.request.body.publish;
//   // const tags = ctx.request.body.tags;
//   const createTime = new Date();
//   const lastEditTime = new Date();
//   if (title == '') {
//     ctx.throw(400, '标题不能为空')
//   }
//   if (content == '') {
//     ctx.throw(400, '文章内容不能为空')
//   }
//   if (abstract == '') {
//     ctx.throw(400, '摘要不能为空')
//   }
//   const article = "";
//    let createResult = "";
//   // let createResult = await article.save().catch(err => {
//   //   ctx.throw(500, '服务器内部错误')
//   // });
// //   await Article.populate(createResult, { path: 'tags' }, function(err, result) {
// //     createResult = result;
// //     // console.log(result)

// //   });
  console.log(title);
  ctx.body = "hello word";

}