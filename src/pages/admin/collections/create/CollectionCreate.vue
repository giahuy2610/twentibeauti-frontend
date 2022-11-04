<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div
          class="header-wrapper__left flex align-items-center cursor-pointer"
          @click="$router.push({ path: '/admin/collections' })"
        >
          <i class="pi pi-angle-left"></i>
          <span>Quay lại</span>
        </div>
        <div class="header-wrapper__right">
          <Button label="Hủy" class="p-button-outlined p-button-danger" />
          <Button
            label="Xem trước"
            class="p-button-success"
            @click="$router.push({ path: '/collections' })"
          />
          <Button label="Lưu" class="p-button-info" />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper flex">
        <div class="left-content">
          <div>
            <AddInfor> </AddInfor>
          </div>

          <Card>
            <template #title> Xem trước kết quả tìm kiếm </template>
            <template #content>
              Xin hãy nhập Tiêu đề và Mô tả để xem trước kết quả tìm kiếm của
              danh mục này
            </template>
          </Card>
        </div>
        <div class="right-content">
          <Card>
            <template #title> Trạng thái</template>
            <template #content>
              <div class="field-radiobutton px-3">
                <RadioButton
                  inputId="statusHide"
                  name="status"
                  value="Ẩn"
                  v-model="status"
                />
                <label for="status1">Ẩn</label>
              </div>
              <div class="field-radiobutton px-3">
                <RadioButton
                  inputId="statusShow"
                  name="status"
                  value="Hiện"
                  v-model="status"
                />
                <label for="statusShow">Hiện</label>
              </div>
              <div class="p-2">Đặt lịch hiển thị</div>
            </template>
          </Card>
          <Card>
            <template #title> Ảnh danh mục </template>
            <template #content>
              <div>
                <AddFileVue></AddFileVue>
              </div>
            </template>
          </Card>
          <Card>
            <template #title> Gắn lên menu </template>
            <template #content>
              <div class="flex justify-content-between">
                <div>Gắn danh mục vào menu</div>
                <div>Chọn menu</div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../../AdminBlankPage.vue";
import AddFileVue from "../../products/components/AddFile.vue";
import AddInfor from "../component/AddInfor.vue";

export default {
  components: {
    AdminBlankPage,
    AddFileVue,
    AddInfor,
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-wrapper__left:hover {
    color: var(--primary-color);
  }

  .header-wrapper__right {
    display: flex;
    gap: 10px;
  }
}
.right-content {
  padding: 10px;
}
.right-content h3 {
  padding: 10px;
}
.p-card {
  padding: 5px;
}
:deep(.p-card) {
  padding: 5px;
  margin: 4px;
  border-radius: 13px;
}
</style>
