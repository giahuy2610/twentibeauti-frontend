<template lang="">
  <div class="infcus shadow-3">
    <div class="h2">
      <b>Thông tin liên lạc</b>
    </div>
    <br />
    <div class="fillinf">
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="firstname"
            type="text"
            v-model="receiverInfo.FirstName"
            placeholder="Tên"
            aria-describedby="fisrtname-help"
            :class="{
              'p-invalid':
                receiverInfo.FirstName == null || receiverInfo.FirstName == '',
            }"
          />
          <small
            id="firstname-help"
            class="p-error"
            v-if="
              receiverInfo.FirstName == null || receiverInfo.FirstName == ''
            "
            >Tên không được để trống</small
          >
        </span>
      </div>
      <div class="nameinf">
        <span class="p-fluid">
          <div class="field">
            <InputText
              id="lastname"
              type="text"
              v-model="receiverInfo.LastName"
              placeholder="Họ"
              aria-describedby="lastname-help"
              :class="{
                'p-invalid':
                  receiverInfo.LastName == null || receiverInfo.LastName == '',
              }"
            />
            <small
              id="lastname-help"
              class="p-error"
              v-if="
                receiverInfo.LastName == null || receiverInfo.LastName == ''
              "
              >Họ không được để trống</small
            >
          </div>
        </span>
      </div>
    </div>
    <div class="fillinf">
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="phone"
            type="text"
            v-model="receiverInfo.Phone"
            placeholder="Số điện thoại"
            aria-describedby="phone-help"
            :class="{
              'p-invalid':
                receiverInfo.Phone == null || receiverInfo.Phone == '' || !receiverInfo.Phone.match(
                /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
              )
            }"
          />
          <small
            id="phone-help"
            class="p-error"
            v-if="receiverInfo.Phone == null || receiverInfo.Phone == ''"
            >Số điện thoại không được để trống</small
          >
          <small
            id="phone-help"
            class="p-error"
            v-if="
              receiverInfo.Phone != null &&
              receiverInfo.Phone != '' &&
              !receiverInfo.Phone?.match(
                /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
              )
            "
            >Số điện thoại không đúng định dạng</small
          >
        </span>
      </div>
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="email"
            type="text"
            v-model="receiverInfo.Email"
            placeholder="Email"
            aria-describedby="email-help"
            :class="{
              'p-invalid':
                receiverInfo.Email == null || receiverInfo.Email == '' || !receiverInfo.Email.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              )
            }"
          />
          <small
            id="email-help"
            class="p-error"
            v-if="receiverInfo.Email == null || receiverInfo.Email == ''"
            >Email không được để trống</small
          >
          <small
            id="email-help"
            class="p-error"
            v-if="
              receiverInfo.Email != null &&
              receiverInfo.Email != '' &&
              !receiverInfo.Email?.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              )
            "
            >Email sai định dạng</small
          >
        </span>
      </div>
    </div>
    <br />
    <div class="h2">
      <b>Thông tin nhận hàng</b>
      <br />
      <br />
    </div>

    <div class="deliveryinf">
      <div class="nameinf">
        <span class="p-fluid">
          <Dropdown
            v-model="selectedProvince"
            :options="provinces"
            optionLabel="name"
            optionValue="code"
            placeholder="Tỉnh/Thành phố"
            :editable="true"
            aria-describedby="city-help"
            :class="{
              'p-invalid': selectedProvince == null || selectedProvince == '',
            }"
          />
          <small
            id="province-help"
            class="p-error"
            v-if="selectedProvince == null || selectedProvince == ''"
            >Tỉnh/thành phố không được để trống</small
          >
        </span>
      </div>
      <br />
      <div class="fillinf" style="margin: 0 !important">
        <div class="nameinf">
          <span class="p-fluid"
            ><Dropdown
              v-model="selectedDistrict"
              :options="districts"
              optionLabel="name"
              optionValue="code"
              placeholder="Quận/huyện"
              :editable="true"
              aria-describedby="districts-help"
              :class="{
                'p-invalid': selectedDistrict == null || selectedDistrict == '',
              }"
            />
            <small
              id="districts-help"
              class="p-error"
              v-if="selectedDistrict == null || selectedDistrict == ''"
              >Quận/Huyện không được để trống</small
            >
          </span>
        </div>
        <div class="nameinf">
          <span class="p-fluid"
            ><Dropdown
              v-model="selectedWard"
              :options="wards"
              optionLabel="name"
              optionValue="code"
              placeholder="Phường / xã"
              :editable="true"
              aria-describedby="ward-help"
              :class="{
                'p-invalid': selectedWard == null || selectedWard == '',
              }"
            />
            <small
              id="ward-help"
              class="p-error"
              v-if="selectedWard == null || selectedWard == ''"
              >Phường/Xã không được để trống</small
            >
          </span>
        </div>
      </div>
      <br />
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="address"
            type="text"
            v-model="receiverInfo.AddressDetail"
            placeholder="Địa chỉ"
            aria-describedby="address-help"
            :class="{
              'p-invalid':
                receiverInfo.AddressDetail == null ||
                receiverInfo.AddressDetail == '',
            }"
          />
          <small
            id="address-help"
            class="p-error"
            v-if="
              receiverInfo.AddressDetail == null ||
              receiverInfo.AddressDetail == ''
            "
            >Địa chỉ không được để trống</small
          >
        </span>
      </div>
      <br />

      <br />
      <!-- <div class="field-checkbox">
        <Checkbox inputId="binary" v-model="checked" :binary="true" />
        <label for="binary">Tạo tài khoản với thông tin này </label>
      </div> -->
    </div>
  </div>
</template>

<script lang="js">
import { useCheckoutStorePinia } from "@/stores/store/checkout.js";
import { useInfoAccountStorePinia } from "@/stores/store/InfoAccount.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      checked:false,
      selectedProvince: null,
      selectedDistrict: null,
      selectedWard: null,
      provinces: [],
      districts: [],
      wards: []
        }
  },
  computed: {
...mapWritableState(useCheckoutStorePinia, {
  receiverInfo: "receiverInfo",
}),
...mapWritableState(useInfoAccountStorePinia,{
  infoCus: "infoCus"
})

},
  methods: {
    getProvinces() {
      return fetch("./src/assets/address/provinces.json").then((res) =>
        res.json()
      );
    },
    getDistrict(City) {
      var path = "./src/assets/address/districts/"+ City +".json";
      return fetch(path).then((res) =>
        res.json()
      );
    },
    getWard(selectedDistrict) {
      var path = "./src/assets/address/wards/"+ selectedDistrict + ".json" ;
      return fetch(path).then((res) =>
        res.json()
      );
    },
    loadProvinces() {
      this.provinces = [];
    //get province data for autocomplete quan/huyen
    this.getProvinces().then((data) => {
      var item;
      for (item in data) {
        this.provinces.push({ name: data[item].name, code: data[item].code }) ;
      }
      this.provinces = this.provinces.sort((a,b) => {
        if (parseInt(a.code) < parseInt(b.code)) return -1;
        else if (parseInt(a.code) > parseInt(b.code)) return 1;
        else return 0;
      });
    });
    },
    loadDistricts(City) {
      this.districts =[];
      this.selectedDistrict = null;
      this.getDistrict(City).then((data) => {
        var item;
        for (item in data) {
          this.districts.push({ name: data[item].name, code: data[item].code }) ;
        }
        this.districts = this.districts.sort((a,b) => {
          if (parseInt(a.code) < parseInt(b.code)) return -1;
          else if (parseInt(a.code) > parseInt(b.code)) return 1;
          else return 0;
        });
      });
    },
    loadWards(City) {
      this.wards = [];
      this.selectedWard = null;
      this.getWard(City).then((data) => {
        var item;
        for (item in data) {
          this.wards.push({ name: data[item].name, code: data[item].code }) ;
        }
        this.wards = this.wards.sort((a,b) => {
          if (parseInt(a.code) < parseInt(b.code)) return -1;
          else if (parseInt(a.code) > parseInt(b.code)) return 1;
          else return 0;
        });
      });
    },
    // ...mapActions(useCheckoutStorePinia, ["increaseTotal","loadDefaultInfo"]),
    ...mapActions(useInfoAccountStorePinia, ["loadDefaultInfoCus"]),
  },
  async mounted() {

    await this.loadProvinces();
    await this.loadDefaultInfoCus();
    this.receiverInfo.FirstName = this.infoCus.FirstName;
    this.receiverInfo.LastName = this.infoCus.LastName;
    this.receiverInfo.Email = this.infoCus.Email;
    this.receiverInfo.Phone = this.infoCus.Phone;
    //this.getAlldata();
  },
  watch: {
    selectedProvince(newSelectedProvince, oldSelectedProvince) {
      if (Number.isInteger(parseInt(newSelectedProvince)))
        this.loadDistricts(newSelectedProvince);
        this.receiverInfo.City = this.provinces.find((e) => e.code == newSelectedProvince).name;

    },
    selectedDistrict(newSelectedDistrict, oldSelecteDistrict) {
      if (Number.isInteger(parseInt(newSelectedDistrict)))
        this.loadWards(newSelectedDistrict);
        this.receiverInfo.District = this.districts.find((e) => e.code == newSelectedDistrict).name;
    },
    selectedWard(newSelectedWard, oldSelecteWard) {
      if (Number.isInteger(parseInt(newSelectedWard)))
        this.receiverInfo.Ward = this.wards.find((e) => e.code == newSelectedWard).name;
    },
  },


};
</script>
<style lang="scss" scoped>
.infcus {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  .fillinf {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    width: 100%;
    gap: 5px;

    .nameinf {
      width: 50%;
    }
  }
  .deliveryinf {
    .District {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
