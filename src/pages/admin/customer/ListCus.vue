<template lang="">
    <div class="listcus">
      <AdminBlankPage>
        <template v-slot:header>
          <div class="header-wrapper">
            <div class="header-wrapper__left" style="cursor:default;">Danh sách khách hàng</div>
            <div class="header-wrapper__right">
              <Button label="Thoát" class="p-button-outlined p-button-danger" />
            </div>
          </div>
        </template>
        
        <template v-slot:main>
          <div class="main-wrapper">
            <h1 class="title">
                Danh sách khách hàng
            </h1>
            </div>
            <div class="main-bot shadow-2">
            <Card >
            <template #title></template>
            <template #content><TableCustomer></TableCustomer></template>
          </Card>
          </div> 
        </template>
      </AdminBlankPage>
  
    </div>
  </template>
  <script>
  import AdminBlankPage from "../AdminBlankPage.vue";
  import TableCustomer from "./component/TableCustomer.vue";
  export default {
    components: {
     AdminBlankPage,
     TableCustomer,
    },
  };
  </script>
  <style lang="scss" scoped>
  .header-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main-wrapper {
   // padding-bottom: 50px;
   .title {
    margin-right:1rem;
   }
  }
  </style>
  