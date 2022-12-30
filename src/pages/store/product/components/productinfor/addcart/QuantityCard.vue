<template lang="">
  <div class="quantity flex-row">
    <button type="button" class="minus">
      <span class="minus-outline">
        <i
          class="pi pi-minus"
          @click="numberOfProduct > 1 ? numberOfProduct-- : 1"
        ></i>
      </span>
    </button>
    <div class="quantity-text">{{ numberOfProduct }}</div>
    <button type="button" class="plus">
      <span class="plus-outline">
        <i
          class="pi pi-plus"
          @click="numberOfProduct < 50 ? numberOfProduct++ : 1"
        ></i>
      </span>
    </button>
  </div>
</template>
<script>
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapActions, mapWritableState } from "pinia";
export default {
  methods: {
    ...mapActions(useCartStorePinia, {
      increaseQuantity: "increaseQuantity",
    }),
  },
  computed: {
    ...mapWritableState(useCartStorePinia, {
      numberOfProduct: "numberOfProduct",
    }),
  },
  mounted() {
    this.numberOfProduct = 1;
  },
};
</script>
<style lang="scss" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.quantity {
  .minus {
    cursor: pointer;
    background: transparent;
    box-shadow: none;
    border-radius: 38px 0px 0px 38px;
    border-right: hidden;
    border: 2px solid rgb(239, 239, 239);
    width: 3rem;
    height: 3.1rem;
  }
  .quantity-text {
    border-top: 2px solid rgb(239, 239, 239);
    border-bottom: 2px solid rgb(239, 239, 239);
    width: 3rem;
    height: 3.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center !important;
  }
  .plus {
    cursor: pointer;
    background: transparent;
    box-shadow: none;
    border-radius: 0px 38px 38px 0px;
    border-left: hidden;
    border: 2px solid rgb(239, 239, 239);
    width: 3rem;
    height: 3.1rem;
  }
}
</style>
