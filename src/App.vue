<template>
  <!-- <OverlayAds class="overlay-ads"></OverlayAds> -->
  <router-view></router-view>
</template>

<script>
import OverlayAds from "./components/store/overlayAds/OverlayAds.vue"
export default {
  components: {
    OverlayAds
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}
router-link {
  text-decoration: none !important;
  color: inherit;
}
</style>
