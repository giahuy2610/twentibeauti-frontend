<template lang="">
    <div class="customerdetails">
      <AdminBlankPage>
        <template v-slot:header>
          <div class="header-wrapper">
          <div class="header-wrapper__left" style="cursor:pointer" @click="$router.push({ path: '/admin/customer' })">
            <!-- <i class="pi pi-angle-left" style="cursor:pointer" @click="$router.push({ path: '/admin/listorders' })">
              Quay lại danh sách đơn hàng
            </i> -->
            <i class="pi pi-angle-left" >
            </i>
            Quay lại danh sách khách hàng
            </div>
          <div class="header-wrapper__right">
            <Button label="Thoát" class="p-button-outlined p-button-danger" />
          </div>
        </div>
        </template>
        
        <template v-slot:main>
          <div class="main-wrapper">
            <h1 class="nameCus">
                Dịu Ái
            </h1>
            </div>
            <div class="info-customer">
              <div class="info-left">
                <div class="info-top">
                  <InfoCustomer></InfoCustomer>
                </div>
                <div class="info-bottom">
                <RecentOrder></RecentOrder>
              </div>
              </div>
             
              <div class="info-right">
                <div class="contact">
                  <Contact></Contact>
                </div>
                <div class="address">
                  <MyAddress></MyAddress>
                </div>
              </div>
          </div> 
        </template>
      </AdminBlankPage>
  
    </div>
  </template>
  <script>
  import AdminBlankPage from ".././AdminBlankPage.vue";
  import InfoCustomer from "./component/InfoCustomer.vue";
  import Contact from "./component/Contact.vue";
  import RecentOrder from "./component/RecentOrder.vue";
  import MyAddress from "./component/MyAddress.vue";
  export default {
    components: {
     AdminBlankPage,
     InfoCustomer,
     Contact,
     RecentOrder,
     MyAddress,
    },
  };
  </script>
  <style lang="scss" scoped>
  .header-wrapper {
   // width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-wrapper__left:hover {
    color: var(--primary-color);
  }
  .main-wrapper {
   .title {
    margin-right:1rem;
   }
  }
   .info-customer{
    display: flex;
    flex-direction: row;
    width: 100%;
    .info_top {
      display: flex;
    flex-direction: column;
    }
    .info-right{
      margin-left: 2em;
      display: flex;
      flex-direction: column;
    }
   
  }
  </style>
  