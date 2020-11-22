<template>
  <div class="contact_user" @click="toContactInfo">
    <div class="d_flex">
      <span>{{ contactsData.id }}.</span>
      <span class="avatar"></span>
      <p>{{ contactsData.name }}</p>
    </div>
    
    <span :class="[className, 'status']"></span>
  </div>
</template>

<script>
export default {
  props: {
    contactsData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    className() {
      return {
        online: this.contactsData.status === "online",
        offline: this.contactsData.status === "offline",
      };
    },
  },
  methods: {
    toContactInfo() {
      this.$emit("toContactInfo");
    },
  },
};
</script>

<style lang="scss">
.d_flex {
  display: flex;
  align-items: center;
  p{
    margin-left: 40px;
    font-weight: bold;
    color: #253b84
  }
}
.avatar {
  width: 30px;
  height: 30px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: #ccc;
}
.contact_user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;

  .status {
    width: 10px;
    height: 10px;
    display: block;
    border-radius: 50%;
  }
  .online {
    background-color: #1ac400;
  }
  .offline {
    background-color: red;
  }
}
</style>
