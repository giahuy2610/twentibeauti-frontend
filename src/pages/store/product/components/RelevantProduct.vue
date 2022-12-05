<template lang="">
  <div class="flex-align">
    <LeftSection></LeftSection>
    <RightSection :products="products"></RightSection>
  </div>
</template>
<script>
import LeftSection from "@/pages/store/product/components/relevantproduct/LeftSection.vue";
import RightSection from "@/pages/store/product/components/relevantproduct/RightSection.vue";
export default {
  components: {
    LeftSection,
    RightSection,
  },
  props: ["products"],
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.divider-horizontal {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin-bottom: 3rem;
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  font-size: 14px;
  line-height: 1.5715;
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
</style>
