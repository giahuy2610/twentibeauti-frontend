<template lang="">
  <div class="listorder">
    <AdminBlankPage>
      <template v-slot:header>
        <div class="header-wrapper">
          <div class="header-wrapper__left">Danh sách đơn hàng</div>
          <div class="header-wrapper__right">
            <Button label="Thoát" class="p-button-outlined p-button-danger" />
          </div>
        </div>
      </template>
      <template v-slot:main>
        <div class="main-wrapper" style="margin-bottom: 20px">
          <div class="main-top">
            <Card>
              <template #title>
                <div class="header">
                  <div class="content-header">Đơn hàng cần xử lý</div>
                  <div class="filter-time">
                    <SplitButton
                      label="Thời gian "
                      :model="items"
                      class="p-button-text p-button-info mb-2"
                    ></SplitButton>
                  </div>
                </div>
              </template>

              <template #content>
                <div class="tracking-status">
                  <div class="status-wait-browsing">
                    <div class="content-status">
                      <div class="content">Chờ xác nhận</div>
                      <div class="count">0</div>
                    </div>
                    <div class="total">0</div>
                  </div>
                  <div class="status-setup">
                    <div class="content-status">
                      <div class="content">Đang chuẩn bị</div>
                      <div class="count">0</div>
                    </div>
                    <div class="total">0</div>
                  </div>
                  <div class="status-ordering">
                    <div class="content-status">
                      <div class="content">Đang giao hàng</div>
                      <div class="count">4</div>
                    </div>
                    <div class="total">828,000</div>
                  </div>
                  <div class="status-ordered">
                    <div class="content-status">
                      <div class="content">Đã giao hàng</div>
                      <div class="count">0</div>
                    </div>
                    <div class="total">0</div>
                  </div>
                  <div class="status-unsuccess">
                    <div class="content-status">
                      <div class="content">Không thành công</div>
                      <div class="count">0</div>
                    </div>
                    <div class="total">0</div>
                  </div>
                  <div class="status-cancel">
                    <div class="content-status">
                      <div class="content">Bị hủy</div>
                      <div class="count">0</div>
                    </div>
                    <div class="total">0</div>
                  </div>
                </div>
              </template>
            </Card>
          </div>
          <div class="main-bot">
            <Card style="margin-top: 20px">
              <template #title></template>
              <template #content><OrderTable></OrderTable></template>
            </Card>
          </div>
        </div>
      </template>
    </AdminBlankPage>
  </div>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
import ProductTable from "../products/components/ProductTable.vue";
import OrderTable from "./components/OrderTable.vue";
export default {
  components: {
    AdminBlankPage,
    ProductTable,
    OrderTable,
  },
  data() {
    return {
      modal1: false,
      position: "center",
      items: [
        {
          label: "30 ngày gần nhất",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "90 ngày gần nhất",
          command: () => {
            this.$toast.add({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
        {
          label: "6 tháng gần nhất",
          command: () => {
            window.location.href = "https://vuejs.org/";
          },
        },
        {
          label: "12 tháng gần nhất",
          command: () => {
            window.location.hash = "/fileupload";
          },
        },
      ],
    };
  },
  // async mounted() {
  //   await this.axios
  //     .get('/invoice/show')
  //     .then((response) => {})
  //     .catch((e) => console.error(e));
  // },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-wrapper {
  // padding-bottom: 50px;
  .header {
    display: flex;
    flex-direction: row;
    gap: 20px;
    .content-header {
      padding-top: 5px;
      font-size: 18px;
    }
  }
  .product-table {
    width: 100%;
    overflow: hidden;
  }
  .tracking-status {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top: 1px solid #b3b3b3;
    .status-wait-browsing,
    .status-setup,
    .status-ordering,
    .status-ordered,
    .status-unsuccess,
    .status-cancel {
      display: flex;
      flex-direction: column;
      //background-color: aqua;
      cursor: pointer;
      border-right: 1px dotted #b3b3b3;
      width: 160px;
      font-size: 13.5px;
      padding-left: 10px;
      padding-top: 5px;

      .content-status {
        color: #808080;
        display: flex;
        flex-direction: row;
        width: 100%;
        .content {
          width: 80%;
          text-align: left;
        }
        .count {
          color: var(--text-admin-color);
          font-weight: 500;
          width: 20%;
          text-align: center;
          margin-right: 3px;
        }
      }
      .total {
        padding-top: 10px;
        font-weight: 500;
      }
    }
    .status-cancel {
      border: none;
    }
    .status-wait-browsing:hover,
    .status-setup:hover,
    .status-ordering:hover,
    .status-ordered:hover,
    .status-unsuccess:hover,
    .status-cancel:hover {
      background-color: #e6f5ff;
    }
  }
}
::v-deep(.p-card) {
  border-radius: 10px;
}
</style>
