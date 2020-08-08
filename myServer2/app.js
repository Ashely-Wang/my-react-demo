const Koa = require("koa")
const app = new Koa()
const router = require("./router")
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
// app.use(multerUploader.routes(), multerUploader.allowedMethods())
// app.use(async atx => {
    // switch (atx.request.url) {
    //     case "/qaqa": {
    //         atx.response.message = "草"
    //     }
    //     case "/wawa": {
    //         atx.response.message = "saj"
    //     }
    //     case "/rara": {
    //         atx.response.message = "撒个谎"
    //     }
    // }
    // if (atx.request.url == '/qaqa') {
    //     atx.response.message = "isafhh"
    // } else if (atx.request.url == '/rara') {
    //     atx.response.message = "isafhh"
    // } else if (atx.request.url == '/wawa') {
    //     atx.response.message = "isafhh"
    // } else if (atx.request.url == '/tata') {
    //     atx.response.message = "isafhh"
    // }
// })
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/wawa') {
            return "*"; // 允许来自所有域名请求
        }
        //return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
        return "*"
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(router.routes())
app.listen(3100, () => {
    console.log("the server is running!");
})