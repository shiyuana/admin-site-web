import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入组件
import Login from '@/components/login'
import Home from '@/components/home'
import ChangeBill from '@/components/changeBill'
import BillManage from '@/components/billManage'
import BillPayment from '@/components/billPayment'

export default new Router({
  mode:'history',//在创建的router对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 # 开头
  routes: [
    {
      path: '/',//默认打开的页面
      name: 'login',
      component: Login,
      meta: { navShow: false}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { navShow: false}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { navShow: true}
    },
    {
      path: '/changeBill',
      name: 'changeBill',
      component: ChangeBill,
      meta: { navShow: true}
    },
    {
      path: '/billManage',
      name: 'billManage',
      component: BillManage,
      meta: { navShow: true}
    },
    {
      path: '/billPayment',
      name: 'billPayment',
      component: BillPayment,
      meta: { navShow: true}
    }
  ]
})
