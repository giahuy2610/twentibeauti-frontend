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
          :value="item.label"
          v-model="transport"
        />
        <label for="vc1">{{item.label}}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
  data() {
    return {
        transport:null,
      array: [
        { label: "Giao hàng tiêu chuẩn (3 - 6 ngày) (Giao giờ hành chính)", id: "id1" },
        { label: "Giao hàng trong 24h", id: "id2" },
        { label: "[NOW] Giao hàng nhanh trong 24h ", id: "id3" },
      ],
    };
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
