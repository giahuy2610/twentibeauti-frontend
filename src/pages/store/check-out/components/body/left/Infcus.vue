<template lang="">
  <div class="infcus shadow-5">
    <div class="h2">
      <b>Thông tin liên lạc</b>
    </div>
    <br />
    <div class="fillinf">
      <div class="nameinf">
        <span class="p-fluid">
          <AutoComplete
            style="color: blue"
            v-model="text1"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            optionLabel="name"
            placeholder="Tên"
          />
        </span>
      </div>
      <div class="nameinf">
        <span class="p-fluid">
          <AutoComplete
            v-model="text2"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            optionLabel="name"
            placeholder="Họ"
          />
        </span>
      </div>
    </div>
    <div class="fillinf">
      <div class="nameinf">
        <span class="p-fluid">
          <AutoComplete
            v-model="text3"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            optionLabel="name"
            placeholder="Số điện thoại"
            class="p-invalid"
          />
        </span>
      </div>
      <div class="nameinf">
        <span class="p-fluid">
          <AutoComplete
            v-model="text4"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            optionLabel="name"
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
            v-model="selectedCity1"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            placeholder="Tỉnh/Thành phố"
          />
        </span>
      </div>
      <br />
      <div class="fillinf" style="margin: 0 !important">
        <div class="nameinf">
          <span class="p-fluid"
            ><Dropdown
              v-model="selectedCity1"
              :options="cities"
              optionLabel="name"
              optionValue="code"
              placeholder="Quận/huyện"
            />
          </span>
        </div>
        <div class="nameinf">
          <span class="p-fluid"
            ><Dropdown
              v-model="selectedCity1"
              :options="cities"
              optionLabel="name"
              optionValue="code"
              placeholder="Phường / xã"
            />
          </span>
        </div>
      </div>
      <br />
      <div class="nameinf">
        <span class="p-fluid">
          <AutoComplete
            v-model="text1"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            optionLabel="name"
            placeholder="Địa chỉ"
          />
        </span>
      </div>
      <br />
      <div class="namefor">
        <span class="p-fluid">
          <AutoComplete
            v-model="text1"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            optionLabel="name"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
    };
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
