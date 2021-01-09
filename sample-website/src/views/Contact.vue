<template>
<div class="contact-container">
   <h1>{{ $t("contact") }}</h1> 
   <p>{{ $t("title") }}</p>
   <p>{{ $t("name") }}<label>{{$store.state.user.name}}</label></p>
   <p>{{ $t("mail") }}<label>{{$store.state.user.mail}}</label></p>
   <div style="display:flex">{{ $t("phone") }}
   <input placeholder="+905554443322"></div>
   <p></p>
   
   <!-- <select>
       <option id='TR'>{{ $t("tr") }}</option>
       <option id='US'>{{ $t("us") }}</option>
       <option id='GB'>{{ $t("gb") }}</option>
       <option id='DE'>{{ $t("de") }}</option>
       <option id='SE'>{{ $t("se") }}</option>
       <option id='KE'>{{ $t("ke") }}</option>
       <option id='BR'>{{ $t("br") }}</option>
       <option id='ZW'>{{ $t("zw") }}</option>
   </select> -->
   <div style="display:flex">
       <span style="margin-right:10px">{{ $t("country") }}</span>
        <multiselect v-model="value" :options="options" :custom-label="nameWithLang" placeholder="Select one" label="name" track-by="name"></multiselect>
        <pre class="language-json"><code>{{ value  }}</code></pre>
    </div>
   <p class="textarea">{{ $t("text") }} <textarea rows="4" maxlength="250"></textarea></p>
   <button @click='send()'>{{ $t("send") }}</button>
      
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    name:'Contact',
     data: () => {
    return {
      loginName:'',
      loginMail:'',
      value:'',
      options:[
        { name: 'Turkey', id:'TR' },
        { name: 'Germany',  id:'DE'  },
        { name: 'Sweden',  id:'SE' },
        { name: 'Kenya',  id:'KE'  },
        { name: 'Brazil', id:'BR'  }
      ]
    }},
    components:{
        Multiselect
    },
   methods:{
        nameWithLang ({ name }) {
            return `${name}`
        },
        send(){

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
    .textarea{
        display: flex;
        align-items: flex-start;
    }
    textarea{
        resize: none;
        margin-left: 10px;
        
    }
    
</style>