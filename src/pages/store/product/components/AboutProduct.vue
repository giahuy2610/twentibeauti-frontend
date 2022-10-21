<template lang="">
    <div class="divider-horizontal"></div>
    <div class="flex-row">
        <div class="left-col">
            <div class>
                <h2>Giới thiệu</h2>
            </div>
        </div>
        <RightAbout></RightAbout>
    </div>
</template>
<script>
import RightAbout from '../components/aboutproduct/RightAbout.vue';
export default {
  components: {
    RightAbout,
  }
};
</script>
<style lang="scss" scoped>
.inline {
  display: inline-block;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.divider-horizontal {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin: 3rem 0rem;
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  font-size: 14px;
  line-height: 1.5715;
}
.left-col {
  h2 {
    width: 25rem;
  }
}

</style>