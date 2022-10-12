<template lang="">
  <div class="card-wrapper shadow-2">
    <div class="top flex align-items-center">
      <i class="pi pi-user"></i>
      <h3 class="ml-1">{{ userName }}</h3>
      <h5 style="margin-left: auto">{{ userPoint }} điểm</h5>
    </div>
    <div class="bar-code flex justify-content-center">
      <Skeleton shape="square" size="100px" class="mr-2" v-show="!isLoaded">
      </Skeleton>
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=0902"
        alt="qr"
        @load="isLoaded = true"
        v-show="isLoaded"
      />
    </div>
    <div class="phone flex justify-content-between">
      <p class="font-bold">SĐT tích điểm</p>
      <p>{{ userPhone }}</p>
    </div>
    <div class="point-reward"></div>
  </div>
</template>
<script>
import { useIndexStorePinia } from "@/stores/index.js";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: {
    ...mapState(useIndexStorePinia, {
      userName: "userName",
      userPhone: "userPhone",
      userPoint: "userPoint",
    }),
  },
};
</script>
<style lang="scss" scoped>
.card-wrapper {
  padding: 0 1rem;
  border-radius: 10px;
}
</style>
