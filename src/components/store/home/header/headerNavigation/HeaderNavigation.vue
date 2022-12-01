<template lang="">
  <div>
    <MegaMenu :model="items"> </MegaMenu>
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
                items: [
                  { label: "HOT DEAL ĐỘC QUYỀN THÁNG 10", url: "/promotions" },
                ],
              },
              {
                items: [
                  { label: "HOT DEAL ĐỘC QUYỀN THÁNG 10", url: "/promotions" },
                ],
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
                items: [{ label: "THEFACESHOP", url: "/collections" }],
              },
              {
                items: [{ label: "CNP", url: "/collections" }],
              },
            ],
          ],
        },
        {
          label: "Sản phẩm mới",
          url: "/collections",
        },
        {
          label: "Trang điểm",

          items: [
            [
              {
                label: "Trang điểm mặt",
                items: [
                  { label: "Kem nền", url: "/collections" },
                  { label: "Kem lót", url: "/collections" },
                ],
              },
              {
                label: "Trang điểm môi",
                items: [
                  { label: "Dưỡng môi", url: "/collections" },
                  { label: "Son bóng", url: "/collections" },
                ],
              },
            ],
            [
              {
                label: "Trang điểm mắt",
                items: [
                  { label: "Kẻ mắt", url: "/collections" },
                  { label: "Kẻ lông mày", url: "/collections" },
                ],
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
                items: [
                  { label: "Dưỡng ẩm", url: "/collections" },
                  { label: "Tẩy tế bào chết", url: "/collections" },
                ],
              },
              {
                label: "Làm sạch",
                items: [
                  { label: "Sữa rửa mặt", url: "/collections" },
                  { label: "Nước tẩy trang", url: "/collections" },
                ],
              },
            ],
            [
              {
                label: "Mặt nạ",
                items: [
                  { label: "Mặt nạ ngủ", url: "/collections" },
                  { label: "Mặt nạ dưỡng", url: "/collections" },
                ],
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
                  { label: "Dưỡng cơ thể", url: "/collections" },
                  { label: "Tẩy tế bào chết ", url: "/collections" },
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
                items: [
                  { label: "Dưỡng da", url: "/collections" },
                  { label: "Tẩy tế bào chết", url: "/collections" },
                ],
              },
            ],
          ],
        },
        {
          label: "Nhận mã ưu đãi",
          url: "/promotions",
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
