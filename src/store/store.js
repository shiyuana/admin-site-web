import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
  //设置全局访问的state对象
  state:{
    hidden:false
  }
});

export default store;
