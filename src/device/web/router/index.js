import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/homepage/homepage'
import loginLink from '../components/public/link.vue'
import Login from '../components/login/login.vue'
import Register from '../components/login/register.vue'
import MyBlog from '../components/myblog/my_blog'
import Note from '../components/note/note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/loginlink',
      name: 'loginlink',
      component: loginLink,
      children: [
        {
          path:'/loginlink/login',
          name: 'Login',
          component: Login
        },
        {
          path:'/loginlink/register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path:'/myblog',
      name: 'MyBlog',
      component: MyBlog
    },
    {
      path:'/note',
      name: 'Note',
      component: Note
    }
  ]
})
