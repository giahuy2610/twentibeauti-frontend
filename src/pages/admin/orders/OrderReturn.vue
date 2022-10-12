<template lang="">
  <ChooseOrderReturn v-if="modal">
    <template v-slot:title>
      <div class="title"></div>
    </template>
    <template v-slot:context>
      <div></div>
    </template>
    <template v-slot:footer>
      <div></div>
    </template>
    <template v-slot:button>
      <div class="btn_save">
        <button @click="modal = false">Lưu</button>
      </div>
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
              @click="modal=true"
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
      modal: false,
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
</style>
