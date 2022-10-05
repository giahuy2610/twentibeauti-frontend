<template lang="">
    <AdminBlankPage>
      <template v-slot:header>
        <div class="header-wrapper">
          <div class="header-wrapper__left">Danh sách đơn hàng</div>
          <div class="header-wrapper__right">
            <Button label="Thoát" class="p-button-outlined p-button-danger" />
            <Button
              type="button"
              label="Thêm đơn hàng"
              icon="pi pi-plus"
              class="p-button-info ml-2"
              badgeClass="p-badge-danger"
            />
          </div>
        </div>
      </template>
      <template v-slot:main>
        <div class="main-wrapper">
          <Card>
            <template #title> Đơn hàng cần xử lý 
            </template>
            <template #content>
              <div class="tracking-status">
                <div class="status-wait-browsing">
                    <div class="content-status">
                        Chờ duyệt
                    </div>
                    <div class="total">
                        0
                    </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </AdminBlankPage>
  </template>
  <script> 
  import AdminBlankPage from "../AdminBlankPage.vue";
  import ProductTable from "../products/components/ProductTable.vue";
  export default {
    components: {
      AdminBlankPage,
      ProductTable,
    },
    data() {
      return {
        modal1: false,
      position: "center",
      };
    },
    methods: {
    close() {
      this.modal1 = false;
    },
    open() {      
        this.modal1=true;  
    },

    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    openBasic2() {
      this.displayBasic2 = true;
    },
    closeBasic2() {
      this.displayBasic2 = false;
    },
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },

  },
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
    .product-table {
      width: 100%;
      overflow: hidden;
    }
    .tracking-status {
        display:flex;
        flex-direction: row;
        .status-wait-browsing {
            display: flex;
            flex-direction: column;
            background-color: aqua;
                cursor:pointer;
                border: 1px solid #b3b3b3;
                text-align: left;
                width: 100px;
            .content {


            }
                
        
        }
        .status-wait-browsing:hover {
            background-color: antiquewhite;
        }
    }
  }
  
  ::v-deep(.p-card) {
    border-radius: 10px;
  }
  </style>
  