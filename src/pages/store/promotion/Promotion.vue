<template lang="">
  <Wrapper>
    <div class="content">
      <div class="item" v-for="index in 16">
        <CouponCard></CouponCard>
      </div>
    </div>
  </Wrapper>
</template>
<script>
import CouponCard from "./CouponCard.vue";
import Wrapper from "../../Wrapper.vue";
export default {
  components: {
    CouponCard,
    Wrapper,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.content {
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;


  .item {
    max-width: 25%;
    padding: 0.5rem;

    @include mobile {
      max-width: 100%;
    }
    @include mini-tablet {
      max-width: 50%;
    }
    @include tablet {
      max-width: 33.33%;
    }
  }
}
</style>
