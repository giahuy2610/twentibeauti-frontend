<template lang="">
    <div class="header">
        <h1>Viết đánh giá</h1>
        <Button icon="pi pi-times" class="popup-close p-button-secondary p-button-text p-button-lg" @click="ClosePopup()"/>
      </div>
</template>
<script>
export default {
    props: ["ClosePopup"],
}
</script>
<style lang="scss" scoped>
.header {
    h1 {
      text-align: center !important;
    }
    .popup-close {
      position: absolute;
      text-align: center;
      margin: 20px 32px;
      padding: 10px;
      text-align: center;
      top: 0;
      right: 0;
      z-index: 10;
      color: rgba(0, 0, 0, 0.45);
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      background: transparent;
      border: 0;
      outline: 0;
      cursor: pointer;
      transition: color 0.3s;
    }
  }
</style>