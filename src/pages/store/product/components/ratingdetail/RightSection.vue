<template lang="">
  <div class="right-section">
    <div class="section-region">
      <CustomReview
        v-for="(item, index) in reviews"
        :Rating="this.reviews[index].Rating"
        :Creaton="this.reviews[index].Creaton"
        :ContentShort="this.reviews[index].ContentShort"
        :ContentLong="this.reviews[index].ContentLong"
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
