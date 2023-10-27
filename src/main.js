import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'
import Contact from "@/components/brand/home/Contact.vue";
var VueCookie = require('vue-cookie');

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);
Vue.use(VueParallaxJs)

Vue.config.productionTip = false

const routes = [
  {
    path: '/contact', // Đường dẫn bạn muốn chuyển đến
    name: 'Contact', // Tên của tuyến, có thể đặt tên theo ý muốn
    component: Contact, // Thay thế bằng tên component bạn muốn hiển thị
  },
];

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
