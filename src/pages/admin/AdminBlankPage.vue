<template lang="">
  <div class="wrapper-blank">
    <header class="shadow-3">
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.wrapper-blank {
  
  header {
    position: fixed;
    z-index: 1000;
    top: 10px;
    right: 0;
    width: calc(100% - 220px);
    height: 70px;
    padding: 1rem 2rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  main {
    padding: 8rem 0rem 0rem 1rem;
    min-height: 100vh;
    background-color: #f0f1f1;
    overflow-x: scroll;
  }
}
::v-deep(.p-hidden-accessible){ display: none; }

</style>
