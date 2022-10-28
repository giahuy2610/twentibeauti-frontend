<template lang="">
    <div class="add-cart-align">
        <div class="item flex-row">
            <QuantityCard></QuantityCard>
            <CheckCard></CheckCard>
        </div>
    </div>
</template>
<script>
import QuantityCard from "../productinfor/addcart/QuantityCard.vue";
import CheckCard from '../productinfor/addcart/CheckCard.vue'
export default {
  components: {
    QuantityCard,
    CheckCard,
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
.add-cart-align {
  .item {
    gap: 1rem;
  }
  margin-top: 1rem;
}
</style>