<template lang="">
    <div class="right-col">
        <div @click="showingFullText = !showingFullText" class="product-content">
            <div  :class="{ shorten: showingFullText }">
                <p class="p1">
                    <span>
                        <strong>Tẩy Tế Bào Chết Toàn Thân YEHWADAM BODY PEELING</strong>
                        &nbsp;dành được giải thưởng Allure Editor’s Pick vào tháng 10/2019, với công thức từ các loại hạt thiên nhiên giúp làm sạch nhẹ nhàng, mang lại làn da ẩm mượt và mịn màng.&nbsp;
                    </span>
                </p>
                <p class="p2">
                    <div @click="$router.push({ path: '/collections', replace: true })">
                        <p class="inline" title="Các sản phẩm tẩy tế bào chết toàn thân THEFACESHOP" style="color:green">Tẩy tế bào chết toàn thân</p>  
                        <p class="inline"> chiết xuất từ nhân sâm, đậu xanh, đậu đỏ, đậu nành giúp nhẹ nhàng loại bỏ các tế bào chết, những sắc tố da sạm màu thật nhẹ nhàng. Đặc biệt, những vùng da xỉn màu đã tích tụ lâu trên bề mặt da cũng sẽ được loại bỏ đáng kể. Giúp da trắng sáng, mềm mại tức thì sau khi sử dụng. Tăng hiệu quả hấp thụ dưỡng chất cho các liệu trình dưỡng da sau đó cũng sẽ tăng gấp nhiều lần.</p>
                    </div>
                </p>
                <br>
                <h2>
                    <span>Công dụng chính của Yehwadam Body Peeling</span>
                    <br>
                </h2>
                <ul>
                    <li><span>Kết cấu dạng gel an toàn và dịu nhẹ đối với cả làn da nhạy cảm</span></li>
                    <li><span id="iv0dv">Chăm sóc cơ thể với hương hoa trắng tinh tế</span></li>
                    <li><span id="i7awi">Lưu giữ độ ẩm cho làn da sau khi sử dụng</span><br><br></li>
                </ul>
                <p><span>Trong sản phẩm gồm có:</span><br></p>
                <ul>
                    <li><span><em>Đậu xanh: </em>Thành phần làm sạch tự nhiên</span></li>
                    <li><span><em>Đậu nành: </em>Thanh lọc làn da</span></li>
                    <li><span><em>Đậu đỏ: </em>Làm sạch lỗ chân lông</span></li>
                    <li><span><em>Hoa cúc: </em>Làm dịu mát làn da</span></li>
                    <li><span><em>Nhân sâm: </em>Tăng sinh khí cho làn da</span></li>
                    <li><span><em>Hạt kỷ tử: </em>Chống lão hóa sớm cho làn da</span></li>
                </ul>
                <h2>
                    <span><strong>Hướng dẫn sử dụng Yehwadam Body Peeling</strong></span>
                </h2>
                <p><span>Bạn có thể sử dụng sản phẩm trên cơ thể khô hoặc ướt.&nbsp;</span></p>
                <p><span>Lấy 1 lượng vừa đủ thoa lên vùng da cần loại bỏ tế bào chết, sau đó massage nhẹ nhàng khoảng 5 phút sau đó tắm sạch lại.&nbsp;</span></p>
                <p><span>Bạn nên tẩy tế bào chết 1 -2 lần/tuần để giúp da luôn tươi sáng khỏe mạnh.</span></p>
                
            </div>
            <div :class="{'background-cover': showingFullText}"></div>
            <div class="centered btn-showingFullText">
                <Button class="p-button-secondary p-button-outlined p-button-rounded">
                    {{showMoreContent}}
                </Button>    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      showingFullText: true,
    };
  },
  computed: {
    showMoreContent() {
      return this.showingFullText ? "Xem thêm nội dung" : "Ẩn bớt nội dung";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";

.shorten {
  overflow: hidden;
  @include mobile {
    height: 8rem;
  }
  @include mini-tablet {
    height: 6rem;
  }
  @include tablet {
    height: 6rem;
  }
  @include desktop {
    height: 12.5rem;
  }

}
.right-col {
  .product-content {
    position: relative;
    cursor: pointer;
    .background-cover {
      position: absolute;
      background-image: linear-gradient(transparent, rgb(255, 255, 255));
      width: 100%;
      height: 100%;
      top: 0px;
    }
    .centered {
      display: flex;
      justify-content: center;
    }
  }
}
</style>