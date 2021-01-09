<template>
    <div>
        <nav>
            <ul id='sliderMenu'>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/contact">Contact Us</router-link></li>
            </ul>
        </nav>
    </div>
</template>
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
      color:white
  }
 
</style>