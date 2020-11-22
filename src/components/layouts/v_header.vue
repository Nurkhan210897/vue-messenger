<template>
 <div class="header">
   <router-link to="/"><i class="fas fa-chevron-left"></i> Back</router-link>
  <div>
   <span class="name_user">Tomas</span></div>
 </div>
</template>


<style lang="scss">
 .header{
  background-color: aliceblue;
  padding: 15px;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  a{
   position: absolute;
   left: 15px;
   color: #0099bc;
   text-decoration: none;
   font-size: 16px;
  }
 }
</style>