<template lang="">
  <span class="input p-input-icon-left">
    <i class="pi pi-search" />
    <InputText
      v-if="_appliedMode == 'B'"
      @input="onShow"
      placeholder="Tìm kiếm danh mục"
    />
    <!--v-model="filters['global'].value"!-->
    <InputText
      v-if="_appliedMode == 'C'"
      @input="onShow"
      placeholder="Tìm kiếm sản phẩm"
    />
  </span>
  <Button class="button p-button-outlined" label="Tìm kiếm" @click="onShow()" />
  <DynamicDialog />
</template>
<script>
import { h } from "vue";
import Button from "primevue/button";
import EventProductList from "@/pages/admin/promotions/components/dialogdatatable/EventProductList.vue";
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  components: { EventProductList },
  computed: {
    ...mapWritableState(useEventStorePinia, {
      eventPromotion: "eventPromotion",
    }),
  },
  methods: {
    onShow() {
      //console.log(this.$dialog)
      const dialogRef = this.$dialog.open(EventProductList, {
        data() {
          return {
            _appliedMode: "B",
          };
        },

        props: {
          header: "Product List",
          position: "top",
          style: {
            width: "50vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
          modal: true,
        },
        templates: {
          footer: () => {
            return [
              //h(Button, { label: "No", icon: "pi pi-times", onClick: () => dialogRef.close({ buttonType: 'No' }), class: "p-button-text" }),
              h(Button, {
                label: "Yes",
                icon: "pi pi-check",
                onClick: () => dialogRef.close({ buttonType: "Yes" }),
                autofocus: true,
              }),
            ];
          },
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  .p-inputtext {
    width: 100%;
  }
  flex: 1 1 auto;
}
</style>
