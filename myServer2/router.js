const multer = require("koa-multer")
const router = require("koa-router")()

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
      atx.body = {
          name: "waf"
      }
  })

  module.exports = router