<template>
    <div>
        <p class="path">{{path}}</p>
        <nav>
            <ul id='sliderMenu' @click="changePath">
                <li class="fa fa-home"><router-link to="/">{{ $t("home") }}</router-link></li>
                <li class="fa fa-comment" ><router-link to="/contact">{{ $t("contact") }}</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
            path:''
        }
    },
   methods:{
       changePath(){
           const newPath=this.$route.path.substring(1)
            this.path=(newPath=="") ? "Sample" : "Sample / "+newPath
       }
   },
   created(){
       this.changePath()
   }
}
</script>
<style scoped>
  nav{
    padding: 0; 
    padding-left: 20px;
  }
  #sliderMenu{
    padding: 0;
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  #sliderMenu::-webkit-scrollbar {
    display: none;
  }
  #sliderMenu> li{
    padding: 4px 6px 4px 6px;
    border-radius: 10px;
    margin: 2px;
    list-style-type: none;
  }
  #sliderMenu>li> a{
    text-decoration: none;
    color:white;
    margin-left: 5px;
  }
  .path{
      margin-left: 20px;
  }
  
</style>