import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'lib-flexible/flexible'
import Echarts from 'echarts'
Vue.prototype.echarts = Echarts
import Query from './common/query.js'
import '../static/UE/ueditor.config'
import '../static/UE/ueditor.all.min'
import'../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min'


Vue.use(ElementUI)
Vue.use(Echarts);
Vue.use(Query);

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
