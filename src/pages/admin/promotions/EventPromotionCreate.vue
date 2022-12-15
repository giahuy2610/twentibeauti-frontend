<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div>
          <span>Khuyến mãi chưa được lưu</span>
        </div>
        <div class="header-wrapper__right">
          <Button
            label="Hủy"
            class="p-button-outlined p-button-danger"
            disabled="disabled"
          />
          <Button
            v-if="$route.path != '/admin/promotions/event/create'"
            label="Cập nhật"
            class="p-button-info"
            @click="updateEvent"
          />
          <Button
            v-else
            label="Lưu"
            class="p-button-info"
            @click="createEvent"
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper">
        <MainContent></MainContent>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "@/pages/admin/AdminBlankPage.vue";
import MainContent from "@/pages/admin/promotions/eventpromotioncreate/MainContent.vue";
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapActions,mapWritableState } from "pinia";
export default {
  components: {
    AdminBlankPage,
    MainContent,
  },
  computed: {
    ...mapWritableState(useEventStorePinia, {
      eventPromotion: "eventPromotion",
    }),
  },
  methods: {
    ...mapActions(useEventStorePinia, {
      createEvent: "createEvent",
      getEvent: "getEvent",
      updateEvent: "updateEvent",
    }),
    save: function() {
      if(
        this.eventPromotion.NameEvent== null || this.eventPromotion.NameEvent == '' ||
        this.eventPromotion.ValueDiscount == null || this.eventPromotion.ValueDiscount == ''
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Chưa điền đầy đủ thông tin",
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Thêm chương trình khuyến mãi thành công",
          life: 3000,
        });
        this.createEvent();
      }
    },
  },
  async mounted() {
    if (this.$route.path.split("/")[4] == "edit")
      await this.getEvent(this.$route.params.id);
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-wrapper__left:hover {
    color: var(--primary-color);
  }

  .header-wrapper__right {
    display: flex;
    gap: 10px;
  }
}
.main-wrapper {
  margin: 1rem;
  .product-table {
    width: 100%;
  }
}
/*
  ::v-deep(.p-card) {
    border-radius: 10px;
  }
  */
::v-deep(.p-card-title) {
  font-size: 1rem !important;
  font-weight: 500 !important;
}
::v-deep(.p-card-content) {
  padding: 0rem 0 !important;
}
::v-deep(.field-checkbox) {
  label {
    cursor: pointer;
  }
  margin-bottom: 0rem;
}
::v-deep(.field-checkbox) {
  label {
    cursor: pointer;
  }
  margin-bottom: 0rem;
}
::v-deep(.p-radiobutton) {
}
</style>
