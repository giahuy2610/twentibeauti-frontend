<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div class="header-wrapper__left">Tạo danh mục</div>
        <div class="header-wrapper__right">
          <Button label="Thoát" class="p-button-outlined p-button-danger" />
          <Button
            type="button"
            label="Thêm danh mục"
            icon="pi pi-plus"
            class="p-button-info ml-2"
            badgeClass="p-badge-danger"
            @click="$router.push({ path: '/admin/products/create' })"
          />
        </div>
      </div>
    </template>
    <template v-slot:main> oibfobfob </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
export default {
  components: {
    AdminBlankPage,
  },
};
</script>
