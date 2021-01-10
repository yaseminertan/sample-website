<template>
  <div class="container">
    <Header class="header"/>
    <div class="center-div">
      <Menu id='menu' class="menu"/>
      <div id="app" @click='hideMenu()'>
        <router-view/>
      </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/base/Header'
import Footer from './components/base/Footer'
import Menu from './components/base/Menu'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Menu
  },
  methods:{
     hideMenu(){
      document.getElementById('menu').classList.remove('menu-show');
    }
  }
}
</script>

<style>
body{
    margin: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  width: 80%;
  overflow-y: hidden;
}
.menu{
  width: 20%;
  background-color: rgb(73, 145, 77);
}
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-left: 10%;
  margin-right: 10%;
}
.center-div{
  
  display: inline-flex;
  
}
 .modal {
    display: block;
    position: absolute;
    width: 200px;
    margin-top: 10%;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease;
    color:rgb(80, 79, 79);
    font-size: 16px;
    z-index: 999;
    transition: opacity 0.3s ease;
  }
  button, select{
    cursor: pointer;
  }
 .multiselect__input{
   border: none;
 }
 .multiselect__input:focus{
   outline: 1px solid gray;
 }
 .multiselect__element{
   list-style: none;
 }
 .multiselect__single{
   border:1px solid gray;
   font-size: small;
   padding: 3px 20px 3px 20px;
 }
 .bars{
    visibility: hidden;
  }
  @media screen and (min-width: 220px) and (max-width: 767px) {
    .bars{
      visibility: visible;
    }
    .menu{
      transform: translateX(-200%);
      margin-top: -20px;
      position: absolute;
      height: 50%;
      width: 30%;
    }
    .center-div{
     display: flex;
    
    }
    .menu-show{
      transform: translateX(0px);
    }
  }
</style>
