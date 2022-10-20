<template lang="">
    <div class="body">
        <div class="wrap-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.body {
    padding: 24px;
    padding-top: 0px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  
    .wrap-content {
      box-sizing: content-box;
      margin-left: auto;
      margin-right: auto;
      max-width: 1300px;
      position: relative;
      width: 90%;
    }
}
</style>