<template lang="">
  <div class="left">
    <infcusVue></infcusVue>
    <infpayVue></infpayVue>
    <inftransport></inftransport>
    
  </div>
</template>
<script>
  import infcusVue from './left/Infcus.vue';
  import infpayVue from './left/Infpay.vue';
  import inftransport from './left/InfTransport.vue'

export default {
  components: {
    infcusVue,
    infpayVue,
    inftransport
  },
  
};
</script>
<style lang="scss" scoped>
.left {
  margin-left: 20px;
  padding-right: 10pt;
  width: 70%;

  
  
  }
 

</style>
