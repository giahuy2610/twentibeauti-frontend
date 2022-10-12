<template lang="">
  <div class="wrapper" :style="[isHidden ? 'display: none' : '']">
    <ScrollPanel style="width: 100%; height: 700px">
      <div class="modal">
        <div class="modal-content">
          <div class="m-icon">
            <i class="pi pi-times" @click="close()"></i>
          </div>
          <div class="modal-title">
            <div class="m-head">
              Thêm địa chỉ
              <slot name="title"></slot>
            </div>
          </div>
          <div class="modal-context">
            <div class="row_home">
              <span class="p-fluid">
                <AutoComplete
                  v-model="text1"
                  :suggestions="filteredAddress"
                  @complete="searchAddress($event)"
                  optionLabel="home"
                  placeholder="Tên địa chỉ (vd: Văn phòng, Nhà, ...)"
                />
              </span>
            </div>
            <div class="row_fullname">
              <div class="firstName">
                <span class="p-fluid">
                  <AutoComplete
                    v-model="text1"
                    :suggestions="filteredFName"
                    @complete="searchFName($event)"
                    optionLabel="fname"
                    placeholder="Tên"
                  />
                </span>
              </div>
              <div class="lastName">
                <span class="p-fluid">
                  <AutoComplete
                    v-model="text2"
                    :suggestions="filteredLName"
                    @complete="searchLName($event)"
                    optionLabel="lname"
                    placeholder="Họ"
                  />
                </span>
              </div>
            </div>
            <div class="row_email">
              <span class="p-fluid">
                <AutoComplete
                  type="email"
                  v-model="email"
                  :suggestions="filteredEmail"
                  @complete="searchEmail($event)"
                  optionLabel="email"
                  placeholder="Email"
                />
              </span>
            </div>
            <div class="row_phone">
              <span class="p-fluid">
                <InputMask
                  id="phone"
                  mask="(999) 999-9999"
                  v-model="val4"
                  :suggestions="filteredPhone"
                  @complete="searchPhone($event)"
                  placeholder="Nhập số điện thoại"
                />
              </span>
            </div>
            <div class="row_city_district">
              <div class="row_city">
                <span class="p-fluid">
                  <Dropdown
                    v-model="selectedCity1"
                    :options="cities"
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Tỉnh/Thành phố"
                  />
                </span>
              </div>
              <div class="row_district">
                <span class="p-fluid">
                  <Dropdown
                    v-model="selectedDistrict1"
                    :options="district"
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Quận/Huyện"
                  />
                </span>
              </div>           
            </div>
            <div class="row_home">
                <span class="p-fluid">
                  <AutoComplete
                    v-model="home_add"
                    :suggestions="filteredHome"
                    @complete="searchHome($event)"
                    optionLabel="home"
                    placeholder="Nhập địa chỉ"
                  />
                </span>
              </div>
              <div class="field-checkbox">
                <Checkbox inputId="binary" v-model="checked" :binary="true" />
                <label for="binary">Đặt làm địa chỉ mặc định</label>
              </div>
            <slot name="context"></slot>
          </div>
          <div class="modal-footer">
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
    };
  },
  methods: {
    close() {
      this.modal1 = false;
    }
}
}
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
  height: 200vh;

  .modal {
    background-clip: padding-box;
    border: 0;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    position: fixed;
    width: 500px;
    left: calc(50% - 250px);
    top: 100px;
    //-webkit-scrollbar{ display: none; }
    height: 200vh;

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
      border-radius: 10px;
      height: 700vh;
      .m-icon {
        position: absolute;
        top: 0;
        right: 0;
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

    .modal-title {
      display: flex;
      flex-direction: row;
      width: 100%;
      text-align: center;

      .m-head {
        width: 100%;
        text-align: center;
        align-items: center;
        margin-right: 250px;
        font-size: 24px;
        line-height: 36px;
        font-weight: 700;
        margin: 0;
        color: rgba(0, 0, 0, 0.85);
        box-sizing: inherit;
        
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

      .row_home {
        margin-top: 10px;
        width: 100%;
        background: palegreen;
      }
      .row_fullname {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 10px;
        .firstName {
          width: 50%;
        }
        .lastName {
          width: 50%;
        }
      }
      .row_city_district {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 10px;
        .row_city {
          width: 50%;
        }
        .row_district {
          width: 50%;
        }
      }
    }
  }
}
</style>
