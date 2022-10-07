<template lang="">
  <div class="addinfo">
    <Card>
      <template #title> Khởi tạo kho hàng</template>
      <template #subtitle>
        Ghi nhận số lượng Tồn kho ban đầu và Giá vốn của sản phẩm
    </template>
      <template #content>
    <div class="order">
        <div class="orderinf">
            <p>Tồn kho ban đầu</p>
          <span class="p-fluid">
            <AutoComplete
              style="color: blue"
              v-model="order"
              :suggestions="filteredCountries"
              @complete="searchCountry($event)"
              optionLabel="price"
              placeholder="0"
            />
          </span>
        </div>
        <div class="orderinf">
            <p>Giá vốn</p>
          <span class="p-fluid">
            <AutoComplete
              v-model="pricepro"
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
.addinfo {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .order{
    display: flex;
    flex-direction: row;
    
    .orderinf{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-right: 10px;
      }
  }
  

}
</style>
