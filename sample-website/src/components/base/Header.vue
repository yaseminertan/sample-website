<template> 
  <div class="header-container">
    <h1 class="title">Sample Website</h1>
    <div class="header-menu">  
      <span class="fas fa-bars bars" @click='showMenu()' ></span>
      <div style="display:flex"  @click='hideMenu()'>
        <div v-if="isAuth" class="user-info"  @click="logout=true">
          {{ $t("hello") }}
          <span>{{$store.state.user.name}}</span>
        
        </div>
        <button class="button-login" v-if="!isAuth" @click='modal=true'>{{ $t("login") }}</button>
        
        <div class="language">
          <select v-model="$i18n.locale" @change="changeLanguage()">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
          </select>
        </div>
      </div>
    </div>
    <modal v-if="modal" @close="modal = false" class='modal'>
      <button class="button-modal" @click='modal = false'> X</button><br>
      <input v-model="name" placeholder="Name">
      <input v-model="mail" placeholder="E-mail">
      <label style="color:red" v-if="!validMail">{{ $t("mailError") }}</label>
      <input v-model="password" type="password" placeholder="Password">
      <button class="button-modal" @click='signin()'>{{ $t("save") }}</button>
    </modal>

    <modal v-if="logout" @close="logout = false" class='modal'>
      <button class="button-modal" @click='logout = false'> X</button><br>
      <p>{{$store.state.user.mail}}</p>
      <button class="button-modal" @click='logoutFn()'>{{ $t("logout") }}</button>
    </modal>
  </div>
    
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  name: "Header",
  data: () => {
    return {
      modal:false,
      logout:false,
      name:'',
      mail:'',
      password:'',
      loginName:'',
      loginMail:'',
      isAuth:false,
      langs: ['TR', 'EN'],
      regMail: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      validMail:true,
    }},
  computed: {
    ...mapState(['user']),
    
  },
  methods:{
    ...mapActions(['login']),
    signin(){
      if(this.isEmailValid() && this.name && this.mail && this.password){
        const params={
          name:this.name,
          mail:this.mail,
          password:this.password
        }
        this.$store.commit("setUser", params);
        this.modal=false;
        this.isAuth=true;
        this.loginName=this.name;
        this.loginMail=this.mail;
      }
    },
    logoutFn(){
      const params={
        name:"",
        mail:""
      }
      this.$store.commit("setUser", params);
      this.logout=false;
      this.isAuth=false;
    },
    changeLanguage()
    {
      this.$store.commit("setOptions",this._i18n.messages[this._i18n.locale].option);
    },
    isEmailValid: function() {
        this.validMail= (this.mail == "") ? false : (this.regMail.test(this.mail)) ? true : false;
        return this.validMail;
    },
    showMenu(){
      document.getElementById('menu').classList.toggle('menu-show');
    },
     hideMenu(){
      document.getElementById('menu').classList.remove('menu-show');
    }
  },
  created(){
      this.changeLanguage()
  }
}
</script>

<style >
.title{
  width: 100%;
  text-align: center;
  margin: 10px 0px 10px 0px;
}
h1{
  margin: 0;
  font-size: x-large;
}
.user-info{
  color: white;
  cursor: pointer;
}
 .header-container{
   background-color:   rgb(73, 145, 77);
   padding: 10px 10px 20px 10px;
   
 }
 .header-menu{
   display: flex;
   align-items: center;
   justify-content: space-between;
 }
 .button-login{
   background: none;
   color:white;
 }
 .button-modal{
   background: none;
  border: 2px solid rgba(128, 128, 128, 0.582);
  border-radius: 5px;
 }
 .language{
   margin-left: 10px;
 }
  
</style>