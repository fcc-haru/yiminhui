const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('./middlewares/bodyparser')
const config = require('./config')

app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
  }))
app.use(response)
// 引入路由分发
const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))
