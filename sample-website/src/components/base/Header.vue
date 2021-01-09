<template>
    <div class="header-container">
   
      <div v-if="isAuth" class="user-info">
        {{ $t("hello") }}
        <span @click="logout=true">{{$store.state.user.name}}</span>
       
      </div>
      <button class="button-login" v-if="!isAuth" @click='modal=true'>{{ $t("login") }}</button>
      
      <div class="language">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
      </div>
      
      <modal v-if="modal" @close="modal = false" class='modal'>
        <button class="button-modal" @click='modal = false'> X</button><br>
        <input v-model="name" placeholder="Name">
        <input v-model="mail" placeholder="E-mail">
        <input v-model="password" placeholder="Password">
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
      langs: ['TR', 'EN'] 
    }},
  computed: {
    ...mapState(['user']),
    
  },
  methods:{
    ...mapActions(['login']),
    signin(){
      if(this.name && this.mail && this.password){
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
    }
    
  },
  
}
</script>

<style >
.user-info{
  color: white;
  cursor: pointer;
}
 .header-container{
   background-color:   rgb(73, 145, 77);
   height: 15%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   padding: 10px;
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