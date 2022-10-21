<template lang="">
  <div class="divider-horizontal"></div>
  <div id="product-review">
    <div class="left-section">
      <h2 class="header">Đánh giá</h2>
      <div class="flex-row num-review">
        <div><strong>0</strong>&nbsp;Đánh giá</div>
        <Button class="p-button-text" @click="() => TogglePopup('buttonTrigger')">
          <span class="review">Viết đánh giá</span>
        </Button>
      </div>
      <div class="star-rate">
        <i v-for="index in 5" class="pi pi-star-fill star"></i>
      </div>
      <div class="rate flex-row">
        <div class="score">5</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
      </div>
      <div class="rate flex-row">
        <div class="score">4</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
      </div>
      <div class="rate flex-row">
        <div class="score">3</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
      </div>
      <div class="rate flex-row">
        <div class="score">2</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
      </div>
      <div class="rate flex-row">
        <div class="score">1</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
      </div>
    </div>
    <PopupReview 
      v-if="popupTriggers.buttonTrigger" 
      :CancelPopup="() => TogglePopup('buttonTrigger')">
      </PopupReview>
  </div>
</template>
<script>
import PopupReview from "@/pages/store/product/components/PopupReview.vue";
import { ref } from 'vue';


export default {
  setup() {
    const popupTriggers = ref({buttonTrigger: false});
    var TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
      console.log(trigger)
		}
    return {
      popupTriggers,
      TogglePopup,
      PopupReview,
    }
  },
  components: {
    PopupReview,
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

.left-section {
  width: 50% !important;

  .num-review {
    position: relative;

    Button {
      position: absolute;
      right: 0;
    }
  }

  .star {
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    margin-top: 1rem;
    margin-right: 5px;
    font-size: 2rem;
  }

  .rate {
    margin-bottom: 1rem;

    .progress-line {
      position: relative;
      margin-right: 10px;
      margin-left: 10px;
      width: 100%;
      height: 5px;
      overflow: hidden;
      vertical-align: middle;
      background-color: #f5f5f5;
      border-radius: 100px;
    }
  }
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
