<template lang="">
  <div class="divider-horizontal"></div>
  <div class="flex-align" id="product-review">
    <LeftSection
      :reviews="this.reviews"
      @popupmsg="() => TogglePopup('buttonTrigger')"
      :TogglePopup="this.TogglePopup"
      :buttonTrigger="this.popupTriggers.buttonTrigger"
    >
    </LeftSection>
    <RightSection :reviews="this.reviews"></RightSection>
  </div>
  <PopupReview
    v-if="popupTriggers.buttonTrigger"
    :CancelPopup="() => TogglePopup('buttonTrigger')"
  >
  </PopupReview>
</template>

<script>
import PopupReview from "@/pages/store/product/components/PopupReview.vue";
import LeftSection from "@/pages/store/product/components/ratingdetail/LeftSection.vue";
import RightSection from "@/pages/store/product/components/ratingdetail/RightSection.vue";
import { ref } from "vue";

export default {
  props: ["reviews"],
  setup() {
    const popupTriggers = ref({ buttonTrigger: false });
    var TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
      console.log(trigger);
    };
    return {
      popupTriggers,
      TogglePopup,
      PopupReview,
    };
  },
  components: {
    PopupReview,
    LeftSection,
    RightSection,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";
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
.divider-horizontal {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin: 3rem 0rem;
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  font-size: 14px;
  line-height: 1.5715;
}
</style>
