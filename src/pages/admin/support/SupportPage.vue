<template lang="">
  <div class="container">
    <iframe
      src="https://livesupport.fpt.ai"
      width="100%"
      name="myFrame"
      style="height: 100vh"
    ></iframe>
  </div>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
export default {
  components: {
    AdminBlankPage,
  },
};
</script>
<style scoped>
.container {
    height: 100vh;
    overflow: hidden;
}
</style>
