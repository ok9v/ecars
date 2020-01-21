// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueCharts from 'vue-charts'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import SoldCars from './components/SoldCars.vue'
import BattaryDegradation from './components/BattaryDegradation.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(VueCharts)

const router = new VueRouter({
  routes: [
    {
      path: '/ecarsinfo/sub-page-1',
      name: 'BattaryDegradation',
      component: BattaryDegradation
    },
    {
      path: '/ecarsinfo/sub-page-2',
      name: 'SoldCars',
      component: SoldCars
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
