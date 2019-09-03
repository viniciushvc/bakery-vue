import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

new Vue({
  render: h => h(App),
}).$mount('#app')
