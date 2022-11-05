<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div
          class="header-wrapper__left flex align-items-center cursor-pointer"
          @click="$router.push({ path: '/admin/products'})"
        >
          <i class="pi pi-angle-left"></i>
          <span>Quay lại</span>
        </div>
        <div class="header-wrapper__right">
          <Button label="Hủy" class="p-button-outlined p-button-danger" />
          <Button
            label="Xem trước"
            class="p-button-success"
            @click="$router.push({ path: '/product'})"
          />
          <Button label="Lưu" class="p-button-info" />
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
export default {
  watch: {
  },
  components: {
    AdminBlankPage,
    Main_content,
  },
  data() {
    return {};
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
    color: var(--primary-color)
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
