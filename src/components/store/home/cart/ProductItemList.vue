<template lang="">
  <ProductItem
    class="mb-1"
    v-for="item in cartItems"
    :name="item.NameProduct"
    :SKU="item.IDProduct"
    :imagePath="
      item.Images.length > 0
        ? item.Images[0]['Path']
        : 'https://catalogue.bticino.com/app/webroot/img/img_not_found_prod_it.jpg'
    "
    :retailPrice="item.RetailPrice"
    :quantity="item.Quantity"
  ></ProductItem>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapState, mapActions } from "pinia";
import { useCheckoutStorePinia } from "../../../../stores/store/checkout";
export default {
  data() {
    return {};
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapState(useCartStorePinia, {
      cartItems: "cartItems",
    }),
    ...mapActions(useCheckoutStorePinia, {
      
    })
  },
};
</script>
