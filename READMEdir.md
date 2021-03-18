


vue-tutorials   vue1.0版本说明
vue-tutorial-next vue2.0版本说明 https://github.com/MeCKodo/vue-tutorial
vue2 https://github.com/sunseekers/Vue2 
https://github.com/bhnddowinf/vuejs-learn  vue2.0 示例

## 目录说明
vue-tutorials  vue1.0
vue2  vue2.0讲解，不是很全
es6 demo
es6tutorial-gh-pages  语法说明
https://github.com/qianyinghuanmie/vue2.0-demos  一套



## es6开发环境
npm install babel-cli babel-eslint -g
babel --version
mkdir es6
cd es6
npm init
npm install --save-dev babel-preset-es2015 babel-cli   #npm install --save-dev babel-preset-eslatest-node6
babel lib -d build\lib
 babel src/index.js -o dist/index.js
 npm run build


 ## linux vue install
 npm install -g vue-cli
 sudo ln -s /usr/local/lib/nodejs/node-v10.16.0-linux-x64/lib/node_modules/vue-cli/bin/vue /usr/local/bin/

 ## 浏览器支持es6
 -[compat-table](http://kangax.github.io/compat-table/es6/)
 [es6-promise](https://.github.com/jakearchibald/es6-promise)一个兼容 ES6 Promises 的Polyfill类库。 它基于 RSVP.js 这个兼容 Promises/A+ 的类库， 它只是 RSVP.js 的一个子集，只实现了Promises 规定的 API。
- [](https://vuetifyjs.com/zh-Hans/getting-started/browser-support/#webpack)
- [ie引用示例](https://github.com/herbat73/GenVue/blob/master/ClientApp/index.html)
- []()
- []()
- []()
- []()
- []()
- []()
- []()

 ##　 进行数字签名。无法在当前系统上运行该脚本。有关运行脚本和设置执行策略 的详细信息
 set-executionpolicy remotesigned


## npm 用法
npm view jquery versions  查看所有版本
npm i jquery@1.8
npm info jquery  这种方式和第一种类似，也可以查看jquery所有的版本



## NODE_ENV' 不是内部或外部命令，也不是可运行的程序 或批处理文件
npm install cross-env –save-dev
再在NODE_ENV=xxxxxxx前面添加cross-env
 ##  html5
 -[ningbonb/HTML5)](https://github.com/ningbonb/HTML5)  html5 css3 javascript canvas 示例比较全
 -[30-seconds-of-css](https://github.com/30-seconds/30-seconds-of-css)  很多语言示例片断 比较经典
 - [Webpack 4 和单页应用入门](https://github.com/wallstreetcn/webpack-and-spa-guide)


 ## link
 -[ddBuy](https://github.com/Geek-James/ddBuy)移动端开源电商项目，它基于 vue 2.x 和 vant 2.x实现。使用了最新的Vue全家桶技术栈，以及一些优秀的开源库如better-scroll、 moment.js、twix.js、pubsub-js,后台数据通过Easy-Mock搭建。支持多语言国际化,相信不管你是处于哪个段位的攻城狮，本项目都能帮助到你
 -[]()
 -[]()
 -[]()


 ## vscode 调试vue
 https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html
.vscode/launch.json
  {
      "type": "chrome",
      "request": "launch",
      "name": "vuejs: chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
1. npm run dev 
2.设断点
3.chrome也设置就可以了


## iview作者开发手记
-[2016我的心路历程：从 Vue 到 Webpack 到 iView | 掘金技术征文](https://juejin.cn/post/6844903461306236942)
- [Vue+Webpack开发可复用的单页面富应用教程（配置篇）](https://github.com/icarusion/vue-vueRouter-webpack)