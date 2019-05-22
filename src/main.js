import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'lib-flexible/flexible'
import Query from './common/query.js'


Vue.use(ElementUI)
Vue.use(Query);

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
