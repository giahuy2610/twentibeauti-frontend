<template lang="">
  <div class="wrapper-c">
    <div class="side-bar-c">
      <SideBar></SideBar>
    </div>
    <div class="main-content-c">
      <router-view></router-view>
    </div>
  </div>
  <div class="wrapper-screen-impossible">
    <img src="@/assets/adminBlank.svg" alt="" />
    <h2>Kích thước màn hình không phù hợp</h2>
    <div class="buttons">
      <Button
        label="Về trang cửa hàng"
        icon="pi pi-angle-right"
        iconPos="right"
        class="p-button-info p-button-rounded"
        @click="$router.push({ path: '/' })"
      />
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/admin/side-bar/SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.wrapper-c {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @include mobile {
    display: none;
  }
  @include mini-tablet {
    display: none;
  }
  @include tablet {
    display: none;
  }

  .side-bar-c {
    width: 100%;
    max-width: 200px;
    height: 100vh;
    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .main-content-c {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
  }
}

.wrapper-screen-impossible {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 60vw;
  }

  h2 {
    margin: 1rem;
    text-align: center;
  }

  @include mobile {
    display: flex;
  }
  @include mini-tablet {
    display: flex;
  }
  @include tablet {
    display: flex;
  }
}
</style>
