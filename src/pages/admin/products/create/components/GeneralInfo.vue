<template lang="">
  <div class="generalInfo">
    <h2>Thông tin chung</h2>
    <hr width="100%" align="center" />
    <p>Tên sản phẩm</p>
    <div class="nameprod">
      <div class="nameinf">
        <span class="p-fluid">
          <AutoComplete
            style="color: blue"
            v-model="text1"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            optionLabel="name"
            placeholder="Nhập tên sản phẩm"
          />
        </span>
      </div>
    </div>
    <br />
    <div class="codemass">
      <div class="code">
        <p>Nhập mã sản phẩm</p>
        <div class="fillinf" style="margin: 0 !important">
          <div class="nameinf">
            <span class="p-fluid"
              ><AutoComplete
                style="color: blue"
                v-model="text1"
                :suggestions="filteredCountries"
                @complete="searchCountry($event)"
                optionLabel="name"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="mass">
        <p>Khối lượng</p>
        <div class="fillinf">
          <AutoComplete
            style="color: blue"
            v-model="text1"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            optionLabel="name"
          />
          <Dropdown
            v-model="selectedWard"
            :options="wards"
            optionLabel="name"
            optionValue="code"
            placeholder=""
            :editable="true"
          />
        </div>
      </div>
    </div>
    <p>Đơn vị tính</p>
    <div class="nameprod">
      <div class="nameinf">
        <span class="p-fluid">
          <Dropdown
            v-model="selectedWard"
            :options="wards"
            optionLabel="name"
            optionValue="code"
            placeholder="Đơn vị tính"
            :editable="true"
          />
        </span>
      </div>
    </div>
    <div class="ProductDescription">
      {{value1}}
      <PanelMenu />
      <h5>Mô tả sản phẩm</h5>
      <Editor v-model="value1" editorStyle="height: 320px" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: null
    };
  },
};
</script>
<style lang="scss" scoped>
.generalInfo {
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa;
  border-radius: 10px;
  padding: 20px;
  width: 60%;
  margin-top: 10px;
  .codemass {
    display: flex;
    width: 100%;
    flex-direction: row;
    .code {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-right: 10px;
    }
    .mass {
      display: flex;
      flex-direction: column;
      width: 50%;
      .fillinf {
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>
