// ie polyfill
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// mock
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import 'ant-design-vue/dist/antd.less'
import i18n from './locales'

// css引入
import './assets/css/common.css'
Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.use(Viewer)
Viewer.setDefaults({
  'inline': false,
  'button': true, // 右上角按钮
  'navbar': false, // 底部缩略图
  'title': true, // 当前图片标题
  'toolbar': true, // 底部工具栏
  'tooltip': true, // 显示缩放百分比
  'movable': true, // 是否可以移动
  'zoomable': true, // 是否可以缩放
  'rotatable': true, // 是否可旋转
  'scalable': true, // 是否可翻转
  'transition': true, // 使用 CSS3 过度
  'fullscreen': true, // 播放时是否全屏
  'keyboard': true, // 是否支持键盘
  'url': 'data-source',
  'ready': function (e) {
    console.log(e.type, '组件以初始化')
  },
  'show': function (e) {
    console.log(e.type, '图片显示开始')
  },
  'shown': function (e) {
    console.log(e.type, '图片显示结束')
  },
  'hide': function (e) {
    console.log(e.type, '图片隐藏完成')
  },
  'hidden': function (e) {
    console.log(e.type, '图片隐藏结束')
  },
  'view': function (e) {
    console.log(e.type, '视图开始')
  },
  'viewed': function (e) {
    console.log(e.type, '视图结束')
    // 索引为 1 的图片旋转20度
    if (e.detail.index === 1) {
      this.viewer.rotate(20)
    }
  },
  'zoom': function (e) {
    console.log(e.type, '图片缩放开始')
  },
  'zoomed': function (e) {
    console.log(e.type, '图片缩放结束')
  }
})
new Vue({
  router,
  store,
  i18n,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
