import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false
const messages = {
  EN: {
      message: {
      hello: 'hello world',
      title: 'title'
    }
  },
  TR: {
      message: {
      hello: 'Merhaba',
      title:'Başlık'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'EN', // set locale
  messages, // set locale messages
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
