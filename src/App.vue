<template>
  <div id="app" class="app_wrapper">
    <v-header/>
    <router-view/>
    <v-bottom-nav/>
  </div>
</template>

<script>
import VHeader from "./components/layouts/v_header"
import VBottomNav from "./components/layouts/v_bottom_nav"


export default {
  components:{
    VHeader,
    VBottomNav
  },

  
}
</script>

<style lang="scss">
body{
  background-color: #000;
}
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app_wrapper{
  background-color: #fff;
  max-width: 500px;
  margin: 2rem auto;
}
</style>
