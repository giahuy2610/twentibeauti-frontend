<template lang="">
  <div class="productprice">
    <Card>
      <template #title> Giá sản phẩm</template>
    <template #content>
    <div class="price">
        <div class="priceinf">
            <p>Giá bán lẻ</p>
          <span class="p-fluid">
            <AutoComplete
              style="color: blue"
              v-model="retailprice"
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
              v-model="importprice"
              :suggestions="filteredCountries"
              @complete="searchCountry($event)"
              optionLabel="price"
              placeholder="0"
            />
          </span>
        </div>
      </div>
    </template>
    </Card>
    
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.productprice {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
