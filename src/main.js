import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import DateFilter from '@/filters/date'
import './registerServiceWorker'

Vue.config.productionTip = false

// Register date.js with Vue.filter. This is a global
// filter that we can use anywhere in the application
// 1st arg is the filter tag which is the command that we will use in the template
// 2nd arg is the function we imported
Vue.filter('date', DateFilter)

// With this we can head over to the places where we want to use it and add
// a pipe symbol followed by date: {{ meetup.date | date }}.
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
