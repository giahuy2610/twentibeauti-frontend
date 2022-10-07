<template lang="">
  <div class="right-column">
    <div class="header">Đơn hàng</div>
    <div class="scrollmenu">
      <a href="#home">Tất cả</a>
      <a href="#blog">Chờ xác nhận</a>
      <a href="#tools">Đang chuẩn bị đơn</a>
      <a href="#news">Đang giao</a>
      <a href="#contact">Đã giao</a>
      <a href="#about">Đã hủy</a>
      <a href="#support">Đơn không thành công</a>
    </div>
    <div class="search">
      <span class="p-fluid">
        <div class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText type="text" v-model="value3" placeholder="Tìm kiếm" />
        </div>
      </span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.right-column {
  display: flex;
  float: right;
  width: 60%;
  min-height: 200px;
  flex-direction: column;
  gap: 10px;
  .header {
    display: block;
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    box-sizing: border-box;
  }

  .p-input-icon-left {
    width: 100%;
  }
}

.scrollmenu {
  background-color: #fff;
  overflow: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
.scrollmenu a {
  display: inline-block;
  color: #333;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}
.scrollmenu a:hover {
  background: rgb(228, 241, 205);
  color: #aed56b;
  font-weight: 600;
}
</style>
