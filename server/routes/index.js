/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'   // 定义所有路由的前缀都已 /weapp 开头
})
const controllers = require('../controllers')

// --- 登录与授权 Demo --- //
// 登录接口 /weapp/login
router.post('/login', controllers.login);
module.exports = router
