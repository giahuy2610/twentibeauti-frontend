<template lang="">
    <PopUp>
      <HeaderPopup :ClosePopup="() => CancelPopup()"></HeaderPopup>
      <BodyPopup>
        <ImagePopup></ImagePopup>
        <RatePopup></RatePopup>
        <div class="divider-horizontal"></div>
        <ReviewPopup></ReviewPopup>
      </BodyPopup>
    </PopUp>
</template>
<script>
import PopUp from "@/pages/store/product/components/popup/PopUp.vue";
import HeaderPopup from "@/pages/store/product/components/popup/HeaderPopup.vue";
import ImagePopup from "@/pages/store/product/components/popup/ImagePopup.vue";
import BodyPopup from "@/pages/store/product/components/popup/BodyPopup.vue";
import RatePopup from "@/pages/store/product/components/popup/RatePopup.vue";
import ReviewPopup from "@/pages/store/product/components/popup/ReviewPopup.vue";

export default {
  components: {
    PopUp,
    HeaderPopup,
    ImagePopup,
    BodyPopup,
    RatePopup,
    ReviewPopup,
  },
  data() {
    return {
      numStarActive: 0,
    };
  },
  props: ["CancelPopup", "buttonTrigger"],
};
</script>
<style lang="scss" scoped>
.divider-horizontal {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin: 1rem 0rem;
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  font-size: 14px;
  line-height: 1.5715;
}
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}



  

</style>