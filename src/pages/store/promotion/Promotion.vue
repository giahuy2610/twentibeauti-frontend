<template lang="">
  <Loading v-if="loading" />
  <Wrapper v-else>
    <div class="content">
      <div
        class="item"
        v-for="(item, index) in couponList"
        v-if="couponList.length > 0"
      >
        <CouponCard
          :couponValue="item.CodeCoupon"
          :couponDescription="item.Description"
          :startOn="item.StartOn"
          :endOn="item.EndOn"
        ></CouponCard>
      </div>
      <div class="" v-else>Không có mã khuyến mãi nào khả dụng</div>
    </div>
  </Wrapper>
</template>
<script>
import CouponCard from "./CouponCard.vue";
import Wrapper from "../../Wrapper.vue";
import Loading from "@/components/atoms/loadingScreen/Loading.vue";


export default {
  components: {
    CouponCard,
    Wrapper,
    Loading
  },
  data() {
    return {
      couponList: [],
      loading: true
    };
  },
  async mounted() {
    await this.axios
      .get("/coupon/available")
      .then((response) => {
        console.log(response.data);
        this.couponList = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    this.loading = false;
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
