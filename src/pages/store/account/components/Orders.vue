<template lang="">
  <div class="right-column">
    <div class="header">Đơn hàng</div>
    <div class="scrollmenu">
      <!-- <a href="#home"></a>
      <a href="#blog"></a>
      <a href="#tools"></a>
      <a href="#news"></a>
      <a href="#contact"></a>
      <a href="#about"></a>
      <a href="#support"></a> -->
      <a
        v-for="(item, index) in title"
        :class="index === selected ? 'active' : ''"
        @click="selected = index"
        >{{ item }}</a>
    </div>
    <div class="search">
      <span class="p-fluid">
        <div class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            style="border-radius: 300px"
            type="text"
            v-model="value3"
            placeholder="Tìm kiếm"
          />
        </div>
      </span>
    </div>
    <div class="my-order">
      <MyOrder></MyOrder>
    </div>
  </div>
</template>
<script>
import MyOrder from "./MyOrder.vue";
export default {
  components: {
    MyOrder,
  },
  data() {
    return {
      selected: 0,
      title: [
        "Tất cả",
        "Chờ xác nhận",
        "Đang chuẩn bị đơn",
        "Đang giao",
        "Đã giao",
        "Đã hủy",
        "Đơn không thành công",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.active {
  color: var(--primary-color) !important;
  border-bottom: 2px solid var(--primary-color);
}
.right-column {
  display: flex;
  float: right;
  width: 60%;
  min-height: 200px;
  flex-direction: column;
  gap: 10px;
  @include mobile {
    width:100%;
    //color:red;
  }
  @include mini-tablet {
    width:100%;
    //color:blue;
  }
  @include tablet {
    width:100%;
    //color:green;
  }
  .header {
    display: block;
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    box-sizing: border-box;
    @include mobile {
      display: none;
    }
    @include mini-tablet {
      display: none;
    }
    @include tablet {
      display: none;
    }
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
  border-left: 1px solid rgba(198, 197, 197, 0.5);
  border-right: 1px solid rgba(198, 197, 197, 0.5);
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
  cursor: pointer;
}
</style>
