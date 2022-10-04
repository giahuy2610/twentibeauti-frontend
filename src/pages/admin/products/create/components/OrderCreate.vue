<template lang="">
  <div class="ordercreate">
    <h2>Thông tin chung</h2>
    <p>Ghi nhận số lượng Tồn kho ban đầu và Giá vốn</p>
    <hr width="100%" align="center" />
    <div class="order">
      <div class="orderinf">
        <p>Tồn kho ban đầu</p>
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
      <div class="orderinf">
        <p>Giá vốn</p>
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
.ordercreate {
    display: flex;
    flex-direction: column;
    border: 1px solid #aaa;
    border-radius: 10px;
    padding: 20px;
    width: 60%;
    margin-top: 10px;
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
