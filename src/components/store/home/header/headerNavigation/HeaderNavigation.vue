<template lang="">
     
      
  <div>
    <MegaMenu :model="items" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Khuyến mãi",
        //   icon: "pi pi-angle pi-angle-down",
          items: [
            [
              {
                items: [{ label: "HOT DEAL ĐỘC QUYỀN THÁNG 10" }],
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
        //   icon: "pi pi-fw pi-calendar",
        //   items: [
        //     [
        //       {
        //         label: "Trang điểm mặt",
        //         items: [{ label: "Kem nền" }, { label: "Kem lót" }],
        //       },
        //       {
        //         label: "Trang điểm môi",
        //         items: [{ label: "Dưỡng môi" }, { label: "Son bóng" }],
        //       },
        //     ],
        //     [
        //       {
        //         label: "Trang điểm mắt",
        //         items: [{ label: "Kẻ mắt" }, { label: "Kẻ lông mày" }],
        //       },
              
        //     ],
        //   ],
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
                items: [{ label: "Dưỡng cơ thể" }, { label: "Tẩy tế bào chết " }],
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
        }

      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.p-megamenu {
  padding: 0;

  border:none;
}
@media screen and (max-width: 800px) {

.p-megamenu-root-list{
    display: none;
  }
}
:deep(.p-megamenu-root-list){
    justify-content:space-between;
}
</style>
