<template>
 <div class="bottom_nav">
   <router-link to="/"><i class="fas fa-user-circle"></i></router-link>
   <router-link to="/"><i class="fas fa-comment-dots"></i></router-link>
   <router-link to="/"><i class="fas fa-cog"></i></router-link>
   <router-link to="/"><i class="fas fa-phone-alt"></i></router-link>
   <router-link to="/"><i class="fas fa-home"></i></router-link>
 </div>
</template>


<style lang="scss">
 .bottom_nav{
  background-color: aliceblue;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  a{
   color:#0099bc ;
   font-size: 32px;
   &:hover{
    color:#5096ff ;
   }
  }
 }
</style>