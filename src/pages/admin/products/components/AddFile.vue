<template lang="">
  <div>
    <Toast />
    <FileUpload
      name="demo[]"
      @uploader="onUpload"
      :customUpload="true"
      :multiple="true"
      :withCredentials="true"
      accept="image/*"
      :maxFileSize="10000000"
    >
      <template #empty>
        <p>Drag and drop files to here to upload.</p>
      </template>
    </FileUpload>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  methods: {
    toastSuccess() {
      console.log("Success!");
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
    onUpload(event) {
      var $files = $("input[type=file]").get(0).files;

      var apiUrl = "https://api.imgur.com/3/image";
      var apiKey = "99d036fd40d9ea2";
      var settings = {
        async: false,
        crossDomain: true,
        processData: false,
        contentType: false,
        type: "POST",
        url: apiUrl,
        headers: {
          Authorization: "Client-ID " + apiKey,
          Accept: "application/json",
        },
        mimeType: "multipart/form-data",
      };
      var formData = new FormData();
      // console.log($files[0].type, $files.type);
      formData.append("image", event.files[0]);
      settings.data = formData;
      $.ajax(settings).done(function (response) {
        this.$emit("geturl", link);
      });
      this.toastSuccess();
    },
  },
};
</script>
<style lang=""></style>
