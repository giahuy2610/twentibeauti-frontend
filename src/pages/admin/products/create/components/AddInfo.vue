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
            :options="typeproduct"
            optionLabel="typeproduct"
            optionValue="code"
            placeholder="Chọn loại sản phẩm"
            :editable="true"
            style="width: 100%"
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
            <p>Tên loại sản phẩm</p>
            <InputText
              type="text"
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
        <br />
        <p>Nhãn hiệu</p>
        <div class="flex">
          <Dropdown
            v-model="typeBrand"
            :options="typeBrand"
            optionLabel="typeBrand"
            optionValue="code"
            placeholder="Chọn nhãn hiệu"
            :editable="true"
            style="width: 100%"
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
            <p>Tên nhãn hiệu</p>
            <InputText
              type="text"
              v-model="nameBrand"
              :class="{ 'p-invalid': isValidNameBrand }"
            />
            <small id="username2-help" class="p-error" v-if="isValidNameBrand"
              >Tên chỉ được chứa chữ và số</small
            >
            <p>Đường dẫn</p>
            <InputText
              type="text"
              v-model="inputPath"
              :class="{ 'p-invalid': isValidInputPath }"
            />
            <small id="username2-help" class="p-error" v-if="isValidInputPath"
              >Đường dẫn không chứa kí tự đặc biệt và khoảng cách</small
            >
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
            :options="Tags"
            optionLabel="Tags"
            optionValue="code"
            placeholder="Tags"
            :editable="true"
            style="width: 100%"
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
            <p>Nhãn hiệu</p>
            <InputText
              type="text"
            />
          </span>
          <template #footer>
            <Button
              label="Thoát"
              @click="closeShowTags"
              class="p-button-text"
            />
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
      nameBrand: null,
      displayModal: false,
      messages: [],
      displayModalCate: false,
      displayTags: false,
      inputPath: null,
      isValidNameBrand: false,
      isValidInputPath: false,
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
    checkValid(value) {
      //the url is only include letters, numbers and dashes
      return !/^[a-zA-Z-0-9-_ ]+$/i.test(value); //return true if the url is wrong
    },
  },
  watch: {
    nameBrand: {
      handler(newValue, oldValue) {
        if (newValue === "") {
          this.isValidNameBrand = false;
          this.inputPath = "";
          return;
        }
        //check if invalid
        //replace spaces with '-' and transfer to en-us format letter
        this.isValidNameBrand = this.checkValid(newValue);
        if (this.isValidNameBrand) {
          this.inputPath = "";
          return;
        }

        this.inputPath =
          "/collections/" +
          newValue
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/ /g, "-");
      },
      deep: true,
    },
    inputPath: {
      handler(newValue, oldValue) {
        if (newValue === "") {
          this.isValidInputPath = false;
          return;
        }
        //check if invalid
        //replace spaces with '-' and transfer to en-us format letter
        //slice(13,...tail) to remove the prefix "/collections/"
        //only storing the path of product, like: "the-face-shop" without the  prefix "/collections/"
        this.isValidInputPath = this.checkValid(newValue.slice(13));
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.addinfo {
  padding-bottom: 20px;
}
</style>
