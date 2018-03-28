/**
 * Created by @chaotoge on 2018/1/19.
 */

//引入api
import commonApi from '../../../commonApi/api.js';
import api from '../api/api';
import router from '../router/index'

export default {
  //注册
  register({commit},body){
    api.register(body,(res) => {
      commit('register',res);
    })
  },
  //登录
  login({commit},body){
    commonApi.login(body,(res) => {
      console.log(body);
      commit('login',res);
      if(res.data.code == 0){
        router.push({name:'HomePage'});
      }
    })
  }
}
