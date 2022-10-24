<template lang="">
  <div class="bottom-navigation">
    <div class="region">
      <div class="item bottom_animation">
        <ProductBottom
          :productName="this.productName"
          :listPrice="this.listPrice"
          :retailPrice="this.retailPrice"
        ></ProductBottom>
        <div class="button">
          <CheckCard></CheckCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBottom from "@/pages/store/product/components/bottomnavigation/ProductBottom.vue";
import CheckCard from "@/pages/store/product/components/productinfor/addcart/CheckCard.vue";
export default {
  components: {
    ProductBottom,
    CheckCard,
  },
  props: ["productName", "listPrice", "retailPrice"],
};
</script>

<style lang="scss" scoped>
.bottom-navigation {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;

  .region {
    -webkit-box-pack: justify;
    justify-content: space-between;
    border: 1px solid rgb(239, 239, 239);
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 14px;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    padding: 10px;
    margin-bottom: 24px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    position: relative;
    width: 90%;

    .item {
      gap: 22px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
    }

    .button {
      gap: 15px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
  }
}
.bottom_animation {
  max-width: 100%;
  display: block;
  animation: 10s slidein;
  @keyframes slidein {
    from {

      height: 100%;
    }
    100% {

      height: 80%;
    }
  }
}
</style>
