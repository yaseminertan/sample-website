import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    isAuthenticated:false
  },
  mutations: {
    setUser(state,data){
      state.user=data
      state.isAuthenticated=true
    },
  },
 
})