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
          />
        </span>
      </div>
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="lastname"
            type="text"
            v-model="receiverInfo.LastName"
            placeholder="Họ"
          />
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
            class="p-invalid"
          />
        </span>
      </div>
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="email"
            type="text"
            v-model="receiverInfo.Email"
            placeholder="Email"
          />
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
          />
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
            />
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
            />
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
          />
        </span>
      </div>
      <br />

      <br />
      <div class="field-checkbox">
        <Checkbox inputId="binary" v-model="checked" :binary="true" />
        <label for="binary">Tạo tài khoản với thông tin này </label>
      </div>
    </div>
    <Button label="Đặt hàng" class="p-button-rounded" @click="increaseTotal" />
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
  //getReceiverInfo: "getReceiverInfo",
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
    // getAlldata() {
    //   if (this.$route.fullPath ==  `/checkout`)
    //      {
    //     console.log(this.getInfoCus(6));
    //     // return this.getInfoCollection(this.$route.params.id).save;
        
    //   } 
    // },
    ...mapActions(useCheckoutStorePinia, ["increaseTotal","loadDefaultInfo"]),
    ...mapActions(useInfoAccountStorePinia, ["loadDefaultInfoCus"]),
  },
  mounted() {

    this.loadProvinces();
    this.loadDefaultInfoCus();
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
