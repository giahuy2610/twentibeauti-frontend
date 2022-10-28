<template lang="">
    <DesktopImageProductVue class="desktop"></DesktopImageProductVue>
    <MobileImageProductVue class="mobile"></MobileImageProductVue>
</template>
<script>
import MobileImageProductVue from './imageproduct/MobileImageProduct.vue';
import DesktopImageProductVue from './imageproduct/DesktopImageProduct.vue';
export default {
  components: {
    MobileImageProductVue,
    DesktopImageProductVue,
  },
};
</script>
<style lang="scss" scoped>

@import url("@/assets/icomoon/style.css");
@import "@/scss/mixin";


@include mobile {
  .desktop {
    display: none;
  }
}
@include mini-tablet {
  
}
@include desktop {
  .mobile {
    display: none;
  }
}
</style>
