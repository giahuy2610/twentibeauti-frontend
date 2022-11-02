<template lang="">
  <ChooseOrderReturn v-if="modal1">
    <template v-slot:title>
      <div class="title" >
        <div class="header" > Chọn đơn hàng để trả</div>
        <div class="btn-close">
          <i class="pi pi-times" @click="modal1 = false"></i>
        </div>
      </div>
    </template>
    <template v-slot:context>
      <div></div>
    </template>
    <template v-slot:footer>
      <div></div>
    </template>
    <template v-slot:button>
    </template>
  </ChooseOrderReturn>
  <div class="order-return">
    <AdminBlankPage>
      <template v-slot:header>
        <div class="header-wrapper">
          <div class="header-wrapper__left">Danh sách đơn trả hàng</div>
          <div class="header-wrapper__right">
            <Button label="Thoát" class="p-button-outlined p-button-danger" />
            <Button
              type="button"
              label="Tạo đơn trả hàng"
              class="p-button-info ml-2"
              badgeClass="p-badge-danger"
              @click="modal1=true"
            />
          </div>
        </div>
      </template>
      <template v-slot:main>
        <div class="main-body">
            <div class="list-return">
                  <ListReturn></ListReturn>
                </div>         
        </div>
      </template>
    </AdminBlankPage>
  </div>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
import InfoTicket from "./componentsReturn/InfoTicket.vue";
import ListReturn from "./componentsReturn/ListReturn.vue";
import ChooseOrderReturn from "./componentsReturn/ChooseOrderReturn.vue";
export default {
  components: {
    AdminBlankPage,
    InfoTicket,
    ListReturn,
    ChooseOrderReturn,
  },
  data()  {
    return {
      modal1: false,
      position: "center",
    };
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
.main-body {
    display:flex;
    flex-direction: column;
    
}
.title {
  text-align: center;
  display:flex;
  flex-direction: row;
  width: 100%;
  gap:20px;
  //background-color: red;
  .header {
    font-weight: 700;
    width:100%;
    font-size: 24px;
    text-align: center;
    margin-left:250px;
    padding-bottom: 10px;
       // box-sizing: inherit;
  }
  .btn-close {
    //margin-bottom:250px;
    margin-left:200px;
    cursor: pointer;
  }
}
</style>
