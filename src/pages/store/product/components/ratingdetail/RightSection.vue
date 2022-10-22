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
  data() {
    return {
      reviews: [
        {
          numstar: 5,
          date: "22/10/2022",
          short: "Sản phẩm tuyệt",
          long: "Peel da rất tốt",
        },
        {
          numstar: 5,
          date: "5/5/2022",
          short: "Chưa sài chưa biết",
          long: "Ship hơi lâu",
        },
        {
          numstar: 4,
          date: "7/6/2022",
          short: "Sản phẩm gây châm chít",
          long: "Sản phẩm lột lớp sừng trên bề mặt da",
        },
      ],
    };
  },

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
