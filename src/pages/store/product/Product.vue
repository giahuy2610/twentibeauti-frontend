<template lang="">
    <div class="over">
        <div class="scroll-wrapper" ref="wrapper">
            <Button
                @click="scrollUp"
                icon="pi pi-angle-up "
                class="btn-up p-button-rounded p-button-outlined"
            />
            <Button class="pag p-button-rounded p-button-outlined"/>
            <Button class="pag--down p-button-rounded p-button-outlined"/>
            <Button
              @click="scrollLeft"
              icon="pi pi-angle-down"
              class="btn-down p-button-rounded p-button-outlined"
            />
        </div>
        <div class="img">
          <img src="https://image.hsv-tech.io/400x0/tfs/common/db6c3fd2-2d35-41c3-83ae-af6289768918.webp" alt="Ảnh sản phẩm">
        </div>
        
    </div>
</template>
<script>
  
</script>


<style lang="scss" scoped>
  .over {
    display: flex;
    position: relative;
    width: 100vw;
  }
  .img
  {
    
  }
  .scroll-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: scroll;
    scroll-behavior: smooth;
  
    &::-webkit-scrollbar {
      display: none;
    }
    
    Button{
      left: 10%;
    }
    .pag {
      background-image: url("https://image.hsv-tech.io/400x0/tfs/common/db6c3fd2-2d35-41c3-83ae-af6289768918.webp");
      background-size: 165%;
      background-position: 45% 53%;
      position: absolute;
      width: 2.357rem;
      top: 20%;
      gap: 0.5rem;

      &--down{
        @extend .pag;
        top: 40%;
      }
    }
    .btn-up {
      position: absolute;
      top: 0%;
      z-index: 100;
    }
    .btn-down {
      position: absolute;
      top:  90%;
      z-index: 100;
    }
  
    .appear {
      max-width: 100%;
      display: block;
      animation: fadeIn 0.8s;
      -webkit-animation: fadeIn 0.8s;
      -moz-animation: fadeIn 0.8s;
      -o-animation: fadeIn 0.8s;
      -ms-animation: fadeIn 0.8s;
      cursor: pointer;
  
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
  
      @-moz-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
  
      @-webkit-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
  
      @-o-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
  
      @-ms-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }


</style>