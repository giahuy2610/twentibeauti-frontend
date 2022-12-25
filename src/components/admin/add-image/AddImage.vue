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
        severity: "success",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
    onUpload(event) {
      var $files = $("input[type=file]").get(0).files;
      var self = this;
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
      var urlList = [];
      for (var i = 0; i < event.files.length; i++) {
        var formData = new FormData();
        formData.append("image", event.files[i]);
        settings.data = formData;
        $.ajax(settings).done(function (response) {
          console.log(JSON.parse(response).data.link);
          urlList.push(JSON.parse(response).data.link);
        });
      }
      self.$emit("geturl", urlList);
      this.toastSuccess();
    },
    emits: ["geturl"],
    data() {
      return {
        result: null,
      };
    },
  },
  emitUrl(link) {
    console.log(link);
    this.$emit("geturl", link);
  },
};
</script>
<style lang=""></style>
