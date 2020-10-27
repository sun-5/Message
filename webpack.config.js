const path = require('path')

module.exports = {
    entry:path.join(__dirname,'./src/index.js'),//需要打包的文件
    output:{
        path:path.join(__dirname,'./dist'),//打包好的文件存放地址
        filename:'buid.js' //打包好的文件名
    },
	mode : 'development'   // development为开发者环境，production为生产环境变量 ，还有一个为none
}