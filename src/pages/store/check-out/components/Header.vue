<template lang="">
  <div class="link-header">
      <nav class="header">
        <ol>
          <li>
            <span class="breadcrumb-link">
              <p class="bd-link" @click="$router.push({ path: '/', replace: true })" >Trang chủ </p>
            </span>
            <span class="seperator">></span>
          </li>
          <li>
            <span class="breadcrumb-link">
              <p class="bd-link" @click="$router.push({ path: '/checkout', replace: true })" >Thanh toán </p>
            </span>
            <span class="seperator">></span>
          </li>
        </ol>
      </nav>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.header{
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
      :last-child span.separator 
      {
          display: none;
      }
      }
  }
}
</style>