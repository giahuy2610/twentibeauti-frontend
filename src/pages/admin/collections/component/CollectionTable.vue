<template>
  <div class="wrapper">
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="imgCategory" header="Image"></Column>
      <Column field="category" header="Danh mục"></Column>
      <Column field="description" header="Mô tả"></Column>
      <Column field="condition" header="Điều kiện"></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
