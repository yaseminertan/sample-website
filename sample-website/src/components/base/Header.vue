<template>
    <div>
      <menu>
        <ul id='sliderMenu'>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><button @click='modal=true'></button></li>
            <li></li>
        </ul>
      </menu>
      <div>
        <p>{{loginName}}</p>
        <p>{{loginMail}}</p>
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
  menu{
      padding: 0;
      margin:10px;
  }
  #sliderMenu{
      padding: 0;
      display: flex;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
  }
  #sliderMenu::-webkit-scrollbar {
      display: none;
  }
  #sliderMenu> li{
      background-color: rgb(209, 41, 97);
      padding: 8px 12px 8px 12px;
      border-radius: 20px;
      margin: 2px;
      list-style-type: none;
  }
  #sliderMenu>li> a{
      text-decoration: none;
      color:white
  }
 
</style>