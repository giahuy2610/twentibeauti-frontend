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
//import $ from "jquery";
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
      var apiUrl = "https://api.imgur.com/3/image";
      var apiKey = "99d036fd40d9ea2";
      var formData = new FormData();
      formData.append("image", event.files[0]);
      const clientId = "99d036fd40d9ea2";
      const  auth = "Client-ID " + clientId;
      console.log(event.files[0])
      fetch("https://api.imgur.com/3/image/", {
        // API Endpoint
        async: false,
        crossDomain: true,
        processData: false,
        contentType: false,
        method: "POST", // HTTP Method
        body: formData, // Data to be sent
        headers: {
          // Setting header
          Authorization: auth,
          Accept: "application/json",
        },
                mimeType: "multipart/form-data",
      })
        .then((res) => console.log(res)) // Handling success
        .catch((err) => alert("Failed") && console.log(err)); // Handling error

      // console.log($files[0].type, $files.type);

      //   settings.data = formData;
      //   $.ajax(settings).done(function (response) {
      //     this.emitUrl(response.link);
      //   });
    },
    emits: ["geturl"],
    data() {
        return {
            result: null
        }
    },
  },
  emitUrl(link) {
    this.$emit("geturl", link);
  },
};
</script>
<style lang=""></style>
