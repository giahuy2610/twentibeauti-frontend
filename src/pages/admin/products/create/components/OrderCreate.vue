<template lang="">
  <div class="addinfo">
    <Card>
      <template #title> Khởi tạo kho hàng</template>
      <template #subtitle>
        Ghi nhận số lượng Tồn kho ban đầu và Giá vốn của sản phẩm
      </template>
      <template #content>
        <div class="order">
          <div class="orderinf">
            <p>Tồn kho ban đầu</p>
            <span class="p-fluid">
              <InputNumber
                id="inventory"
                mode="decimal"
                :useGrouping="false"
                v-model="productInfo.Stock"
                placeholder="0"
                aria-describedby="inventory-help"
                :class="{
                  'p-invalid':
                    productInfo.Stock == null || productInfo.Stock == '',
                }"
              />
              <small
                id="inventory-help"
                class="p-error"
                v-if="productInfo.Stock == null || productInfo.Stock == ''"
              >
                Tồn kho ban đầu không được để trống</small
              >
            </span>
          </div>
          <div class="orderinf">
            <p>Giá vốn</p>
            <span class="p-fluid">
              <InputText
                id="costprice"
                type="text"
                v-model="costprice"
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
.addinfo {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .order {
    display: flex;
    flex-direction: row;

    .orderinf {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-right: 10px;
    }
  }
}
</style>
