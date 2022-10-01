<template lang="">
  <div class="wrapper-c">
    <div class="side-bar-c">
      <SideBar></SideBar>
    </div>
    <div class="main-content-c">
      <router-view></router-view>
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
.wrapper-c {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: yellow;
  overflow: hidden;

  .side-bar-c {
    width: 100%;
    max-width: 200px;
    height: 100vh;
    overflow-y: scroll;
    background-color: red;
  }
  .main-content-c {
    width: 100%;
    height: 100vh;
    background-color: blue;
    overflow-y: scroll;
  }
}
</style>
