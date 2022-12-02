<template lang="">
    <DesktopImageProductVue :illustProducts="this.illustProducts" class="desktop"></DesktopImageProductVue>
    <MobileImageProductVue :illustProducts="this.illustProducts" class="mobile"></MobileImageProductVue>
</template>
<script>
import MobileImageProductVue from './imageproduct/MobileImageProduct.vue';
import DesktopImageProductVue from './imageproduct/DesktopImageProduct.vue';
export default {
  props: ["illustProducts"],
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
  .mobile {
    display: none;
  }
}
@include tablet {
  .mobile {
    display: none;
  }
}
@include desktop {
  .mobile {
    display: none;
  }
}
</style>
