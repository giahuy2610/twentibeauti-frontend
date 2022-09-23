<template lang="">
  <div class="flash-sale">
    <div class="flash-sale__top">
      <img src="@/assets/flashsalelogo.png" alt="Flash Sale 24H" />

      <div v-if="timeLeft === 0" class="time-out-msg">
        Flash Sale đã kết thúc
      </div>

      <div v-else class="count-down">
        <div>{{(timeLeft.days).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}} NGÀY</div>
        <div class="divider"></div>
        <div>{{(timeLeft.hours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}} GIỜ</div>
        <div class="divider"></div>
        <div>{{(timeLeft.minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}} PHÚT</div>
        <div class="divider"></div>
        <div>{{(timeLeft.seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}} GIÂY</div>
      </div>
      <div
        class="button-more"
        @click="
          $router.push({ path: '/collections/flash-sale', replace: true })
        "
      >
        Xem tất cả
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 1
      }
    };
  },
};
</script>
<style lang="scss" scoped>
.flash-sale {
  width: 100%;
  border-radius: 20px;
  background-color: orange;
  padding: 20px;

  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 100px;
    }

    .button-more {
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
    }

    .count-down {
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      text-align: center;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;

      .divider {
        margin: 0 10px;
        height: inherit;
        border: 1px solid gray;
      }
    }
  }
}
</style>
