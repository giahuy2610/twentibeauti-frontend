<template lang="">
  <div class="flex-align">
    <div class="left-col">
      <div class>
        <h2>Giới thiệu</h2>
      </div>
    </div>
    <RightAbout :descriptions="this.descriptions"></RightAbout>
  </div>
</template>
<script>
import RightAbout from "../components/aboutproduct/RightAbout.vue";
export default {
  props: ["descriptions"],
  components: {
    RightAbout,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.inline {
  display: inline-block;
}
.flex-align {
  @include mobile {
    display: flex;
    flex-direction: column;
  }
  @include desktop {
    display: flex;
    flex-direction: row;
  }
}

.left-col {
  h2 {
    width: 25rem;
  }
}
</style>
