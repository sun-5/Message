// 引入jQuery
//import from es6中导入模块方式
 import $ from 'jquery' //es6语法解析不了 浏览器不识别
 
 import './css/index.css' //需要css loader
 import './css/index.less' //需要lessloader
 import './css/index.scss' //需要scssloader
 import 'bootstrap/dist/css/bootstrap.css'  //通过路径形式引用node_modules中文件 可以省略node_modules

$(function(){
    $("#app").css({
        "width":"100px",
        "height":"100px",
        "background":"red" 
    })
});

class Person{ //ES6语法 需要loader
    static info = {name:'zs',age:20}
}
var p = new Person();
console.log(Person.info);
/*
使用webpack-dev-server工具来实现自动打包编译
cnpm i webpack-dev-server -D 安装命令
cnpm i webpack -D 安装本地webpack依赖
出现问题 删除node——modules文件夹 重装包 cnpm i
webpack-dev-server 打包的  build.js(虚拟的文件) 没有放到物理磁盘，托管到了电脑内存中，因为根目录根本没有这个文件

 cnpm i html-webpack-plugin -D  安装插件 生成内存中的index.html

cnpm i style-loader css-loader -D

cnpm i less less-loader -D

cnpm i node-sass sass-loader -D

babel 将高级语法转为低级语法
 第一套包： cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
 第二套包： cnpm i babel-preset-env babel-preset-stage-0 -D
 打开 webpack 的配置文件，在 module 节点下的 rules 数组中，添加一个 新的 匹配规则：
{ test:/.js$/, use: ‘babel-loader’, exclude:/node_modules/ }
在项目的 根目录中，新建一个 叫做 .babelrc 的Babel 配置文件，这个配置文件，属于JSON格式，
所以，在写 .babelrc 配置的时候，必须符合JSON语法规范： 不能写注释，字符串必须用双引号
在 .babelrc 写如下的配置： 大家可以把 preset 翻译成 【语法】 的意思
        {
            “presets”: [“env”, “stage-0”],
            “plugins”: [“transform-runtime”]
        }
*/