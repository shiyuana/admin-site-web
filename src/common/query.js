// 封装请求数据的方法
import Axios from "axios"

export default {
  install(Vue, options) {
    var instance = Axios.create({
      baseURL:"http://localhost:3000",
      headers: {}
    });
    Vue.prototype.query = function (method,url,data,callback) {
      instance({
        method:method,
        url:url,
        data:data
      }).then(callback)
    }
  }
}
