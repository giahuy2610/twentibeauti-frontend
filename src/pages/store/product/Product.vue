<template lang="">
    <div class="over">
        <div class="scroll-wrapper" ref="wrapper" >
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
        <div class="infor">
          <div class="link-item">
            <nav class="item-breadcrumb">
              <ol>
                <li>
                  <span class="twtenti-breadcrumb-link">
                    <a role="presentation" class="breadcrumb-link" href="/">Trang chủ</a>
                  </span>
                  <span class="twenti-breadcrum-seperator">></span>
                </li>
                <li>
                  <span class="twtenti-breadcrumb-link">
                    <a role="presentation" class="breadcrumb-link" href="/product"> Sản phẩm</a>
                  </span>
                  <span class="twenti-breadcrum-seperator">></span>
                </li>
              </ol>
            </nav>

          </div>
          

        </div>
    </div>
</template>
<script>
  
</script>


<style lang="scss" scoped>

  .over 
  {
    
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100vw;
  }

  .item-breadcrumb
  {
    font-size: 12px;
    line-height: 18px;
    text-size-adjust: 100%;
    ol
    {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
        li{
          a{
            color: #797979 ;
            background-color: transparent;
            transition: color .3s;
            text-decoration: none;
            touch-action: manipulation;
          }
          a:hover
            {
              color: #000000;
              text-decoration: underline;
            }

          li:last-child > .twenti-breadcrumb-separator 
          {
            display: none;
          }
          
          .twenti-breadcrum-seperator
          {
            margin-left: 4px;
            margin-right: 4px;
          }
          
        }
    }
  }

  .scroll-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: scroll;
    scroll-behavior: smooth;
    flex-basis: 250px;
    


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