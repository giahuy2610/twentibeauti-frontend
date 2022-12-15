<template lang="">
  <Toast />
  <Toast position="bottom-center" group="bc">
    <template #message="slotProps">
      <div class="flex flex-column">
        <div class="text-center">
          <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
          <h4>{{ slotProps.message.summary }}</h4>
          <p>{{ slotProps.message.detail }}</p>
        </div>
      </div>
    </template>
  </Toast>
  <div class="right-column">
    <div class="info">
      <div class="header">Tài khoản</div>
      <div class="fullname">
        <div class="firstname">
          <div class="txtFName">Tên</div>
          <span class="p-fluid">
            <InputText
              v-model="getInfoCus.FirstName"
              :suggestions="filterFName"
              @complete="searchFName($event)"
              optionLabel="text"
              placeholder="Nhập Tên"
              aria-describedby="fisrtname-help"
              :class="{
                'p-invalid':
                  getInfoCus.FirstName == null || getInfoCus.FirstName == '',
              }"
            />
            <small
              id="firstname-help"
              class="p-error"
              v-if="getInfoCus.FirstName == null || getInfoCus.FirstName == ''"
              >Tên không được để trống</small
            >
          </span>
        </div>
        <div class="lastname">
          <div class="txtLName">Họ <br /></div>
          <span class="p-fluid">
            <InputText
              v-model="getInfoCus.LastName"
              :suggestions="filterLName"
              @complete="searchLName($event)"
              optionLabel="text"
              placeholder="Nhập Họ"
              aria-describedby="lastname-help"
              :class="{
                'p-invalid':
                  getInfoCus.LastName == null || getInfoCus.LastName == '',
              }"
            />
            <small
              id="lastname-help"
              class="p-error"
              v-if="getInfoCus.LastName == null || getInfoCus.LastName == ''"
              >Họ không được để trống</small
            >
          </span>
        </div>
      </div>
      <div class="emailphone">
        <div class="email">
          <div class="txtEmail">Email <br /></div>
          <span class="p-fluid">
            <InputText
              v-model="getInfoCus.Email"
              :suggestions="filterEmail"
              @complete="searchEmail($event)"
              optionLabel="mail"
              placeholder="Nhập Email"
              aria-describedby="email-help"
              :class="{
                'p-invalid': getInfoCus.Email == null || getInfoCus.Email == '' || !getInfoCus.Email.match(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                )
              }"
            />
            <small
              id="email-help"
              class="p-error"
              v-if="getInfoCus.Email == null || getInfoCus.Email == ''"
              >Email không được để trống</small
            >
            <small
              id="email-help"
              class="p-error"
              v-if="
                getInfoCus.Email != null &&
                getInfoCus.Email != '' &&
                !getInfoCus.Email?.match(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                )
              "
              >Email sai định dạng</small
            >
          </span>
        </div>
        <div class="phone">
          <div class="txtPhone">Số điện thoại <br /></div>
          <span class="p-fluid">
            <InputText
              v-model="getInfoCus.Phone"
              :suggestions="filterPhone"
              @complete="searchPhone($event)"
              optionLabel="phone"
              placeholder="Nhập Số Điện Thoại"
              aria-describedby="phone-help"
              :class="{
                'p-invalid': getInfoCus.Phone == null || getInfoCus.Phone == '' || !getInfoCus.Phone.match(
                  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
                )
              }"
            />
            <small
              id="phone-help"
              class="p-error"
              v-if="getInfoCus.Phone == null || getInfoCus.Phone == ''"
              >Số điện thoại không được để trống</small
            >
            <small
              id="phone-help"
              class="p-error"
              v-if="
                getInfoCus.Phone != null &&
                getInfoCus.Phone != '' &&
                !getInfoCus.Phone?.match(
                  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
                )
              "
              >Số điện thoại không đúng định dạng</small
            >
          </span>
        </div>
      </div>
      <!-- <div class="button flex justify-content-center">
        <button type="button" @click="updatedInfoCus">Lưu</button>
      </div> -->
      <div class="button flex justify-content-center">
        <button type="button" @click="save()">Lưu</button>
      </div>
    </div>
  </div>
</template>
<script>
import { useInfoAccountStorePinia } from "@/stores/store/InfoAccount.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      FirstName: null,
      LastName: null,
      Email: null,
      Phone: null,
    };
  },
  computed: {
    ...mapWritableState(useInfoAccountStorePinia, {
      infoCus: "infoCus",
      getInfoCus: "getInfoCus",
    }),
  },
  methods: {
    ...mapActions(useInfoAccountStorePinia, [
      "loadDefaultInfoCus",
      "updatedInfoCus",
    ]),
    save() {
      if (
        this.getInfoCus.LastName == null ||
        this.getInfoCus.LastName == "" ||
        this.getInfoCus.FirstName == null ||
        this.getInfoCus.FirstName == "" ||
        this.getInfoCus.Phone == null ||
        this.getInfoCus.Phone == "" ||
        this.getInfoCus.Email == null ||
        this.getInfoCus.Email == ""
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Chưa điền đầy đủ thông tin",
          life: 3000,
        });
      }
      else if (
        !this.getInfoCus.Email?.match(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                ) || !this.getInfoCus.Phone?.match(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
        )
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Sai định dạng",
          life: 3000,
        });
      } 
      else {
        this.updatedInfoCus();
        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Cập nhật thông tin thành công",
          life: 3000,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.right-column {
  width: 60%;
  //min-height: 200px;
  float: right;
  gap: 10px;
  flex-direction: column;
  display: flex;
  @include mobile {
    width: 100%;
  }
  @include mini-tablet {
    width: 100%;
  }
  @include tablet {
    width: 100%;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @include mobile {
      margin-left: 0;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      //color:red;
      gap: 10px;
    }

    .header {
      display: block;
      font-size: 24px;
      margin-bottom: 15px;
      font-weight: 700;
      box-sizing: border-box;
      font-weight: 700;
      @include mobile {
        display: none;
      }
      @include mini-tablet {
        display: none;
      }
      @include tablet {
        display: none;
      }
    }

    .fullname,
    .emailphone {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;
      @include mobile {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .lastname,
      .firstname,
      .email,
      .phone {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        @include mobile {
          width: 100%;
        }
        .txtFName,
        .txtLName,
        .txtPhone,
        .txtEmail {
          font-weight: 600;
        }
      }
    }

    button {
      border: none;
      background-color: #94c83d;
      text-align: center;
      display: inline-block;
      font-size: 20px;
      border-radius: 38px;
      margin-top: 40px;
      width: 90px;
      height: 50px;
      font-weight: 700;
      box-sizing: border-box;
      color: #fff;
      text-shadow: 0-1px 0 rbg(0 0 0/12%);
      cursor: pointer;

      @include mobile {
        max-width: 100%;
        //margin-left: 38%;
        font-size: 20px;
        max-height: 40px;
        max-width: 100px;
        margin-top: 10px;
      }
      @include mini-tablet {
        max-width: 100%;
        //margin-left: 45%;
        font-size: 20px;
        max-height: 40px;
        max-width: 100px;
        margin-top: 10px;
      }
      @include tablet {
        max-width: 100%;
        // margin-left: 45%;
        font-size: 20px;
        max-height: 40px;
        max-width: 100px;
        margin-top: 10px;
      }
    }
  }
}
</style>
