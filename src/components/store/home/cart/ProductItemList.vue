<template lang="">
    <ProductItem
        class="mb-1"
        v-for="item in getCartItems"
        :name="item.name"
        :SKU="item.SKU"
        :imagePath="item.imagePath"
        :routePath="item.routePath"
        :retailPrice="item.retailPrice"
        :quantity="item.quantity"
    ></ProductItem>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapState, mapActions } from "pinia";
import { useCheckoutStorePinia } from "../../../../stores/store/checkout";
export default {
  data() {
    return {
    };
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapState(useCartStorePinia, {
      getCartItems: "getCartItems",
    }),
    total() {
      let totaltemp = 0;
      this.getCartItems.forEach((element) => {
        totaltemp += element.retailPrice*element.quantity
      });
      return totaltemp;
    },
  },
  methods: {
    ...mapActions(useCartStorePinia, {
      increaseTotal: "increaseTotal",
    }),
    ...mapActions(useCheckoutStorePinia, {
      
    })
  },
};
</script>