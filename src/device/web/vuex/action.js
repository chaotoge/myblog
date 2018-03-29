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
      console.log(res)
      if(res.code == 200){
        router.push({ name: 'Login'});
      }else{
        alert(res.massage);
      }
    })
  },
  //登录
  login({commit},body){
    commonApi.login(body,(res) => {
      console.log(res);
      commit('login',res);
      if(res.code == 200){
        router.push({name:'HomePage'});
      }else{
        alert(res.massage);
      }
    })
  }
}
