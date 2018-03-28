/**
 * Created by user on 2018/1/10.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/homepage'
import Login from '../components/login/login'
// import Note from '../components/note/note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path:'/',
      name: 'Login',
      component: Login
    }//,{
    //   path:'/note',
    //   name: 'Note',
    //   component: Note
    // }
  ]
})

