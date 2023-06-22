import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



// import { createApp } from 'vue'
// import App from './App.vue'
// import 라우터만든거 from './router.js'

// createApp(App).use(라우터만든거).mount('#app')
