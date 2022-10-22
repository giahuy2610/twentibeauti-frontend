<template lang="">
  <div>
    <Header></Header>
    <div
      style="margin-top: 130px"
      :class="{
        'm-0': $route.path === '/product' || $route.path === '/checkout',
      }"
    >
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "@/components/store/home/header/Header.vue";
import Footer from "@/components/store/home/footer/Footer.vue";
</script>
<style lang=""></style>
