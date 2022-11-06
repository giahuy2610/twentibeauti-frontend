<template>
  <Card>
    <template #title> Sản phẩm</template>
    <template #content>
      <div>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            type="text"
            v-model="value3"
            placeholder="Thêm mới sản phẩm"
          />
        </span>
      </div>

      <!-- <div>
        <ProductTable />
      </div> -->
    </template>
  </Card>
</template>

<script>
import ProductTable from "../../products/components/ProductTable.vue"
export default {
  component:{
    ProductTable
  }
};
</script>

<style></style>
