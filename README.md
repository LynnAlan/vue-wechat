# 一款基于vue2.0 单页面webapp

> 利用vue2.X + vuex 2.X + vue-router2.X模仿微信。个人独立开发，目前主要完成了各个页面的主要框架展示，通过vuex mock 数据展示。由于vue-touch暂时不支持vue2.0，自己写的一个指令模拟左右滑动事件，并高还原了微信滑动交互效果。
## 主页面消息框效果图
## ![初稿交互图](./static/homepage.gif)

## 跳转到其他页面
## ![其他页面](./static/gopage.gif)
## 安装本地跑起来
### 技术点
- vue
- vuex
- vue-router
- vue-cli
- scss
- webpack
- node

### 自我的一些特点
主页面消息列表左右滑动，通过css3加上自己写的`v-touch`指令实现基本通微信相似的交互效果。
消息内容主要是`vuex`控制，通过`vuex`的辅助函数`mapState,mapGetters, mapActions, mapMutations `来实现各个数据连接。


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
