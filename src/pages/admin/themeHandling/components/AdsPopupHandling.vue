<template lang="">
  <div class="ads-wrapper">
    <div class="time-handling">
      <label for="startOnPicker">Ngày bắt đầu</label>
      <Calendar
        inputId="startOnPicker"
        v-model="startOn"
        :showTime="true"
        :showSeconds="true"
      />
      <label for="endOnPicker">Ngày kết thúc</label>
      <Calendar
        inputId="endOnPicker"
        v-model="endOn"
        :showTime="true"
        :showSeconds="true"
      />
      <Button
        type="button"
        label="Xem trước"
        icon="pi pi-external-link"
        class="p-button-info"
        badgeClass="p-badge-danger"
        @click=""
      />
    </div>
    <div class="time-handling">
      <Inplace :closable="true">
        <template #display>
          <Button
            type="button"
            label="Chỉnh sửa"
            icon="pi pi-pencil"
            class="p-button-outlined"
            badgeClass="p-badge-danger"
            @click="visibleAdsOverlay"
          />
        </template>
        <template #content>
          <div class="edit">
            <label for="inputImg">Hình ảnh</label>
            <FileUpload
              mode="basic"
              name="demo[]"
              url="./upload.php"
              accept="image/*"
              :maxFileSize="1000000"
              @upload="onUpload"
            />
            <label for="inputRoute">Đường dẫn</label>
            <InputText id="inputRoute" v-model="text" autoFocus />
          </div>
        </template>
      </Inplace>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startOn: new Date(),
      endOn: new Date(),
      visibleAdsOverlay: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.ads-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  //   justify-content: center;
  //   align-items: center;

  .time-handling,
  .edit {
    display: flex;
    align-items: center;
    gap: 1rem;

    label {
      font-weight: bold;
    }
  }
}
</style>
