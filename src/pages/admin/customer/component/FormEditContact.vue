<template lang="">
  <Toast position="bottom-right" group="br" />
  <div class="wrapper" :style="[isHidden ? 'display: none' : '']">
    <ScrollPanel style="width: 100%; height: 700px">
      <a href="#" class="overlay-close"></a>
      <div class="modal">
        <div class="modal-content">
          <div class="modal-title">
            <slot name="title"></slot>
            <!-- <div class="m-head">
                Sửa địa chỉ
               
              </div> -->
          </div>
          <div class="modal-context">
            <div class="inputtext">
              <div class="text">
                Họ
                <span class="p-fluid">
                  <InputText
                    v-model="lName"
                    :suggestions="filteredLName"
                    @complete="searchLName($event)"
                    optionLabel="lname"
                    placeholder="Nhập Họ"
                  />
                </span>
              </div>
              <div class="text">
                Tên
                <span class="p-fluid">
                  <InputText
                    v-model="fName"
                    :suggestions="filteredFName"
                    @complete="searchPhone($event)"
                    optionLabel="fname"
                    placeholder="Nhập Tên"
                  />
                </span>
              </div>
            </div>
            <div class="inputtext">
              <div class="text">
                Email
                <span class="p-fluid">
                  <InputText
                    v-model="email"
                    :suggestions="filteredEmail"
                    @complete="searchEmail($event)"
                    optionLabel="email"
                    placeholder="Nhập Email"
                  />
                </span>
              </div>
              <div class="text">
                Số điện thoại
                <span class="p-fluid">
                  <InputText
                    v-model="phone"
                    :suggestions="filteredPhone"
                    @complete="searchPhone($event)"
                    optionLabel="phone"
                    placeholder="Nhập Số Điện Thoại"
                  />
                </span>
              </div>
            </div>
            <div class="inputtext">
              <div class="text">
                Ngày sinh
                <span class="p-fluid">
                  <Calendar
                    inputId="basic"
                    v-model="birthday"
                    placeholder="DD/MM/YYYY"
                    autocomplete="off"
                  />
                </span>
              </div>
              <div class="text">
                Giới tính
                <span class="p-fluid">
                  <Dropdown
                    v-model="selectedGender"
                    :options="gender"
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Giới tính"
                  />
                </span>
              </div>
            </div>
            <slot name="context"></slot>
          </div>
          <div class="modal-footer">
            <a class="out" href="#">Thoát</a>
            <div class="btn">
              <!-- <Button class="btn-save" label="Lưu" /> -->

              <Button
                label="Lưu"
                class="p-button-success"
                @click="showSuccess"
              />
            </div>

            <slot name="footer"></slot>
            <slot name="button"></slot>
          </div>
        </div>
      </div>
    </ScrollPanel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHidden: false,
      messages: [],
      fName: null,
      lName: null,
      phone: null,
      email: null,
      selectedGender:null,
      birthday:null,
      gender: [
        {name: 'Nữ', code: 'Nu'},
        {name: 'Nam', code: 'Nam'},
        {name: 'Không xác định', code: 'None'},
      ],
    };
  },
  methods: {
    close() {
      this.modal1 = false;
    },
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Lưu thành công",
        life: 3000,
        group: "br",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: contain;
  //height: 100vh;
  .overlay-close {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: default;
  }

  .modal {
    background-clip: padding-box;
    border: 0;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    position: fixed;
    width: 700px;
    left: calc(50% - 350px);
    top: 85px;
    //-webkit-scrollbar{ display: none; }
    //height: 100;

    .modal-content {
      padding: 18px 24px 16px;
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: none rgba(0, 0, 0, 0.9);
      outline: none;
      border-radius: 5px;
      //height: 700vh;
      .m-icon {
        position: absolute;
        // top: 2px;
        right: 10px;
        font-size: 16px;
        width: 16px;
        z-index: 10;
        padding: 0;
        color: rgba(0, 0, 0, 0.45);
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        transition: color 0.3s;
      }
      .pi {
        display: block;
        width: 80px;
        height: 80px;
        font-size: 16px;
        font-style: normal;
        line-height: 80px;
        text-align: center;
      }
    }

    .modal-context {
      width: 100%;
      display: block;
      // padding: 24px;
      // font-size: 14px;
      // line-height: 1.5715;
      //box-sizing: inherit;
      //height: 100%;
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      display: flex;
      flex-direction: column;
      gap: 15px;
      color: #333;
      .inputtext {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 15px;
        .text {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
      .row-city-district,
      .row-email-post {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 15px;
        .row-city,
        .row-email {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .row-ward,
        .row-post {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }
  .modal-footer {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-left: 450px;
    gap: 30px;
    margin-top: 30px;
    .out {
      text-decoration: none;
      border: 1px solid;
      width: 70px;
      text-align: center;
      align-items: inherit;
      text-transform: none;
      justify-content: inherit;
      padding: 5px;
      color: #0088ff;
    }
    .btn {
      text-align: center;
      background-color: #0088ff;
    }
  }
}
</style>
