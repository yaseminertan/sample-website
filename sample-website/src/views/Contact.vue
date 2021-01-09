<template>
<div class="contact-container">
   <h1>{{ $t("contact") }}</h1> 
   <p>{{ $t("title") }}</p>
   <p>{{ $t("name") }}<label>{{loginName}}</label></p>
   <p>{{ $t("mail") }}<label>{{loginMail}}</label></p>
   <div style="display:flex">{{ $t("phone") }}
   <input placeholder="+905554443322"></div>
   <p></p>
   {{ $t("country") }}
   <select>
       <option id='TR'>{{ $t("tr") }}</option>
       <option id='US'>{{ $t("us") }}</option>
       <option id='GB'>{{ $t("gb") }}</option>
       <option id='DE'>{{ $t("de") }}</option>
       <option id='SE'>{{ $t("se") }}</option>
       <option id='KE'>{{ $t("ke") }}</option>
       <option id='BR'>{{ $t("br") }}</option>
       <option id='ZW'>{{ $t("zw") }}</option>
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
    computed(){
 if(this.$store.state.isAuthenticated){
            this.loginName=this.$store.state.user.name;
            this.loginMail=this.$store.state.user.mail;
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