<template lang="">
  <div class="price-row">
    <h2 class="m-1 text-primary">
      {{ Intl.NumberFormat().format(retailPrice) }}đ
    </h2>
    <p
      v-if="retailPrice !== listPrice"
      style="text-decoration: line-through; margin: 0 20px 0 10px"
    >
      {{ Intl.NumberFormat().format(listPrice) }}đ
    </p>
    <div v-if="retailPrice !== listPrice" class="discount-tag">
      {{ -calcDiscount }}%
    </div>
  </div>
</template>
<script>
export default {
  props: ["listPrice", "retailPrice", "discountPercent"],
  computed: {
    calcDiscount() {
      return parseInt((1 - this.retailPrice / this.listPrice) * 100);
    },
  },
};
</script>
<style lang="scss" scoped>
.price-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.discount-tag {
  position: relative;
  width: fit-content;
  padding: 2px;
  border-radius: 2px;
  background-color: #94c83d;
  box-sizing: border-box;
  font-weight: bold;
  color: #fff;

  &::before {
    content: "";
    float: left;
    position: absolute;
    top: 0px;
    left: -9px;
    width: 0;
    height: 0;
    border-color: transparent #94c83d transparent transparent;
    border-style: solid;
    border-width: 10px 10px 10px 0;
  }
  &::after {
    content: "";
    position: absolute;
    top: 45%;
    left: -3px;
    float: left;
    width: 4px;
    height: 4px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    background: #fff;
  }
}
</style>
