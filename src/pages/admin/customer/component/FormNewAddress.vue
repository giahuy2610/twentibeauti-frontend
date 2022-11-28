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
                Thêm địa chỉ giao hàng
               
              </div> -->
              <!-- <button class="pi pi-times" @click="modal2=false"></button> -->
            </div>
            <div class="modal-context">
              <div class="row_namephone">
                <div class="name">
                  <div class="txtName">Họ Tên</div>
                  <span class="p-fluid">
                    <InputText
                      v-model="fullName"
                      :suggestions="filteredFName"
                      @complete="searchFName($event)"
                      optionLabel="name"
                      placeholder="Nhập họ tên"
                    />
                  </span>
                </div>
                <div class="phone">
                  Số điện thoại
                  <span class="p-fluid">
                    <InputText
                      v-model="phone"
                      :suggestions="filteredPhone"
                      @complete="searchPhone($event)"
                      optionLabel="phone"
                      placeholder="Nhập số điện thoại"
                    />
                  </span>
                </div>
              </div>
              <div class="row_address">
                <div class="txtAddress">Địa chỉ cụ thể</div>
                <span class="p-fluid">
                  <InputText
                    v-model="address"
                    :suggestions="filteredAddress"
                    @complete="searchAddress($event)"
                    optionLabel="address"
                    placeholder="Nhập địa chỉ cụ thể"
                  />
                </span>
              </div>
              <div class="row-city-ward">
                <div class="row-city">
                  Tỉnh/Thành phố
                  <span class="p-fluid">
                    <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      optionLabel="name"
                      optionValue="code"
                      placeholder="Tỉnh/Thành phố"
                    />
                  </span>
                </div>
                <div class="row-district">
                  Quận/Huyện
                  <span class="p-fluid">
                    <Dropdown
                      v-model="selectedDistrict"
                      :options="district"
                      optionLabel="name"
                      optionValue="code"
                      placeholder="Quận/Huyện"
                    />
                  </span>
                </div>
              </div>
              <div class="row-ward">
                <div class="txtAddress">Phường/Xã</div>
                <span class="p-fluid">
                    <Dropdown
                      v-model="selectedWard"
                      :options="ward"
                      optionLabel="name"
                      optionValue="code"
                      placeholder="Phường/Xã"
                    />
                </span>
              </div>
              <slot name="context"></slot>
            </div>
            <div class="modal-footer">
              <a class="out" href="#">Thoát</a>
              <div class="btn">
                <!-- <Button class="btn-save" label="Lưu" /> -->
  
                <Button
                  label="Thêm"
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
        modal2:false,
        position:"center",
        isHidden: false,
        messages: [],
        fullName: null,
        phone: null,
        address: null,
        selectedCity: null,
        selectedDistrict: null,
        email: null,
        selectedPost: null,
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
        
      }
  
      
      .modal-context {
        width: 100%;
        display: block;
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .row_namephone {
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          width: 100%;
          gap: 15px;
          .name,
          .phone {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 50%;
          }
        }
        .row-city-ward,
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
          .row-district,
          .row-post {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
        }
        .row_address {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .row-ward {
          display: flex;
          flex-direction: column;
          gap: 10px;
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
  