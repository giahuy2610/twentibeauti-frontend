<template lang="">
  <div class="button">{{ message }}</div>
</template>
<script>
export default {
  props: {
    message: {
        type: String,
        default: "Xem thêm sản phẩm",        
    }

  },
};
</script>
<style lang="scss">
.button {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  cursor: pointer;
  border: 3px solid #94c83d;
  border-radius: 550px;
  box-shadow: inset 0 0 0 0 #94c83d;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;
  font-weight: bold;

  &:hover {
    box-shadow: inset 300px 0 0 0 #94c83d;
    color: #fff;
  }
}
</style>
