

<template>


<div>
      <modal v-if="!login" @close="login = true" class='modal'>
            <button @click='login()'>Save</button>
      </modal>
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