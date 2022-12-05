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
                v-model="nameprod"
                placeholder="Nhập tên sản phẩm"
              />
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
                  ><InputText
                    id="codeprod"
                    type="text"
                    v-model="codeprod"
                    placeholder="Nhập mã sản phẩm"
                  />
                </span>
              </div>
            </div>
          </div>
          <div class="mass">
            <p>Khối lượng</p>
            <div class="fillinf">
              <InputText id="mass" type="text" v-model="mass" />
              <Dropdown
                v-model="selectedWard"
                :options="wards"
                optionLabel="name"
                optionValue="code"
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
                v-model="unit"
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
          <PanelMenu />
          <h5>Mô tả sản phẩm</h5>
          <Editor
            v-model="description"
            editorStyle="height: 320px"
            @textChange="contentChangedEditor"
            contentType="html"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      description: null,
      nameprod: null,
      codeprod: null,
      mass: 0,
      unit: null,
    };
  },
  methods: {
    contentChangedEditor(event) {
      console.log(event.htmlValue);
    },
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
