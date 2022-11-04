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
            @click="
              $router.push({ path: '/admin/collections/create', replace: true })
            "
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="container">
        <div class="title-collection">Danh sách danh mục</div>
        <div>
          <CollectionTable></CollectionTable>
        </div>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
import CollectionTable from "../collections/component/CollectionTable.vue";
import AddFileVue from "../../admin/products/components/AddFile.vue";
export default {
  components: {
    AdminBlankPage,
    CollectionTable,
    AddFileVue,
  },
};
</script>
<style scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-collection {
  font-size: 26px;
  padding: 10px;
}
</style>
