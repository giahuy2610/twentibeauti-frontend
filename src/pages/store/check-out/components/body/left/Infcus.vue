<template lang="">
  <div class="infcus shadow-5">
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
            v-model="firstname"
            placeholder="Tên"
          />
        </span>
      </div>
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="lastname"
            type="text"
            v-model="lastname"
            placeholder="Họ"
          />
        </span>
      </div>
    </div>
    <div class="fillinf">
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="lastname"
            type="text"
            v-model="lastname"
            placeholder="Họ"
            class="p-invalid"
          />
        </span>
      </div>
      <div class="nameinf">
        <span class="p-fluid">
          <InputText
            id="email"
            type="text"
            v-model="email"
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
            v-model="address"
            placeholder="Địa chỉ"
          />
        </span>
      </div>
      <br />
      <div class="namefor">
        <span class="p-fluid">
          <InputText
            id="address"
            type="text"
            v-model="address"
            placeholder="Tên địa chỉ(vd:Văn phòng,Nhà,..."
          />
        </span>
      </div>
      <br />
      <div class="field-checkbox">
        <Checkbox inputId="binary" v-model="checked" :binary="true" />
        <label for="binary">Tạo tài khoản với thông tin này </label>
      </div>
    </div>
    {{ this.selectedProvince }}
  </div>
</template>
<script lang="js">
export default {
  data() {
    return {
      checked: false,
      provinces: [],//provinces = [{name: "abc", code: 11}]
      selectedProvince: null,
      districts: [],
      selectedDistrict: null,
      wards: [],
      selectedWard: null,
      firstName: null,
      lastName: null,

    };
  },
  methods: {
    getProvinces() {
      return fetch("./src/assets/address/provinces.json").then((res) =>
        res.json()
      );
    },
    getDistrict(selectedProvince) {
      var path = "./src/assets/address/districts/"+ selectedProvince +".json";
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
    loadDistricts(selectedProvince) {
      this.districts =[];
      this.selectedDistrict = null;
      this.getDistrict(selectedProvince).then((data) => {
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
    loadWards(selectedProvince) {
      this.wards = [];
      this.selectedWard = null;
      this.getWard(selectedProvince).then((data) => {
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
    confirmOrder() {

    }
  },
  mounted() {
    this.loadProvinces();
  },
  watch: {
    selectedProvince(newSelectedProvince, oldSelectedProvince) {
      if (Number.isInteger(parseInt(newSelectedProvince)))
        this.loadDistricts(newSelectedProvince);

    },
    selectedDistrict(newSelectedDistrict, oldSelecteDistrict) {
      if (Number.isInteger(parseInt(newSelectedDistrict)))
        this.loadWards(newSelectedDistrict);

    }
  }

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
  border: 1px solid #aaa;

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
