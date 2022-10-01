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
          <SelectButton
            v-model="item.value"
            :options="options"
            aria-labelledby="single"
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
        { label: "Ghi chú", value: "Không" },
        { label: "Đây là quà tặng?", value: "Không" },
        { label: "Thông tin xuất hóa đơn", value: "Không" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.left {
  margin-left: 20px;
  padding-right: 10pt;
  width: 90%;
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
        font-size: 1.5rem;
      }
      .selectbutton {
        padding: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>
