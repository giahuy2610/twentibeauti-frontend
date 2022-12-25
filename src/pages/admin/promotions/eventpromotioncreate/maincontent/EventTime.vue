<template lang="">
  <div class="eventTime">
    <Card>
      <template #title> Thời gian </template>
      <template #content>
        <Calendar
          inputId="time24"
          v-model="rangeAvailableDate"
          :showTime="true"
          :showSeconds="true"
          selectionMode="range"
        />
      </template>
    </Card>
  </div>
</template>
<script>
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
import { format } from "https://cdn.skypack.dev/date-fns@2.29.3";

export default {
  computed: {
    ...mapWritableState(useEventStorePinia, {
      eventPromotion: "eventPromotion",
    }),
  },
  data() {
    return {
      checked: null,
      onshow3: null,
      rangeAvailableDate: [],
    };
  },
  watch: {
    rangeAvailableDate(newValue, oldValue) {
      this.eventPromotion.StartOn = format(
        new Date(newValue[0]),
        "yyyy-MM-dd HH:mm:ss"
      ).toString();
      this.eventPromotion.EndOn = format(
        new Date(newValue[1]),
        "yyyy-MM-dd HH:mm:ss"
      ).toString();
    },
  },
  async mounted() {
    this.rangeAvailableDate = [
      new Date(this.eventPromotion.StartOn),
      new Date(this.eventPromotion.EndOn),
    ];
  },
};
</script>
<style lang="scss" scoped>
.dateStart {
  display: flex;
  flex-direction: row;
  width: 100%;
  .date {
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex: 1 1 auto;
  }
  .time {
    width: 45%;
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
}
</style>
