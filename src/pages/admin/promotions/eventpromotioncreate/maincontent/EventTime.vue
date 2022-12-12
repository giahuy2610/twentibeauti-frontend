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
import moment from "moment";

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
  // created() {
  //   this.getEventPromoItem._startDate = moment().format("L");
  //   // this.getEventPromoItem._startTime = moment().format('LT');
  // },
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
