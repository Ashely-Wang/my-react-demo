const multer = require("koa-multer")
const router = require("koa-router")()
const db = require("./db")
var storage = multer.diskStorage({  
    //文件保存路径  
    destination: function (req, file, cb) {  
      cb(null, '../public/upload/')  
    },  
    //修改文件名称  
    filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");  
      cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
    }  
  }) 

  var uploads = multer({storage: storage})

  router.post("/wawa", async atx => {
      console.log(atx.request.body)
      atx.response.body = {
        name: "蔡徐坤",
        hobbies: "唱跳rap篮球"
    }
  })
  router.get("/topics", async atx => {
      console.log("收到请求啦")
      const ret = await db.query("db.json")
      const data = JSON.parse(ret)
      atx.response.body = data
  })
  router.post("/topics", async atx => {
      console.log(atx.request.body)
      atx.response.status = 200
      db.add("db.json", atx.request.body)
  })
  module.exports = router