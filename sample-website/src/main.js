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
    text:'Text',
    contact:'Contact Us',
    home:'Home',
    login:'Login',
    save:'Save',
    logout:'Logout',
    send:'Send',
    tr:'Turkey',
    us:'United States of America',
    gb:'United Kingdom',
    de:'Germany',
    se:'Sweden',
    ke:'Kenya',
    br:'Brazil',
    zw:'Zimbabwe',
    homeTitle:'Where can I get some?',
    homeText:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
  },
  TR: {
    hello: 'Merhaba ',
    title:'Başlık',
    name:'İsim',
    mail:'E-posta',
    phone:'Telefon',
    country:'Ülke',
    text:'Açıklama',
    contact:'İletişim',
    home:'Anasayfa',
    login:'Giriş',
    save:'Kaydet',
    logout:'Çıkış',
    send:'Gönder',
    tr:'Türkiye',
    us:'Amerika',
    gb:'İngiltere',
    de:'Almanya',
    se:'İsveç',
    ke:'Kenya',
    br:'Brezilya',
    zw:'Zimbabve',
    homeTitle:'Nereden Bulabilirim?',
    homeText:'Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı kullanacaksanız, metin aralarına utandırıcı sözcükler gizlenmediğinden emin olmanız gerekir. İnternet\'teki tüm Lorem Ipsum üreteçleri önceden belirlenmiş metin bloklarını yineler. Bu da, bu üreteci İnternet üzerindeki gerçek Lorem Ipsum üreteci yapar. Bu üreteç, 200\'den fazla Latince sözcük ve onlara ait cümle yapılarını içeren bir sözlük kullanır. Bu nedenle, üretilen Lorem Ipsum metinleri yinelemelerden, mizahtan ve karakteristik olmayan sözcüklerden uzaktır.',
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
