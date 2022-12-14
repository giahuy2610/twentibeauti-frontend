<template lang="">
   <Toast />
  <Toast position="bottom-center" group="bc">
    <template #message="slotProps">
      <div class="flex flex-column">
        <div class="text-center">
          <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
          <h4>{{ slotProps.message.summary }}</h4>
          <p>{{ slotProps.message.detail }}</p>
        </div>
      </div>
    </template>
  </Toast>
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div
          class="header-wrapper__left flex align-items-center cursor-pointer"
          @click="$router.push({ path: '/admin/products' })"
        >
          <i class="pi pi-angle-left"></i>
          <span>Quay lại</span>
        </div>
        <div class="header-wrapper__right">
          <Button label="Hủy" class="p-button-outlined p-button-danger" />
          <Button
            label="Xem trước"
            class="p-button-success"
            @click="$route.push({ path: '/product' })"
          />
          <!-- <Button
            label="Lưu"
            class="p-button-info"
            @click="createNewProduct()"
            v-if="$route.path == '/admin/products/create'"
          /> -->
          <Button
            label="Lưu"
            class="p-button-info"
            @click="save()"
            v-if="$route.path == '/admin/products/create'"
          />
          <Button
            label="Cập nhật"
            class="p-button-info"
            @click="updateProduct()"
            v-else
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper">
        <Main_content></Main_content>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../../AdminBlankPage.vue";
import Main_content from "./components/Main_content.vue";
import { useProductStorePinia } from "@/stores/admin/product";
import { mapWritableState, mapActions } from "pinia";
export default {
  computed: {
    ...mapWritableState(useProductStorePinia, {
      productInfo: "productInfo",
    }),
  },
  methods: {
    ...mapActions(useProductStorePinia, [
      "createNewProduct",
      "getAPIProductInfo",
      "updateProduct",
    ]),
    save: function() {
      if (
        this.productInfo.NameProduct == null || this.productInfo.NameProduct == '' ||
        this.productInfo.IDProduct == null || this.productInfo.IDProduct == '' ||
        this.productInfo.Mass == null || this.productInfo.Mass == '' ||
        this.productInfo.UnitsOfMass == null || this.productInfo.UnitsOfMass == '' ||
        this.productInfo.Units == null || this.productInfo.Units == '' ||
        this.productInfo.Stock == null || this.productInfo.Stock == '' ||
        this.productInfo.ListPrice == null || this.productInfo.ListPrice == '' ||
        this.productInfo.IDBrand == null || this.productInfo.IDBrand == '' ||
        this.productInfo.IDTag == null || this.productInfo.IDTag == '' ||
        this.productInfo.IDType == null || this.productInfo.IDType == ''
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Chưa điền đầy đủ thông tin",
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Thêm sản phẩm thành công",
          life: 3000,
        });
        this.createNewProduct();
      }
    }
  },
  components: {
    AdminBlankPage,
    Main_content,
  },
  async mounted() {
    if (this.$route.path != "/admin/products/create") {
      await this.getAPIProductInfo(this.$route.params.id);
    }
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-wrapper__left:hover {
    color: var(--primary-color);
  }

  .header-wrapper__right {
    display: flex;
    gap: 10px;
  }
}
.main-wrapper {
  .product-table {
    width: 100%;
  }
}

::v-deep(.p-card) {
  border-radius: 10px;
}
</style>
