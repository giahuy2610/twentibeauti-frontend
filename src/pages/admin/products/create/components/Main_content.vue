<template lang="">
  <div class="main_content">
    <div class="left">
      <GeneralInfoVue></GeneralInfoVue>
      <ProductPrice></ProductPrice>
      <div class="photos">
        <Card style="width: 70%">
            <template #title> Ảnh sản phẩm </template>
            <template #content>
              <div class="">
                <AddFile></AddFile>
              </div>
            </template>
          </Card>
      </div>
      <OrderCreate></OrderCreate>
      <AddInfoVue></AddInfoVue>
    </div>
  </div>
</template>
<script>
import GeneralInfoVue from "./GeneralInfo.vue";
import ProductPrice from "./ProductPrice.vue";
import AddFile from "../../components/AddFile.vue";
import OrderCreate from "./OrderCreate.vue";
import AddInfoVue from "./AddInfo.vue";
export default {
  components: {
    GeneralInfoVue,
    ProductPrice,
    AddFile,
    OrderCreate,
    AddInfoVue,
  },
};
</script>
<style lang="scss" scoped>
.main_content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  .left {
    width: 100%;
    .photos{
        margin-top: 20px;
    }

    }
}
</style>
