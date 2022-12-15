<template lang="">
  <div class="generalInfo">
    <Card>
      <template #title> Thông tin chung </template>
      <template #content>
        <div
          class="nameinf"
          style="display: flex; flex-direction: column; gap: 10px"
        >
          <label for="namecol">Tên danh mục</label>
          <span class="p-fluid">
            <InputText
              id="namecol"
              type="text"
              v-model="collectionItems.NameCollection"
              placeholder="Nhập tên danh mục"
              aria-describedby="namecol-help"
              :class="{
                'p-invalid':
                  collectionItems.NameCollection == null ||
                  collectionItems.NameCollection == '',
              }"
            />
            <small
              id="namecol-help"
              class="p-error"
              v-if="
                collectionItems.NameCollection == null ||
                collectionItems.NameCollection == ''
              "
              >Tên danh mục không được để trống</small
            >
          </span>
        </div>
        <br />

        <div
          class="collectionDescription"
          style="display: flex; flex-direction: column; gap: 10px"
        >
          <PanelMenu />
          <label for="descol">Mô tả danh mục</label>
          <Editor
            id="descol"
            v-model="collectionItems.Description"
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
import axios from "axios";
import { useCollectionStorePinia } from "@/stores/admin/collection.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  name: "Addinfo",
  data() {
    return {
      addinfor: [],
    };
  },
  created() {},
  computed: {
    ...mapWritableState(useCollectionStorePinia, {
      getCollectionItems: "getCollectionItems",
      collectionItems: "collectionItems",
    }),
  },
  methods: {
    contentChangedEditor(event) {
      console.log(event.htmlValue);
    },
    ...mapActions(
      useCollectionStorePinia,
      ["getInfoCollection"],
      ["createCollection"]
    ),
  },
};
</script>
<style lang="scss" scoped>
.generalInfo {
  display: flex;
  flex-direction: column;
  label {
    font-weight: 600;
    font-size: 20px;
  }
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
