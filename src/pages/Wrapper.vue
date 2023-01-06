<template lang="">
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapActions, mapWritableState } from "pinia";
export default {
  mounted() {
    if (this.user != null) this.getCartItem();
  },
  watch: {
    $route(to, from) {
      if (this.user != null) this.getCartItem();
    },
  },
  methods: {
    ...mapActions(useCartStorePinia, {
      getCartItem: "getCartItem",
    }),
  },
  computed: {
    ...mapWritableState(useCartStorePinia, {
      user: "user",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 60px;

  .content {
    width: 100%;
    max-width: 1300px;
  }

  @include mobile {
    padding: 1rem;
  }
  @include mini-tablet {
    padding: 1.5rem;
  }
  @include tablet {
    padding: 2rem;
  }
}
</style>
