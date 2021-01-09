import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false
const messages = {
  EN: {
    hello: 'Hello ',
    title: 'Title',
    name:'Name',
    mail:'Email',
    phone:'Phone Number',
    country:'Country',
    contact:'Contact Us',
    home:'Home',
    login:'Login',
    save:'Save',
    tr:'Turkey',
    us:'United States of America',
    gb:'United Kingdom',
    de:'Germany',
    se:'Sweden',
    ke:'Kenya',
    br:'Brazil',
    zw:'Zimbabwe',

  },
  TR: {
    hello: 'Merhaba ',
    title:'Başlık',
    name:'İsim',
    mail:'E-posta',
    phone:'Telefon',
    country:'Ülke',
    contact:'İletişim',
    home:'Anasayfa',
    login:'Giriş',
    save:'Kaydet',
    tr:'Türkiye',
    us:'Amerika',
    gb:'İngiltere',
    de:'Almanya',
    se:'İsveç',
    ke:'Kenya',
    br:'Brezilya',
    zw:'Zimbabve'
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
