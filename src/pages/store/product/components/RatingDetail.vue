<template lang="">
  <div class="divider-horizontal"></div>
  <div id="product-review">
    <LeftSection 
    @popupmsg="() => TogglePopup('buttonTrigger')"
    :TogglePopup="this.TogglePopup"
    :buttonTrigger="this.popupTriggers.buttonTrigger">
    </LeftSection>
    <PopupReview
      v-if="popupTriggers.buttonTrigger"
      :CancelPopup="() => TogglePopup('buttonTrigger')">
    </PopupReview>
  </div>
</template>

<script>
import PopupReview from "@/pages/store/product/components/PopupReview.vue";
import LeftSection from "@/pages/store/product/components/ratingdetail/LeftSection.vue";
import { ref } from "vue";

export default {
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
  },
};
</script>

<style lang="scss" scoped>
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
