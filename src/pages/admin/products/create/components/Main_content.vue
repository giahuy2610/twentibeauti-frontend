<template lang="">
  <div class="main_content">
    <div class="left">
      <GeneralInfoVue></GeneralInfoVue>
      <ProductPrice></ProductPrice>
      <div class="photos">
        <h2>Ảnh sản phẩm</h2>
        <AddFile></AddFile>
      </div>
      <OrderCreate></OrderCreate>
    </div>
  </div>
</template>
<script>
import GeneralInfoVue from "./GeneralInfo.vue";
import ProductPrice from "./ProductPrice.vue";
import AddFile from "../../components/AddFile.vue";
import OrderCreate from "./OrderCreate.vue";
export default {
  components: {
    GeneralInfoVue,
    ProductPrice,
    AddFile,
    OrderCreate,
  },
};
</script>
<style lang="scss" scoped>
.main_content {
  display: flex;
  flex-direction: column;
  width: 100%;
  .left {
    width: 100%;
    .photos {
      width: 60%;
      border: 1px solid #aaa;
      border-radius: 10px;
      margin-top: 10px;
      padding: 20px;
    }
  }
}
</style>
