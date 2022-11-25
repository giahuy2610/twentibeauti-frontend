<template lang="">
    <ProductItem
        class="mb-1"
        v-for="item in getCartItems"
        :name="item.NameProduct"
        :SKU="item.IDProduct"
        :imagePath="item.imagePath"
        routePath="/product/1"
        :retailPrice="item.retailPrice"
        :quantity="item.Quantity"
    ></ProductItem>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapState, mapActions } from "pinia";

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
  },
};
</script>