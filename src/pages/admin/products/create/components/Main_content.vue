<template lang="">
  <div class="main_content">
    <div class="left">
      <GeneralInfoVue></GeneralInfoVue>
      <ProductPrice></ProductPrice>
      <div class="photos">
        <Card>
          <template #title> Ảnh sản phẩm </template>
          <template #content>
            <Chip
              v-for="(item, index) in productInfo.Images"
              :label="item.length > 20 ? item.substring(0, 17) + '...' : item"
              :image="item"
              class="custom-chip mb-2"
              removable
              @remove="
                productInfo.Images = productInfo.Images.filter(function (
                  value
                ) {
                  return value != item;
                })
              "
            />
            <AddFile @geturl="getdata"></AddFile>
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
import { useProductStorePinia } from "@/stores/admin/product";
import { mapWritableState, mapActions } from "pinia";
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
      this.productInfo.Images = this.productInfo.Images.concat(value);
    },
  },
  computed: {
    ...mapWritableState(useProductStorePinia, ["productInfo"]),
  },
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
