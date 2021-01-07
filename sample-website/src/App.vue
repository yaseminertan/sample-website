<template>
  <div>
    <Header/>
    <div id="app">
    
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/base/Header'
import Footer from './components/base/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
