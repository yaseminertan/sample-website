<template>
<div class="contact-container">
   <h1>{{ $t("contact") }}</h1> 
   <p>{{ $t("title") }}<input v-model="title"></p>
   <p>{{ $t("name") }}
       <label v-if="isAuth">{{$store.state.user.name}}</label>
        <input id='name' v-model='name' v-if="!isAuth"></p>
   <p>{{ $t("mail") }}
       <label v-if="isAuth">{{$store.state.user.mail}}</label>
        <input id='mail' v-model='mail' v-if="!isAuth">
        <label style="color:red" v-if="!validMail">{{ $t("mailError") }}</label>
    </p>
   <div style="display:flex">{{ $t("phone") }}
   <input v-model='phone' placeholder="+905554443322"></div>
   <label style="color:red" v-if="!validPhone">{{ $t("mailPhone") }}</label>
   <p></p>
   <div style="display:flex">
        <span style="margin-right:10px">{{ $t("country") }}</span>
        <multiselect class="multiselect" @select="toggleSelected" v-model="value" :options="options" :custom-label="nameWithLang" placeholder="Select one" label="name" track-by="name"></multiselect>
        <pre class="language-json"><code></code></pre>
    </div>
   <p class="textarea">{{ $t("text") }} 
       <textarea v-model='text' rows="4" maxlength="250"></textarea></p>
   <button @click='send()'>{{ $t("send") }}</button>
      
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    name:'Contact',
     data: () => {
    return {
      value:'',
      options:[],
      isAuth:false,
      validMail:true,
      validPhone:true,
      title:'',
      name:'',
      mail:'',
      phone:'',
      country:'',
      text:'',
      regMail: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      regPhone:/(([\\+]90?)|([0]?))([ ]?)((\([0-9]{3}\))|([0-9]{3}))([ ]?)([0-9]{3})(\s*[\\-]?)([0-9]{2})(\s*[\\-]?)([0-9]{2})/,
    }},
    components:{
        Multiselect
    },
   methods:{
        nameWithLang ({ name }) {
            return `${name}`
        },
        toggleSelected(value) {
            this.country=value.id
        },
        isEmailValid: function() {
            this.validMail= (this.mail == "") ? false : (this.regMail.test(this.mail)) ? true : false;
        },
        isPhoneValid: function() {
            this.validPhone= (this.phone == "") ? false : (this.regPhone.test(this.phone)) ? true : false;
        },
        send(){
            this.isEmailValid()
            this.isPhoneValid()
            if(this.validMail && this.validPhone)
            {
                const info={
                    'title':this.title,
                    'name':this.name,
                    'mail':this.mail,
                    'phone':this.phone,
                    'country':this.country,
                    'text':this.text
                }
                console.log(info)
            }
        }
   },
   created(){
      this.options=(this.$store['state'].options)
      this.isAuth=this.$store.state.isAuthenticated
      this.$store.subscribe((mutation,state) => {
        this.options=state.options;
        this.isAuth=this.$store.state.isAuthenticated;
        if(this.isAuth) 
        {
            document.getElementById('name').value='';
            document.getElementById('mail').value='';
        }
      })
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
    .textarea{
        display: flex;
        align-items: flex-start;
    }
    textarea{
        resize: none;
        margin-left: 20px;
    }
    .multiselect{
        font-size: small;
        padding: 3px 20px 3px 20px;
    }
    
</style>