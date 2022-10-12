<template lang="">
  <div class="wrapper" :style="[isHidden ? 'display: none' : '']">
    <ScrollPanel style="width: 100%">
      <div class="modal">
        <div class="modal-content">
          <div class="m-icon">
            <i class="pi pi-times" @click="close()"></i>
          </div>
          <div class="modal-title">
            <div class="m-head">
              Chọn đơn hàng để trả
              <slot name="title"></slot>
            </div>
          </div>
          <div class="modal-context">
            <div class="product-table-wrapper">
              <DataTable
                :value="products"
                :paginator="true"
                class="p-datatable-customers"
                :rows="10"
                dataKey="id"
                :rowHover="true"
                v-model:selection="selectedCustomers"
                v-model:filters="filters"
                filterDisplay="menu"
                :loading="loading"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[10, 25, 50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                :globalFilterFields="[
                  'name',
                  'country.name',
                  'representative.name',
                  'status',
                ]"
                responsiveLayout="scroll"
              >
                <template #header>
                  <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText
                      type="text"
                      v-model="filters['global'].value"
                      placeholder="Tìm kiếm"
                    />
                  </span>
                </template>

                <template #empty> No customers found. </template>
                <template #loading>
                  Loading customers data. Please wait.
                </template>
                <!-- <Column selectionMode="multiple" headerStyle="width: 3rem"></Column> -->

                <Column
                  field="name"
                  header="Mã đơn hàng"
                  style="min-width: 9rem"
                >
                  <template #body="{ data }">
                    {{ data.id }}
                  </template>
                </Column>
                <Column
                  field="date"
                  header="Ngày tạo"
                  dataType="date"
                  style="min-width: 9rem"
                >
                  <template #body="{ data }">
                    {{ data.createdOn }}
                  </template>
                </Column>
                <Column
                  field="name"
                  header="Nhân viên"
                  style="min-width: 9rem"
                >
                  <template #body="{ data }">
                    {{ data.id }}
                  </template>
                </Column>
                <Column
                  field="name"
                  header="Khách hàng"
                  style="min-width: 9rem"
                >
                  <template #body="{ data }">
                    {{ data.id }}
                  </template>
                </Column>
                <Column
                  field="balance"
                  header="Tổng tiền"
                  dataType="numeric"
                  style="min-width: 9rem"
                >
                  <template #body="{ data }">
                    {{ formatCurrency(data.salePrice) }}
                  </template>
                </Column>
                <Column
                header="Thao tác"
                style="min-width: 9rem"
        bodyStyle="text-align: center; overflow: visible"
      >
        <template #body>
            <button>Đổi trả</button>
        </template>
      </Column>
              </DataTable>
            </div>
            <slot name="context"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
            <slot name="button"></slot>
          </div>
        </div>
      </div>
    </ScrollPanel>
  </div>
</template>
<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
export default {
  data() {
    return {
      isHidden: false,
      customers: null,
      selectedCustomers: null,
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        "country.name": {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        },
        balance: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        status: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS },
      },
      loading: true,
      representatives: [
        { name: "Amy Elsner", image: "amyelsner.png" },
        { name: "Anna Fali", image: "annafali.png" },
        { name: "Asiya Javayant", image: "asiyajavayant.png" },
        { name: "Bernardo Dominic", image: "bernardodominic.png" },
        { name: "Elwin Sharvill", image: "elwinsharvill.png" },
        { name: "Ioni Bowcher", image: "ionibowcher.png" },
        { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
        { name: "Onyama Limba", image: "onyamalimba.png" },
        { name: "Stephen Shaw", image: "stephenshaw.png" },
        { name: "XuXue Feng", image: "xuxuefeng.png" },
      ],
      statuses: ["Đang giao dịch", "Hoàn thành"],
      products: [
        {
          id: 1000,
          name: "Kem Nền Hiệu Ứng Căng Mướt THEFACESHOP AURA CC CREAM SPF30 PA++ 20g",
          brand: {
            name: "The Face Shop",
            id: 100,
            path: "/collections/the-face-shop",
            country: "Hàn Quốc",
          },
          createdOn: "2015-09-13",
          status: "Đang giao dịch",
          stock: 20,
          images: ["abc.png", "bcd.png"],
          listprice: 80000,
          salePrice: 75000,
          description:
            "Công dụng chính: Kem nền hiệu chỉnh sắc diện da, giúp làn da rạng rỡ và tỏa sáng.Hiệu ứng: Nâng tông, căng mướt da",
          category: {
            name: "Trang điểm",
            id: "1",
            path: "/categories/trang-diem",
          },
          review: [
            {
              id: 111,
              userId: 1112,
              rating: 4,
              content: "Sản phẩm tốt",
              createdOn: "2015-09-13",
              invoice: { id: 152 },
            },
            {
              id: 115,
              userId: 1113,
              rating: 2,
              content: "Sản phẩm tốt",
              createdOn: "2015-09-14",
              invoice: { id: 165 },
            },
          ],
        },
      ],
    };
  },
  created() {},
  mounted() {
    // this.products.forEach(
    //   (products) => (products.createdOn = new Date(products.createdOn))
    // );
    this.loading = false;
  },
  methods: {
    close() {
      this.modal = false;
    },
    formatDate(value) {
      return value.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    formatCurrency(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: contain;
  height: 200vh;

  .modal {
    background-clip: padding-box;
    border: 0;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    position: fixed;
    width: 900px;
    left: calc(50% - 450px);
    top: 100px;
    //-webkit-scrollbar{ display: none; }
    // height: 200vh;

    .modal-content {
      padding: 18px 24px 16px;
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: none rgba(0, 0, 0, 0.9);
      outline: none;
      border-radius: 10px;
      //height: 700vh;
      .m-icon {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        padding: 0;
        color: rgba(0, 0, 0, 0.45);
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        transition: color 0.3s;
      }
      .pi {
        display: block;
        width: 80px;
        height: 80px;
        font-size: 16px;
        font-style: normal;
        line-height: 80px;
        text-align: center;
      }
    }

    .modal-title {
      display: flex;
      flex-direction: row;
      width: 100%;
      text-align: center;

      .m-head {
        width: 100%;
        text-align: center;
        align-items: center;
        margin-right: 250px;
        font-size: 24px;
        line-height: 36px;
        font-weight: 700;
        margin: 0;
        color: rgba(0, 0, 0, 0.85);
        box-sizing: inherit;
      }
    }
    .modal-context {
      width: 100%;
      display: block;
      ::v-deep(.p-progressbar) {
        height: 0.5rem;
        background-color: #d8dadc;

        .p-progressbar-value {
          background-color: #607d8b;
        }
      }

      ::v-deep(.p-datepicker) {
        min-width: 25rem;

        td {
          font-weight: 400;
        }
      }

      ::v-deep(.p-datatable.p-datatable-customers) {
        .p-datatable-header {
          padding: 1rem;
          text-align: left;
          font-size: 1.5rem;
        }

        .p-paginator {
          padding: 1rem;
        }

        .p-datatable-thead > tr > th {
          text-align: left;
        }

        .p-datatable-tbody > tr > td {
          cursor: auto;
        }

        .p-dropdown-label:not(.p-placeholder) {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
