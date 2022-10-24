<template lang="">
    <div class="overlay">
        <div class="popup" >
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.overlay {
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.popup {
  width: 1000px;
  transform-origin: 190.8px 136px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: 14px;
  line-height: 1.5715;
  position: relative;
  top: 100px;
  margin: 0 auto;
  padding: 0 0 24px;
}
.content {
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 10px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
}
</style>