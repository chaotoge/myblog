/**
 * Created by @chaotoge on 2018/1/10.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

/*引入CSS公用样式
 */
import './assets/css/common.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(Element, { size: 'small' })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
