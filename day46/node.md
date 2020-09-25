类库 框架  组件
1、类库
    jquery Zepto underscore 类库中提供了大量的方法供我们在项目开发时使用，类库就是一个工具包，让我们在开发项目的时候变得更快更简单
2、插件
    tab选项卡、banner轮播图、拖拽、swiper插件
    jquery中其实也有大量的插件
    插件就是把某一个具体的功能进行封装
3、组件
    bootstrap ui组件库 swiper layui
    ui组件库一般都是大量插件的一个合集，不仅提供了js的功能，还把结构和样式都实现了，我们需要做的就是复制粘贴实现功能
4、框架
vue、 react 、angular、 uni-app、 react native、 flutter.....
一般来说框架就是类库和组件的组合体，里面提供了大量供我们开发使用的方法，也有配套的ui库供我们去快速开发项目，框架是具备独立的编程思想的，vue是mvvm思想，可以让我们按照视图和数据的相互渲染完成项目的开发

框架 vue(mvvm双向数据绑定) react(mvc单向数据绑定)
app框架(uni-app、react native 、flutter)

vue2 咱们学习和使用的是第二代版本的vue，尤玉溪

声明式：直接告诉计算机你想要干什么（计算机帮你做）
命令式：把你想要指向的结果的指向方式告诉计算机（自己告诉计算机一步一步该怎么做）
中后台：后台管理系统
to B项目 后台项目
to C项目 给客户使用的项目 vant

埋点：就是在页面展示，或者用户点击某一个按钮的时候都会统一的往后台发送一个接口（接口里有对应的参数来区分用户操作的是哪个区域）用来记录用户的行为轨迹,记录一下用户对这款项目的一个操作情况。从而给pm一个判断页面功能有误缺陷的依据

渐进式框架
> 框架一般都是重量级的，里面包含了很多方法，但是我们在实际开发可能不会用到框架的所有方法，所以框架开发人员会按照功能吧框架分模块开发
vue 基础模块（基础的语法，核心功能，组件化开发，相关指令）
vue-router 构建SPA单页面应用的路由
vuex:公共数据（状态）的工具
vue-cli:vue脚手架
components:element-ui iview vant......

vue的MVVM
mvc:是单向数据绑定，数据更改可以渲染视图，但是视图更改不能更新数据，需要我们自己手动更改数据
MVVM:是双向数据绑定的，vue可以实现视图和数据的双向监听，并且从真正意义上把视图和数据完全分开了