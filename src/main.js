// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './style/style.scss'

import Collapse from 'directives/Collapse'
Vue.directive('collapse', Collapse)

import Router from 'vue-router'
import store from './store'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Router)

import SpeedTest from './views/SpeedTest.bs'
import Settings from './views/Settings'
import Info from './views/Info'

var router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'active',
  routes: [
      { path: '/', component: SpeedTest },
      { path: '/settings/', component: Settings },
      { path: '/info/', component: Info },
      { path: '*', redirect: '/' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
