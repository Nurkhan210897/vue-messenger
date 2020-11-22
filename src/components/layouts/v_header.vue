<template>
  <div class="header">
    <span class="header_back" @click="goBack">
      <i class="fas fa-chevron-left"></i> Back
    </span>
    <div>
      <span class="name_user">Tomas</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss">
.header {
  background-color: aliceblue;
  padding: 15px;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #ccc;
  .header_back {
    position: absolute;
    left: 15px;
    color: #0099bc;
    text-decoration: none;
    font-size: 16px;
  }
}
</style>
