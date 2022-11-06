<template lang="">
    <div class="promoType">
        <Card>
            <template #title>
                <span>Loại khuyến mãi</span>
            </template>
            <template #content>
                <div v-for="category of categories" :key="category.key" class="field-radiobutton">
                    <RadioButton :inputId="category.key" name="category" :value="category.name" v-model="selectedCategory" :disabled="category.key === 'R'" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </template>
        </Card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [
        { name: "Theo phần trăm", key: "A" },
        { name: "Theo số tiền", key: "M" },
      ],
      selectedCategory: null,
    };
  },
  created() {
    this.selectedCategory = this.categories[1].name;
  },
};
</script>
<style lang="scss" scoped>
.field-radiobutton:last-of-type
{
    margin-bottom: 0rem;
}
</style>