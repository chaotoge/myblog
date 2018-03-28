/**
 * Created by user on 2018/1/19.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import getters from './getter';
import mutations from './mutation'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    user:{
      "userName":'',
      "userPassword":''
    }
  },
  actions,
  getters,
  mutations
})
export default store

