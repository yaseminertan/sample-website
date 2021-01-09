<template>
    <div class="header-container">
   
      <div v-if="isAuth" class="user-info">
        {{ $t("hello") }}
        {{$store.state.user.name}}
       
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
        <button class="button-modal" @click='signin()'>{{ $t("save") }}</button>
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
      name:'',
      mail:'',
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
      const params={
        name:this.name,
        mail:this.mail
      }
      this.$store.commit("setUser", params);
      this.modal=false;
      this.isAuth=true;
      this.loginName=this.name;
      this.loginMail=this.mail;
    },
    
  },
  
}
</script>

<style >
.user-info{
  color: white;
}
 .header-container{
   background-color: rgb(94, 92, 92);
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