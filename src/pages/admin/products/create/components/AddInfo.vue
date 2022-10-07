<template lang="">
  <Toast position="bottom-right" group="br" />
  <div class="addinfo">
    <Card >
      <template #title> Thông tin bổ sung </template>
      <template #content>
        <h3>Loại sản phẩm</h3>
        <span class="p-fluid">
          <Dropdown
            v-model="typeproduct"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            placeholder="Chọn loại sản phẩm"
            :editable="true"
          />
        </span>
        <i class="pi pi-plus" @click="openModal"></i>
        <Dialog
          header="Thêm loại sản phẩm"
          v-model:visible="displayModal"
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
            <Button label="Thoát" @click="closeModal" class="p-button-text" />
            <Button
              label="Thêm loại sản phẩm"
              class="p-button-success"
              @click="showBottomRight"
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
  },
};
</script>
<style lang=""></style>
