<template lang="">
  <Toast position="bottom-right" group="br" />
  <div class="addinfo">
    <Card>
      <template #title> Thông tin bổ sung </template>
      <template #content>
        <p>Loại sản phẩm</p>
        <div class="flex">
          <Dropdown
            v-model="typeproduct"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            placeholder="Chọn loại sản phẩm"
            :editable="true"
          />
          <Button
            icon="pi pi-plus"
            class="p-button-rounded p-button-outlined p-button-sm ml-1"
            @click="openModalCate"

          ></Button>
        </div>

        <Dialog
          header="Thêm loại sản phẩm"
          v-model:visible="displayModalCate"
          :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
          :style="{ width: '50vw' }"
          :modal="true"
        >
          <span class="p-fluid">
            <AutoComplete
              style="color: blue"
              v-model="nameproduct"
              :suggestions="filteredCountries"
              @complete="searchCountry($event)"
              optionLabel="name"
              placeholder="Tên loại sản phẩm"
            />
          </span>
          <template #footer>
            <Button
              label="Thoát"
              @click="closeModalCate"
              class="p-button-text"
            />
            <Button
              label="Thêm loại sản phẩm"
              class="p-button-success"
              @click="showBottomRightCate"
            />
          </template>
        </Dialog>
        <br>
        <p>Nhãn hiệu</p>
        <div class="flex">
          <Dropdown
            v-model="typeBrand"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            placeholder="Chọn nhãn hiệu"
            :editable="true"
          />
          <Button
            icon="pi pi-plus"
            class="p-button-rounded p-button-outlined p-button-sm ml-1"
            @click="openModal"

          ></Button>
        </div>
          
        <Dialog
          header="Thêm nhãn hiệu"
          v-model:visible="displayModal"
          :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
          :style="{ width: '50vw' }"
          :modal="true"
        >
          <span class="p-fluid">
            <AutoComplete
              style="color: blue"
              v-model="nameBrand"
              :suggestions="filteredCountries"
              @complete="searchCountry($event)"
              optionLabel="name"
              placeholder="Tên nhãn hiệu"
            />
            <p>Đường dẫn</p>
            <InputText type="text" placeholder="/collections/nameBrand" v-model="inputpath" />
          </span>
          
          <template #footer>
            <Button label="Thoát" @click="closeModal" class="p-button-text" />
            <Button
              label="Thêm nhãn hiệu"
              class="p-button-success"
              @click="showBottomRight"
            />
          </template>
        </Dialog>
        <p>Tags</p>
        <div class="flex">
          <Dropdown
            v-model="Tags"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            placeholder="Tags"
            :editable="true"
          />
          <Button
            icon="pi pi-plus"
            class="p-button-rounded p-button-outlined p-button-sm ml-1"
            @click="openShowTags"

          ></Button>
        </div>
        <Dialog
          header="Thêm Tags"
          v-model:visible="displayTags"
          :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
          :style="{ width: '50vw' }"
          :modal="true"
        >
          <span class="p-fluid">
            <AutoComplete
              style="color: blue"
              v-model="nameTags"
              :suggestions="filteredCountries"
              @complete="searchCountry($event)"
              optionLabel="name"
              placeholder="Tên Tags"
            />
          </span>
          <template #footer>
            <Button label="Thoát" @click="closeShowTags" class="p-button-text" />
            <Button
              label="Thêm Tags"
              class="p-button-success"
              @click="showBottomRightTags"
            />
          </template>
        </Dialog>
      </template>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      displayModal: false,
      messages: [],
      displayModalCate: false,
      displayTags: false,
    };
  },
  methods: {
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
    showBottomRight() {
      this.closeModal();
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        group: "br",
        life: 3000,
      });
    },
    openModalCate() {
      this.displayModalCate = true;
    },
    closeModalCate() {
      this.displayModalCate = false;
    },
    showBottomRightCate() {
      this.closeModalCate();
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        group: "br",
        life: 3000,
      });
    },
    openShowTags() {
      this.displayTags = true;
    },
    closeShowTags() {
      this.displayTags = false;
    },
    showBottomRightTags() {
      this.closeShowTags();
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        group: "br",
        life: 3000,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.addinfo {
  padding-bottom: 20px;
}
</style>
