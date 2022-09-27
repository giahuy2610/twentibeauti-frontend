<template lang="">
  <div class="wrapper">
    <div class="wrapper__content">
      <Accordion :multiple="true" :activeIndex="[0]">
        <AccordionTab header="Giá sản phẩm">
          <div
            class="field-checkbox"
            v-for="(item, index) in priceFilter.titleArr"
          >
            <Checkbox
              :inputId="index"
              name="priceFilterCheckbox"
              :value="index"
              v-model="priceFilter.selectedArr"
            />
            <label :for="index">{{ item }}</label>
          </div>
        </AccordionTab>
        <AccordionTab header="Loại sản phẩm">gia huy xin chao</AccordionTab>
        <AccordionTab header="Dòng sản phẩm">gia huy xin chao</AccordionTab>
      </Accordion>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Sản phẩm mới",
    },
  },
  data() {
    return {
      priceFilter: {
        titleArr: [
          "Dưới 500.000đ",
          "500.000₫ - 1.000.000₫",
          "1.000.000₫ - 1.500.000₫",
          "1.500.000₫ - 2.000.000₫",
          "Trên 2.000.000₫",
        ],
        selectedArr: [],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: 100%;

  &__content {
  }
}
</style>
