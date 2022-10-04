<template lang="">
  <div>
    <Toast />

    <h5>Advanced</h5>
    <FileUpload
      name="demo[]"
      url="./assets"
      @upload="onUpload"
      :multiple="true"
      accept="image/*"
      :maxFileSize="1000000"
    >
      <template #empty>
        <p>Drag and drop files to here to upload.</p>
      </template>
    </FileUpload>
  </div>
</template>
<script>
export default {
  methods: {
    onUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
  },
};
</script>
<style lang=""></style>
