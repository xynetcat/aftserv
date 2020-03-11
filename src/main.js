import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import Axios from 'axios'
import App from './App.vue'
import Login from './components/Login.vue'
import Main from './components/Main.vue'
import User from './components/User.vue'
import Prod from './components/Prod.vue'
import Appeal from './components/Appeal.vue'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Element)
Vue.prototype.$axios = Axios

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/main', component: Main,
    children:[
      {
        path:"user",
        component:User
      },{
        path:"prod",
        component:Prod
      },{
        path:"appeal",
        component:Appeal
      }
    ]
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
