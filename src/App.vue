<template>
  <!-- <OverlayAds
    class="overlay-ads"
    v-if="$route.path.slice(1, 6) != 'admin'"
  ></OverlayAds> -->
  <router-view></router-view>
  <vue-progress-bar></vue-progress-bar>
</template>

<script>
import OverlayAds from "./components/store/overlayAds/OverlayAds.vue";

export default {
  components: {
    OverlayAds,
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
#app {
  font-family: "Nunito", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}
router-link {
  text-decoration: none !important;
  color: inherit;
}
::-moz-selection {
  /* Code for Firefox */
  color: white;
  background: var(--primary-color);
}

::selection {
  color: white;
  background: var(--primary-color);
}
</style>
