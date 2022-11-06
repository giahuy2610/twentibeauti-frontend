<template lang="">
  <div class="info-contact shadow-2">
    <Card style="width: 24rem; margin-bottom: 2em">
      <template #title>
        <div class="header">
          <div class="label">Liên hệ</div>
          <button class="edit" @click="modal = true">Sửa</button>
          <FormEditContact v-if="modal">
            <template v-slot:title>
              <div class="m-header">
                <div class="modal-title">
                  <div class="m-head">Sửa thông tin khách hàng</div>
                </div>
                <div class="btn-close">
                  <i class="pi pi-times" @click="modal = false"></i>
                </div>
              </div>
            </template>
          </FormEditContact>
        </div>
      </template>
      <template #content>
        <div class="body">
          <a class="email" href="mailto:20520368@gm.uit.edu.vn">20520368@gm.uit.edu.vn</a>
          <div class="name">Dịu Ái</div>
          <div class="phone">0868247806</div>
          <div class="gender">Nữ</div>
          <div class="birthday">14/12/2002</div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import FormEditContact from "../component/FormEditContact.vue";
export default {
  components: {
    FormEditContact,
  },
  data() {
    return {
      modal: false,
      position: "center",
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  font-weight: 600;
  .label {
    width: 90%;
    font-size: 20px;
  }
  .edit {
    border: none;
    background-color: #fff;
    font-size: 16px;
    margin-top: 5px;
    color: var(--text-admin-color);
    font-weight: 400;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .m-header {
        text-align: center;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap:20px;
        color:#333;
        //background-color: aqua;
      .m-head {
        //background-color: #94c83d;
        font-weight: 600;
        width:100%;
        font-size: 24px;
        text-align: center; 
        margin-left:8rem;
        padding-bottom: 10px;
        
      }
        .btn-close{
          cursor: pointer;
          //margin-top:-35px;
          margin-left: 200px;
        }
      }
}
.body {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: var( --surface-600);
  .email {
    color: var(--text-admin-color);
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
