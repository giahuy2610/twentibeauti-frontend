<template lang="">
    <AdminBlankPage>
      <template v-slot:header>
        <div class="header-wrapper">
          <div class="header-wrapper__left" @click="$router.push({path:'/admin/products',replace:true})">Quay lại</div>
          <div class="header-wrapper__right">
            <Button label="Thoát" class="p-button-outlined p-button-info" />
            <Button label="Lưu và in mã vạch" class="p-button-outlined p-button-info" />
            <Button label="Lưu" class="p-button-outlined p-button-info" />
            
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
    components: {
      AdminBlankPage,
      Main_content,
    },
    data() {
      return {};
    }
  };
  </script>
  <style lang="scss" scoped>
  .header-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-wrapper__right{
        display: flex;
        gap:10px;
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
  