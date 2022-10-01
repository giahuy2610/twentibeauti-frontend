
<template lang="">
    <div class="wrapper" :style='[isHidden ? "display: none":""]'>
        <div>
    
            <div class="modal">
               
                <div class="modal-content">
                    <div class="modal-title">abc</div>
                    <slot name="title"></slot>
                    <slot name="context"></slot>
                    <slot name="footer"></slot>
                    <slot name="button"></slot>
                </div>
           
            </div>
        
          </div>
    </div>
  </template>
  <script>
  export default {
      data() {
          return {
              isHidden: false,
          }
      }
  };
  </script>
  <style lang="scss" scoped>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000000000000000000000000;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overscroll-behavior: contain;
    height: 200vh;


    .modal {
        position:fixed;
        width: 500px;
        left:calc(50% - 250px);
        top: 200px;
        //-webkit-scrollbar{ display: none; }
        height: 200vh;
        
    .modal-content {
        width: 100%;
        position: relative;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.7);
        outline: none;
        border-radius: 10px;
        height: 700vh;

    }
    }
  }
  </style>
  