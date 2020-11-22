<template>
  <div>
   <VContactUser v-for="(item, index) in contacts" :key="index" :contactData="item"/>
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
};
</script>
