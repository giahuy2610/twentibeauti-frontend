<template lang="">
  <div class="container flex justify-content-center align-items-center">
    <ProgressSpinner v-show="!isLoaded" />
    <iframe
      src="https://livesupport.fpt.ai"
      width="100%"
      name="myFrame"
      style="height: 100vh"
      @load="(isLoaded = true)"
      v-show="isLoaded"
    ></iframe>
  </div>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
export default {
  components: {
    AdminBlankPage,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  overflow: hidden;
}
</style>
