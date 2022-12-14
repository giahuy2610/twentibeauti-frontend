<template lang="">
  <div class="generalInfo">
    <Card>
      <template #title> Thông tin chung </template>
      <template #content>
        <p>Tên sản phẩm</p>
        <div class="nameprod">
          <div class="nameinf">
            <span class="p-fluid">
              <InputText
                id="nameprod"
                type="text"
                v-model="productInfo.NameProduct"
                placeholder="Nhập tên sản phẩm"
                aria-describedby="namepro-help"
                :class="{
                  'p-invalid':
                    productInfo.NameProduct == null ||
                    productInfo.NameProduct == '',
                }"
              />
              <small
                id="namepro-help"
                class="p-error"
                v-if="
                  productInfo.NameProduct == null ||
                  productInfo.NameProduct == ''
                "
                >Tên sản phẩm không được để trống</small
              >
            </span>
          </div>
        </div>
        <br />
        <div class="codemass">
          <div class="code">
            <p>Nhập mã sản phẩm</p>
            <div class="fillinf">
              <div class="nameinf">
                <span class="p-fluid"
                  ><InputNumber
                    id="codeprod"
                    mode="decimal"
                    :useGrouping="false"
                    v-model="productInfo.IDProduct"
                    placeholder="Nhập mã sản phẩm"
                    aria-describedby="codeprod-help"
                    :class="{
                      'p-invalid':
                        productInfo.IDProduct == null ||
                        productInfo.IDProduct == '',
                    }"
                  />
                  <small
                    id="codeprod-help"
                    class="p-error"
                    v-if="
                      productInfo.IDProduct == null ||
                      productInfo.IDProduct == ''
                    "
                  >
                    Mã sản phẩm không được để trống</small
                  >
                </span>
              </div>
            </div>
          </div>
          <div class="mass">
            <p>Khối lượng</p>
            <div class="fillinf">
              <InputNumber
                id="mass"
                mode="decimal"
                :useGrouping="false"
                v-model="productInfo.Mass"
                aria-describedby="mass-help"
                :class="{
                  'p-invalid':
                    productInfo.Mass == null || productInfo.Mass == '',
                }"
              />

              <Dropdown
                v-model="productInfo.UnitsOfMass"
                :options="massList"
                optionLabel="name"
                optionValue="code"
                :editable="true"
                aria-describedby="unitofmass-help"
                :class="{
                  'p-invalid':
                    productInfo.UnitsOfMass == null ||
                    productInfo.UnitsOfMass == '',
                }"
              />
            </div>
            <small
              id="mass-help"
              class="p-error"
              v-if="
                productInfo.Mass == null ||
                productInfo.Mass == '' ||
                productInfo.UnitsOfMass == null ||
                productInfo.UnitsOfMass == ''
              "
            >
              Khối lượng không được để trống</small
            >
          </div>
        </div>
        <p>Đơn vị tính</p>
        <div class="nameprod">
          <div class="nameinf">
            <span class="p-fluid">
              <Dropdown
                v-model="productInfo.Units"
                :options="unitList"
                optionLabel="name"
                optionValue="code"
                placeholder="Đơn vị tính"
                :editable="true"
                aria-describedby="unitlist-help"
                :class="{
                  'p-invalid':
                    productInfo.Units == null || productInfo.Units == '',
                }"
              />
              <small
                id="unitlist-help"
                class="p-error"
                v-if="productInfo.Units == null || productInfo.Units == ''"
              >
                Đơn vị tính không được để trống</small
              >
            </span>
          </div>
        </div>
        <div class="ProductDescription">
          <PanelMenu />
          <h5>Mô tả sản phẩm</h5>
          <Editor
            v-model="productInfo.Description"
            editorStyle="height: 320px"
            contentType="html"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import { useProductStorePinia } from "@/stores/admin/product";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      massList: [
        { name: "g", code: "gam" },
        { name: "kg", code: "kilogram" },
        { name: "ml", code: "ml" },
      ],
      unitList: [
        { name: "cái", code: "unit" },
        { name: "cặp", code: "couple" },
        { name: "combo", code: "combo" },
      ],
    };
  },
  computed: {
    ...mapWritableState(useProductStorePinia, {
      productInfo: "productInfo",
    }),
  },
};
</script>
<style lang="scss" scoped>
.generalInfo {
  display: flex;
  flex-direction: column;
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
        gap: 5px;
      }
    }
  }
}
</style>
