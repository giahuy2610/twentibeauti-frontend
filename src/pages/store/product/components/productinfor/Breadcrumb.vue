<template lang="">
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
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.breadcrumb-link {
  cursor: pointer;
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
            margin: 0px 2px;
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
        }
        li:last-child .twenti-breadcrum-seperator
        {
            display: none;
        }
    }
    li {
      span {
        margin: 0px 2px;
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
    }
  }
</style>