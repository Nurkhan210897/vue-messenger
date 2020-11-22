<template>
  <div class="contact_list_wrapper">  
   <VContactUser 
   v-for="(item, index) in contacts" 
   :key="index" 
   :contactsData="item"
   @toContactInfo="toContactInfo(item)"
   />
  </div>
</template>

<script>
import VContactUser from './v_contact_user';
import { mapActions, mapState } from "vuex";
export default {
 components:{
  VContactUser
 },
  computed: {
    ...mapActions(["FETCH_API_CONTACTS"]),
    ...mapState(['contacts'])
  },
  mounted() {
    this.FETCH_API_CONTACTS;
    console.log(this.contacts)
  },
  methods:{
   toContactInfo(contact){
    this.$router.push({
     name: 'contact',
     query: {'id': contact.id}
    })
   }
  }
};
</script>

<style lang="scss">
.contact_list_wrapper{
 padding: 20px 0;
}
</style>
