// 1. Import Vue functionality from 'vue' module
import Vue from 'vue'
// 2. Import App.vue template/script/styling from eponymous Vue file
import App from './App.vue'

// 3. Declare new Vue instance (per usual)
new Vue({
  el: '#app',
  render: h => h(App)
})
