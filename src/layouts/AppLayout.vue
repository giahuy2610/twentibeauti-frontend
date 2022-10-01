<template lang="">
  <div>
    <Header></Header>
    <div style="margin-top: 150px"><router-view></router-view></div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "@/components/store/home/header/Header.vue";
import Footer from "@/components/store/home/footer/Footer.vue";
</script>
<style lang=""></style>
