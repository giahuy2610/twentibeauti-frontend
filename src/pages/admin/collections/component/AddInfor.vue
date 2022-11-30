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
                v-model="collectionItems.NameCollection"
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
import axios from 'axios'
import { useCollectionStorePinia } from '@/stores/admin/collection.js';
import { mapWritableState, mapActions } from "pinia";
export default {
  name: 'Addinfo',
  data() {
    return {
      addinfor: [],
    };
  },
  created () {
  },
  computed: {
    ...mapWritableState(useCollectionStorePinia, {
      getCollectionItems: "getCollectionItems",
      collectionItems: "collectionItems"
    }),
  },
  methods: {
    contentChangedEditor(event) {
      console.log(event.htmlValue);
    },
    ...mapActions(useCollectionStorePinia,["getInfoCollection"],["createCollection"],
    ),
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
