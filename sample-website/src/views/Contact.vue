<template>
<div class="contact-container">
   <h1>Contact Us</h1> 
   <p>{{ $t("message.title") }}</p>
   <p>Name<label>{{loginName}}</label></p>
   <p>Email<label>{{loginMail}}</label></p>
   <div style="display:flex">Phone Number 
   <input placeholder="+905554443322"></div>
   <p></p>
   Country
   <select>
       <option id='TR'>Turkey</option>
       <option id='US'>United States of America</option>
       <option id='GB'>United Kingdom</option>
       <option id='DE'>Germany</option>
       <option id='SE'>Sweden</option>
       <option id='KE'>Kenya</option>
       <option id='BR'>Brazil</option>
       <option id='ZW'>Zimbabwe</option>
   </select>
</div>
</template>

<script>
export default {
    name:'Contact',
     data: () => {
    return {
      loginName:'',
      loginMail:'',
    }},
    created(){
        if(this.$store.state.isAuthenticated){
            this.loginName=this.$store.state.user.name;
            this.loginMail=this.$store.state.user.mail;
        }
    }
}
</script>

<style scoped>
label{
    margin-left: 10px;
}
    .contact-container{
        width: 90%;
        height: 90%;
        padding: 10px;
        margin: 10px;
    }
    select{
        background: none;
        margin-left: 10px;
     
    }
    input{
        border: 1px solid gray;
        margin-left: 10px;
    }
</style>