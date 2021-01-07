<template>
    <div class="header-container">
      Header
      <button @click='modal=true'></button>
      <div>
        {{loginName}}
        {{loginMail}}
      </div>
      <modal v-if="modal" @close="modal = false" class='modal'>
        <input v-model="name" placeholder="Name">
        <input v-model="mail" placeholder="E-mail">
        <button @click='signin()'>Save</button>
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
      this.loginName=this.name;
      this.loginMail=this.mail;
    }
  },
  created(){
    if(this.$store.state.isAuthenticated){
      this.loginName=this.$store.state.user.name;
      this.loginMail=this.$store.state.user.mail;
    }
  }
}
</script>

<style>
 .header-container{
   background-color: rgb(94, 92, 92);
   height: 20%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px;
 }
</style>