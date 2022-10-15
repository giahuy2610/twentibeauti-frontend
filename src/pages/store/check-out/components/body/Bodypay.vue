<template lang="">
  <div class="body">
    <LeftVue></LeftVue>
    <RightVue></RightVue>
  </div>
</template>
<script>
import LeftVue from "./Left.vue";
import RightVue from "./Right.vue";
export default {
  components: {
    LeftVue,
    RightVue,
  },
};
</script>
<style lang="scss" scoped>

@import "@/scss/mixin";
.body {
  display: flex;
  flex-direction: row;
  height: 1000%;
  margin: 5%;
  margin-left: 0px;
  @include mobile {
    max-width: 100%;
    //background-color: green;
    display: flex;
    flex-direction: column;
  }
  @include mini-tablet {
    max-width: 100%;
    //background-color: green;
    display: flex;
    flex-direction: column;
  }
  @include tablet {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
