<template lang="">
  <div class="wrapper" :style="[isHidden ? 'display: none' : '']">
    <div class="modal">
      <ScrollPanel style="width: 100%; height: 500px">
        <div class="modal-content">
          <slot name="header"></slot>
          <div class="modal-context">
            <div class="row_home">
              <span class="p-fluid">
                <InputText
                  v-model="namehome"
                  :suggestions="filteredNameHome"
                  @complete="searchNameHome($event)"
                  optionLabel="namehome"
                  placeholder="Tên địa chỉ (vd: Văn phòng, Nhà, ...)"
                />
              </span>
            </div>
            <div class="row_fullname">
              <div class="firstName">
                <span class="p-fluid">
                  <InputText
                    v-model="firstname"
                    :suggestions="filteredFName"
                    @complete="searchFName($event)"
                    optionLabel="fname"
                    placeholder="Tên"
                  />
                </span>
              </div>
              <div class="lastName">
                <span class="p-fluid">
                  <InputText
                    v-model="lastname"
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
                <InputText
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
                  v-model="phone"
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
                <InputText
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
          </div>
          <div class="modal-footer">
            <slot name="button"></slot>
          </div>
        </div>
      </ScrollPanel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHidden: false,
      modal: false,
      position: "center",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1111;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    border-radius: 15px;
    background-clip: padding-box;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    position: fixed;
    width: 500px;
    left: calc(50% - 250px);
    top: 40px;
    text-decoration: none;
    background-color: #fff;
    overflow: auto;
    white-space: nowrap;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    @include mobile {
      top: 20px;
      width: 450px;
      left: calc(50% - 230px);
    }
    @include mini-tablet {
      top: 20px;
    }
    @include tablet {
      top: 20px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .modal-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: none rgba(0, 0, 0, 0.9);
      outline: none;
      overflow: auto;
    }

    .modal-context {
      width: 100%;
      display: block;
      padding-top: 50px;
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .row_fullname {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 15px;
        @include mobile {
          flex-direction: column;
        }
        .firstName,
        .lastName {
          width: 50%;
          @include mobile {
            flex-direction: column;
            width: 100%;
          }
        }
      }
      .row_city_district {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 15px;
        @include mobile {
          flex-direction: column;
        }
        .row_city,
        .row_district {
          width: 50%;
          @include mobile {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
