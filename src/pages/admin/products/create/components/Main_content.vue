<template lang="">
  <div class="main_content">
    <div class="left">
      <GeneralInfoVue></GeneralInfoVue>
      <ProductPrice></ProductPrice>
      <div class="photos">
        <Card>
          <template #title> Ảnh sản phẩm </template>
          <template #content>
            <div>
              <AddFile @geturl="getdata"></AddFile>
            </div>
          </template>
        </Card>
      </div>
      <OrderCreate></OrderCreate>
    </div>
    <div class="right">
      <AddInfoVue @geturl="hoho"></AddInfoVue>
      <FooterVue></FooterVue>
    </div>
  </div>
</template>
<script>
import GeneralInfoVue from "./GeneralInfo.vue";
import ProductPrice from "./ProductPrice.vue";
import AddFile from "@/components/admin/add-image/AddImage.vue";
import OrderCreate from "./OrderCreate.vue";
import AddInfoVue from "./AddInfo.vue";
import FooterVue from "./Footer.vue";
export default {
  components: {
    GeneralInfoVue,
    ProductPrice,
    AddFile,
    OrderCreate,
    AddInfoVue,
    FooterVue,
  },
  methods: {
    getdata(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="scss" scoped>
.main_content {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  .left {
    width: 70%;
    margin: 10px;
    .photos {
      margin-top: 20px;
    }
  }
  .right {
    width: 30%;
    margin: 10px;
  }
}
</style>
