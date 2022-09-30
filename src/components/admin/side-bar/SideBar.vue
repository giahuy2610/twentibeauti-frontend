<!-- <template lang="">
  <div class="wrapper">
    <div class="wrapper__header">
      <span>TWENTI</span>
    </div>
    <div class="wrapper__body">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideItems: [
        {
          name: "Tổng quan",
          icon: "pi-home",
          children: null,
          path: "",
        },
        {
          name: "Sản phẩm",
          icon: "pi-home",
          children: [
            {
              name: "Danh sách sản phẩm",
              path: ""
            },
            {
              name: "Quản lý kho",
              path: ""
            },
          ],
          path: "",
        },
        {
          name: "Khuyến mãi",
          icon: "pi-home",
          children: null,
          path: "",
        },
        {
          name: "Đơn hàng",
          icon: "pi-home",
          children: [
            {
              name: "Tạo đơn hàng và giao hàng",
              path: ""
            },
            {
              name: "Danh sách đơn hàng",
              path: ""
            }
            {
              name: "Khách trả hàng",
              path: ""
            }
          ],
          path: "",
        },
        {
          name: "Vận chuyển",
          icon: "pi-home",
          children: null,
          path: "",
        },
        {
          name: "Khách hàng",
          icon: "pi-home",
          children: null,
          path: "",
        },
        {
          name: "Yêu cầu hỗ trợ",
          icon: "pi-home",
          children: null,
          path: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: #162818;
  border-right: 2px solid gray;

  &__header {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid gray;
    font-size: 2rem;
    font-weight: bolder;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__body {
    width: 100%;
    overflow: hidden;

    .sidebar {
      width: 200px;
      // height: 100%;
      // // left: -250px;
      // background: #1b1b1b;
      transition: left 0.4s ease;
    }

    nav ul {
      background: #1b1b1b;
      height: 100%;
      width: 100%;
      list-style: none;
      margin-left: -40px;

      li {
        line-height: 60px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);

        &:last-child {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        a {
          position: relative;
          color: white;
          text-decoration: none;
          font-size: 18px;
          padding-left: 40px;
          font-weight: 500;
          display: block;
          width: 100%;
          border-left: 3px solid transparent;

          &:hover {
            background: #1e1e1e;
          }
        }
      }
    }
  }
}

.sidebar .text {
  color: white;
  font-size: 25px;
  font-weight: 600;
  line-height: 65px;
  text-align: center;
  background: #1e1e1e;
  letter-spacing: 1px;
}
// nav ul {
//   background: #1b1b1b;
//   height: 100%;
//   width: 100%;
//   list-style: none;
// }
// nav ul li {
//   line-height: 60px;
//   border-top: 1px solid rgba(255, 255, 255, 0.1);
// }
// nav ul li:last-child {
//   border-bottom: 1px solid rgba(255, 255, 255, 0.05);
// }
// nav ul li a {
//   position: relative;
//   color: white;
//   text-decoration: none;
//   font-size: 18px;
//   padding-left: 40px;
//   font-weight: 500;
//   display: block;
//   width: 100%;
//   border-left: 3px solid transparent;
// }
nav ul li.active a {
  color: cyan;
  background: #1e1e1e;
  border-left-color: cyan;
}
// nav ul li a:hover {
//   background: #1e1e1e;
// }
nav ul ul {
  position: static;
  display: none;
}
nav ul .feat-show.show {
  display: block;
}
nav ul .serv-show.show1 {
  display: block;
}
nav ul ul li {
  line-height: 42px;
  border-top: none;
}
nav ul ul li a {
  font-size: 17px;
  color: #e6e6e6;
  padding-left: 80px;
}
nav ul li.active ul li a {
  color: #e6e6e6;
  background: #1b1b1b;
  border-left-color: transparent;
}
nav ul ul li a:hover {
  color: cyan !important;
  background: #1e1e1e !important;
}
nav ul li a span {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 22px;
  transition: transform 0.4s;
}
nav ul li a span.rotate {
  transform: translateY(-50%) rotate(-180deg);
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #202020;
  z-index: -1;
  text-align: center;
}
.content .header {
  font-size: 45px;
  font-weight: 600;
}
.content p {
  font-size: 30px;
  font-weight: 500;
}
</style> -->
