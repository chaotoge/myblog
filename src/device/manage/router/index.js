/**
 * Created by user on 2018/1/10.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/homepage'
import Login from '../components/login/login'
import addText from '../components/home/addText'
import textList from '../components/home/textList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect:{ name: 'textList' },
      children:[
        {
          path:'/addText',
          name: 'addText',
          component: addText
        },
        {
          path:'/textList',
          name: 'textList',
          component: textList
        },
        {
          path:'/nodeList',
          name: 'nodeList',
          component: textList
        },
        {
          path:'/logList',
          name: 'logList',
          component: textList
        },
        {
          path:'/lifeList',
          name: 'lifeList',
          component: textList
        },
        {
          path:'/otherList',
          name: 'otherList',
          component: textList
        }
      ]
    },{
      path:'/',
      name: 'Login',
      component: Login
    }
  ]
})

