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
          v-model="selectedTransport"
        />
        <label :for="item.id">{{ item.label }}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTransport: null,
      array: [
        {
          label: "Giao hàng tiêu chuẩn (3 - 6 ngày) (Giao giờ hành chính)",
          id: "idTransport1",
        },
        { label: "Giao hàng trong 24h", id: "idTransport2" },
        { label: "[NOW] Giao hàng nhanh trong 24h ", id: "idTransport3" },
      ],
    };
  },
  mounted() {
    this.selectedTransport = this.array[0].id;
  },
};
</script>
<style lang="scss" scoped>
.transport {
  border: 1px solid #aaa;
  border-radius: 10px;
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  margin-top: 10pt;
  padding: 20px;
  width: 100%;
}
</style>
