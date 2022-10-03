<template lang="">
    <div class="over">
        <ImageProduct></ImageProduct>
        <div class="infor">
          <div class="link-item">
            <nav class="item-breadcrumb">
              <ol>
                <li>
                  <span class="twtenti-breadcrumb-link">
                    <p role="presentation" class="breadcrumb-link" @click="$router.push({ path: '/', replace: true })" >Trang chủ </p>
                  </span>
                  <span class="twenti-breadcrum-seperator">></span>
                </li>
                <li>
                  <span class="twtenti-breadcrumb-link">
                    <p role="presentation" class="breadcrumb-link" @click="$router.push({ path: '/product', replace: true })" >Sản phẩm </p>
                  </span>
                  <span class="twenti-breadcrum-seperator">></span>
                </li>
              </ol>
            </nav>
          </div>
          <div class="product-header-wrapper">
            <div class="product-header">
              <div class="brand-name" role="presentation" @click="$router.push({ path: '/collections', replace: true })">TWENTI BEAUTI </div>
              <h1 class="info-title">Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)</h1>
            </div>
          </div>
          <div class="product-rating-align">
            <div class="product-rating">
              <div class="space-item">
                <a href="/product#product-review">
                  <div class="rate-section">
                    <ul>
                      <li class="rate-star-full">
                        <div class="rate-star-first">
                          <span class="anticon-star">
                            <svg viewBox="64 64 896 896">
                              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="rate-star-first">
                          <span class="anticon star">
                            <svg viewBox="64 64 896 896">
                              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="rate-star-first">
                          <span class="anticon star">
                            <svg viewBox="64 64 896 896">
                              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="rate-star-first">
                          <span class="anticon star">
                            <svg viewBox="64 64 896 896">
                              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="rate-star-first">
                          <span class="anticon star">
                            <svg viewBox="64 64 896 896">
                              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>


        </div>
    </div>
</template>
<script>
import ImageProduct from "@/pages/store/product/components/ImageProduct.vue";
export default {
    components: {
        ImageProduct,
    },
};
</script>


<style lang="scss" scoped>
.over {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100vw;
}
.product-rating-align
{
  font-size: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .product-rating
  {
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    display: inline-flex;
    .space-item
    {
      position: relative;
      text-size-adjust: 100%;
      a
      {
        color:#000000;
        .rate-section
        {
          display: flex;
          white-space: nowrap;
          -webkit-box-align: center;
          align-items: center;
          ul
          {
            
            list-style-type: none;
            display: inline-block;
            font-size: 14px !important;
            margin-right: 10px !important;
            .rate-star-full.ant-rate-star:not(:last-child)
            {
              margin-right: 8px;
            }
            .rate-star-full
            {
              position: relative;
              display: inline-block;
              color: inherit;
              .rate-star-first
              {
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                overflow: hidden;
                opacity: 0;
                color: #f0f0f0;
                transition: all .3s;
                .anticon-star
                {
                  vertical-align: middle;
                  display: inline-block;
                  color: inherit;
                  font-style: normal;
                  line-height: 0;
                  text-align: center;
                  text-transform: none;
                  svg
                  {
                    path
                    {

                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.product-header-wrapper {
  .product-header {
    div 
    {
      margin-bottom: 18px;
    }
    line-height: 20px;
    font-size: 14px;

    .brand-name 
    {
      color: var(--primary-color);
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .brand-name:hover
      {
        text-decoration: underline;
      }
    .info-title {
      font-size: 18px;
      width: 95%;
    }
  }
}

.item-breadcrumb {
  font-size: 12px;
  line-height: 18px;
  text-size-adjust: 100%;
  margin-bottom: 5px;
  ol {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    li {
      span
      {
        .twenti-breadcrum-seperator {
          margin-left: 4px;
          margin-right: 4px;
        }

        p {
          display: inline;
          color: #797979;
          background-color: transparent;
          transition: color 0.3s;
          text-decoration: none;
          touch-action: manipulation;
        }
        p:hover {
          color: #000000;
          text-decoration: underline;
        }
      }
      :last-child span.twenti-breadcrumb-separator 
      {
        display: none;
      }
    }
  }
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

</style>