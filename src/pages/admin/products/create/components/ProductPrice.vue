<template lang="">
  <div class="productprice">
    <h2>Giá sản phẩm</h2>
    <hr width="100%" align="center" />
    <div class="price">
        <div class="priceinf">
            <p>Giá bán lẻ</p>
          <span class="p-fluid">
            <AutoComplete
              style="color: blue"
              v-model="text1"
              :suggestions="filteredCountries"
              @complete="searchCountry($event)"
              optionLabel="price"
              placeholder="0"
            />
          </span>
        </div>
        <div class="priceinf">
            <p>Giá nhập</p>
          <span class="p-fluid">
            <AutoComplete
              v-model="text2"
              :suggestions="filteredCountries"
              @complete="searchCountry($event)"
              optionLabel="price"
              placeholder="0"
            />
          </span>
        </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.productprice {
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa;
  border-radius: 10px;
  padding: 20px;
  width: 60%;
  margin-top: 10px;
  .price{
    display: flex;
    flex-direction: row;
    
    .priceinf{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-right: 10px;
      }
  }
  

}
</style>
