<template>
    <div>
      <menu>
        <ul id='sliderMenu'>
            <li><router-link to="/contact">Contact</router-link></li>
            <li></li>
            <li></li>
        </ul>
      </menu>
    </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
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