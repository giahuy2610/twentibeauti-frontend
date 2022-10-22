<template lang="">
  <div class="right-section">
    <div class="section-region">
      <CustomReview
        v-for="(item, index) in reviews"
        :numstar="this.reviews[index].numstar"
        :date="this.reviews[index].date"
        :short="this.reviews[index].short"
        :long="this.reviews[index].long"
      ></CustomReview>
    </div>
  </div>
</template>

<script>
import CustomReview from "../ratingdetail/CustomReview.vue";
export default {
  props: ["reviews"],

  components: {
    CustomReview,
  },
};
</script>

<style lang="scss" scoped>
.section-region {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
