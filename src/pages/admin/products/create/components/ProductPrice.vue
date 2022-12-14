<template lang="">
  <div class="productprice">
    <Card>
      <template #title> Giá sản phẩm</template>
      <template #content>
        <div class="price">
          <div class="priceinf">
            <p>Giá bán lẻ</p>
            <span class="p-fluid">
              <InputNumber
                id="listprice"
                type="text"
                v-model="productInfo.ListPrice"
                placeholder="0"
                aria-describedby="listprice-help"
                :class="{
                  'p-invalid':
                    productInfo.ListPrice == null ||
                    productInfo.ListPrice == '',
                }"
              />
              <small
                id="listprice-help"
                class="p-error"
                v-if="
                  productInfo.ListPrice == null || productInfo.ListPrice == ''
                "
              >
                Giá bán lẻ không được để trống</small
              >
            </span>
          </div>
          <div class="priceinf">
            <p>Giá nhập</p>
            <span class="p-fluid">
              <InputText
                id="entryprice"
                type="text"
                v-model="entryprice"
                placeholder="0"
              />
            </span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import { useProductStorePinia } from "@/stores/admin/product";
import { mapWritableState, mapActions } from "pinia";
export default {
  computed: {
    ...mapWritableState(useProductStorePinia, {
      productInfo: "productInfo",
    }),
  },
};
</script>
<style lang="scss" scoped>
.productprice {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .price {
    display: flex;
    flex-direction: row;

    .priceinf {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-right: 10px;
    }
  }
}
</style>
