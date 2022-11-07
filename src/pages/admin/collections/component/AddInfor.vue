<template lang="">
  <div class="generalInfo">
    <Card>
      <template #title> Thông tin chung </template>
      <template #content>
        <p>Tên danh mục</p>
        <div class="nameCollection">
          <div class="nameinf">
            <span class="p-fluid">
              <InputText
                id="nameprod"
                type="text"
                v-model="nameprod"
                placeholder="Nhập tên danh mục"
              />
            </span>
          </div>
        </div>
        <br />

        <div class="collectionDescription">
          <PanelMenu />
          <h5>Mô tả danh mục</h5>
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
