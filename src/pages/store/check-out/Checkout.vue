<template lang="">
  <Wrapper>
    <div class="content">
      <Header></Header>
      <Bodypay></Bodypay>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
import Header from "./components/Header.vue";
import Bodypay from "./components/body/Bodypay.vue";

export default {
  components: {
    Wrapper,
    Header,
    Bodypay,
  },
  data() {
    return {
      pay: null,
      checked: false,
      transport: null,
    };
  },
};
</script>
<style lang="scss" scoped></style>
