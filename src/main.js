import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import vuescroll from 'vuescroll'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      sizeStrategy: 'number'
    }
  },
  name: 'vueScroll'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
