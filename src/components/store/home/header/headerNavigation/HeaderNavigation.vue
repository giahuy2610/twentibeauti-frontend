<template lang="">
  <div>
    <MegaMenu :model="items" ></MegaMenu>
    <!-- <MegaMenu :model="items" orientation="vertical" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Khuyến mãi",

          items: [
            [
              {
                items: [{ label: "HOT DEAL ĐỘC QUYỀN THÁNG 10" }],
                to: '/options'
              },
              {
                items: [{ label: "HOT DEAL ĐỘC QUYỀN THÁNG 10" }],
              },
            ],
          ],
        },
        {
          label: "Thương hiệu",
          //   icon: "pi-angle-down",
          items: [
            [
              {
                items: [{ label: "THEFACESHOP" }],
              },
              {
                items: [{ label: "CNP" }],
              },
            ],
          ],
        },
        {
          label: "Sản phẩm mới",
        },
        {
          label: "Trang điểm",

          items: [
            [
              {
                label: "Trang điểm mặt",
                items: [{ label: "Kem nền" }, { label: "Kem lót" }],
              },
              {
                label: "Trang điểm môi",
                items: [{ label: "Dưỡng môi" }, { label: "Son bóng" }],
              },
            ],
            [
              {
                label: "Trang điểm mắt",
                items: [{ label: "Kẻ mắt" }, { label: "Kẻ lông mày" }],
              },
            ],
          ],
        },
        {
          label: "Dưỡng da",

          items: [
            [
              {
                label: "Dưỡng da mặt",
                items: [{ label: "Dưỡng ẩm" }, { label: "Tẩy tế bào chết" }],
              },
              {
                label: "Làm sạch",
                items: [{ label: "Sữa rửa mặt" }, { label: "Nước tẩy trang" }],
              },
            ],
            [
              {
                label: "Mặt nạ",
                items: [{ label: "Mặt nạ ngủ" }, { label: "Mặt nạ dưỡng" }],
              },
            ],
          ],
        },
        {
          label: "Chăm sóc cơ thể",

          items: [
            [
              {
                label: "Chăm sóc BODY",
                items: [
                  { label: "Dưỡng cơ thể" },
                  { label: "Tẩy tế bào chết " },
                ],
              },
              {
                label: "Chăm sóc tóc",
                items: [{ label: "Dầu dội" }, { label: "Dầu xả" }],
              },
            ],
            [
              {
                label: "Chăm sóc tay/chân",
                items: [{ label: "Dưỡng da" }, { label: "Tẩy tế bào chết" }],
              },
            ],
          ],
        },
        {
          label: "Nhận mã ưu đãi",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.p-megamenu {
  padding: 0;
  border: none;
  border-radius: 20px;
}

:deep(.p-megamenu-root-list) {
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  flex-wrap: nowrap !important;
}

:deep(.p-megamenu-panel) {
  border-radius: 14px;
}
@media screen and (max-width: 1067px) {
  :deep(.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link) {
    padding: 0;
  }
}
</style>
