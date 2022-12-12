<template lang="">
  <div class="transport shadow-5">
    <div class="h2">
      <b>Phương thức vận chuyển</b>
      <br />
    </div>
    <br />
    <div class="inftran" :key="index" v-for="(item, index) in array">
      <div class="field-radiobutton">
        <RadioButton
          :inputId="item.id"
          name="patransporty"
          :value="item.id"
          v-model="receiverInfo.MethodTransfer"
        />
        <label :for="item.id">{{ item.label }}</label>
      </div>
    </div>
  </div>
</template>
<script>
import { useCheckoutStorePinia } from "@/stores/store/checkout.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      selectedTransport: null,
      array: [
        {
          label: "Giao hàng tiêu chuẩn (3 - 6 ngày) (Giao giờ hành chính)",
          id: "1",
        },
        { label: "Giao hàng trong 24h", id: "2" },
        { label: "[NOW] Giao hàng nhanh trong 24h ", id: "3" },
      ],
    };
  },
  mounted() {
    this.receiverInfo.MethodTransfer = this.array[0].id;
  },
  computed: {
    ...mapWritableState(useCheckoutStorePinia, {
      receiverInfo: "receiverInfo",
    }),
  },
};
</script>
<style lang="scss" scoped>
.transport {
  border-radius: 10px;
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  margin-top: 10pt;
  padding: 20px;
  width: 100%;
}
</style>
