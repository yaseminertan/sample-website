<template>
  <div class="container">
    <Header class="header"/>
    <div class="center-div">
      <Menu class="menu"/>
      <div id="app">
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
  flex:2;
  background-color: white;
  width: 70%;
}
.menu{
  width: 30%;
}
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;

}
.center-div{
  display: inline-flex;
  background-color: rgb(94, 92, 92);
  height: 60%;
}
 .modal {
    display: block;
    position: absolute;
    width: 200px;
    margin: 20px;
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
</style>
