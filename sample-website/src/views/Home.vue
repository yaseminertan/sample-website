<template>
  <div>
      <h1> {{ $t("homeTitle") }}</h1>
       <h4> {{ $t("homeText") }}</h4>
  </div>

</template>
 

 <script>
 import {mapState,mapActions} from 'vuex'

 export default {
  name: 'Home',
 data: () => {
    return {
      login:false,
    }},
  computed:{
    ...mapState(['user'])
  },
  methods:{
    ...mapActions(['login'])}
 }
 </script>
 <style scoped>
 h1{
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 }
  h4{
    text-align:justify;
    font-weight: normal;
  }
 </style>