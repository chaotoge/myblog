import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: resolve => require.ensure([], () => resolve(require('../components/homepage/homepage')), 'homepage')
    },
    {
      path:'/loginlink',
      name: 'loginlink',
      component: resolve => require.ensure([], () => resolve(require('../components/public/link.vue')), 'homepage'),
      children: [
        {
          path:'/loginlink/login',
          name: 'Login',
          component: resolve => require.ensure([], () => resolve(require('../components/login/login.vue')), 'homepage')
        },
        {
          path:'/loginlink/register',
          name: 'Register',
          component: resolve => require.ensure([], () => resolve(require('../components/login/register.vue')), 'homepage')
        }
      ]
    },
    {
      path:'/myblog',
      name: 'MyBlog',
      component: resolve => require.ensure([], () => resolve(require('../components/myblog/my_blog.vue')), 'homepage')
    },
    {
      path:'/note',
      name: 'Note',
      component: resolve => require.ensure([], () => resolve(require('../components/note/note.vue')), 'homepage')
    }
  ]
})
