<template lang="">
  <div class="header">
    <div
      class="header-wrapper__left flex align-items-center cursor-pointer"
      @click="$router.push({ name: 'event promotion' })"
    >
      <i class="pi pi-angle-left"></i>
      <span>Khuyến mãi</span>
    </div>
    <h2>Thêm mới chương trình khuyến mãi</h2>
  </div>
  <div class="main_content">
    <div class="left">
      <EventName></EventName>
      <EventType></EventType>
      <EventValue></EventValue>
      <!-- <EventCondition></EventCondition> -->
      <EventTime></EventTime>
    </div>
    <div class="right">
      <EventCheck></EventCheck>
    </div>
  </div>
</template>
<script>
import EventName from "@/pages/admin/promotions/eventpromotioncreate/maincontent/EventName.vue";
import EventType from "@/pages/admin/promotions/eventpromotioncreate/maincontent/EventType.vue";
import EventValue from "@/pages/admin/promotions/eventpromotioncreate/maincontent/EventValue.vue";
import EventCondition from "@/pages/admin/promotions/eventpromotioncreate/maincontent/EventCondition.vue";
import EventTime from "@/pages/admin/promotions/eventpromotioncreate/maincontent/EventTime.vue";
import EventCheck from "@/pages/admin/promotions/eventpromotioncreate/maincontent/EventCheck.vue";
export default {
  components: {
    EventName,
    EventType,
    EventValue,
    EventCondition,
    EventTime,
    EventCheck,
  },
};
</script>
<style lang="scss" scoped>
.main_content {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  .left {
    width: 70%;
    margin: 10px;
    & > * {
      padding-bottom: 20px;
    }
  }

  .right {
    width: 30%;
    margin: 10px;
  }
}
</style>
