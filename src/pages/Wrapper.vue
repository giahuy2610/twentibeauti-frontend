<template lang="">
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/mixin";
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 60px;

  .content {
    width: 100%;
    max-width: 1300px;
  }

  @include mobile {
    padding: 1rem;
  }
  @include mini-tablet {
    padding: 1.5rem;
  }
  @include tablet {
    padding: 2rem;
  }
  
}
</style>
