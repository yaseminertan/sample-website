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
<style scoped>
    menu{
      padding: 0;
      margin:10px;
 
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