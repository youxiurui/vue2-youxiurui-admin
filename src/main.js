import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Container,
  Header,
  Aside,
  Main,
  Button
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Button)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
