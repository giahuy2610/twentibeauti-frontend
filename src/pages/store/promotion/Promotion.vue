<template lang="">
  <Wrapper>
    <div class="content">
      <CouponCard v-for="index in 5"></CouponCard></div
  ></Wrapper>
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
.content {
  max-width: 1300px;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
