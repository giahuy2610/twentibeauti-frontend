<template lang="">
    <Wrapper>
        <div class="content">
          <div style="height:150px ;width:100px"></div>
            <Header></Header>
            <Bodypay></Bodypay>
            <Footer></Footer>
        </div>
    </Wrapper>
</template>
<script>
    import Wrapper from "../../Wrapper.vue";
    import Header from "./components/Header.vue";
    import Bodypay from "./components/body/Bodypay.vue";
    import Footer from "./components/Footer.vue";
    export default {
      components: {
        Wrapper,
        Header,
        Bodypay,
        Footer
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
<style lang="">
    
</style>