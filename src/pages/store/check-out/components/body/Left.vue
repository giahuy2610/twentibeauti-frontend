<template lang="">
  <div class="left">
    <infcusVue></infcusVue>
    <infpayVue></infpayVue>
    <inftransport></inftransport>
    <div class="leftfooter">
      <div class="infinvoice" v-for="(item, index) in array">
        <div class="contentinvoice">
          <p>{{ item.label }}</p>
        </div>

        <div class="selectbutton">
          <!-- <SelectButton
            v-model="item.value"
            :options="options"
            aria-labelledby="single"
          /> -->
          <ToggleButton
            v-model="item.value"
            onLabel="Có"
            offLabel="Không"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            class="w-full sm:w-10rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import infcusVue from "./left/Infcus.vue";
import infpayVue from "./left/Infpay.vue";
import inftransport from "./left/InfTransport.vue";
import { useCheckoutStorePinia } from "@/stores/store/checkout.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  components: {
    infcusVue,
    infpayVue,
    inftransport,
  },
  data() {
    return {
      value: "Không",
      options: ["Có", "Không"],
      array: [
        { label: "Ghi chú", value: false },
        { label: "Đây là quà tặng?", value: false },
        { label: "Thông tin xuất hóa đơn", value: false },
      ],
    };
  },
  computed: {
    ...mapWritableState(useCheckoutStorePinia, {
      receiverInfo: "receiverInfo",
    }),
  },
};
</script>
<style lang="scss" scoped>
.left {
  margin-left: 20px;
  padding-right: 10pt;
  width: 100%;
  .leftfooter {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px;
    .infinvoice {
      display: flex;
      flex-direction: row;
      //argin: 10px;
      width: 100%;
      .contentinvoice {
        width: 70%;
        font-weight: bold;
        font-size: 1rem;
      }
      .selectbutton {
        padding: 10px;
        margin-right: 20px;
        width: 100%;
        max-width: max-content;
        width: 50%;
      }
    }
  }
}
</style>
