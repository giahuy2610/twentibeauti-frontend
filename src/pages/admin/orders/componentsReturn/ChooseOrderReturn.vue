<template lang="">
  <div class="wrapper" :style="[isHidden ? 'display: none' : '']">
    <ScrollPanel style="width: 100%">
      <div class="modal">
        <div class="modal-content">
          <!-- <div class="m-icon">
            <i class="pi pi-times" @click="modal=false"></i>
          </div> -->
          <div class="modal-title">
            <div class="m-head">
              <slot name="title"></slot>
            </div>
          </div>
          <div class="modal-context">
            <div class="choose-order-return-table-wrapper">
              <DataTable
                :value="orderreturn"
                :paginator="true"
                class="p-datatable-choose-order-return"
                :rows="10"
                dataKey="id"
                :rowHover="true"
                v-model:selection="selectedChooseOrderReturn"
                v-model:filters="filters"
                filterDisplay="menu"
                :loading="loading"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[10, 25, 50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                :globalFilterFields="['id', 'customer', 'emp']"
                responsiveLayout="scroll"
              >
                <template #header>
                  <span class="p-input-icon-left" stye="width:100%;">
                    <!-- <i class="pi pi-search" /> -->
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
                  field="id"
                  header="Mã đơn hàng"
                  style="min-width: 11rem"
                >
                  <template #body="{ data }">
                    <p
                      @click="
                        $router.push({
                          path: '/admin/orderdetails',
                          query: { sku: data.id },
                        })
                      "
                      class="idod cursor-pointer hover-primary-color"
                      style="color: #0088ff"
                    >
                      {{ data.id }}
                    </p>
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
                <Column field="name" header="Nhân viên" style="min-width: 9rem">
                  <template #body="{ data }">
                    {{ data.emp }}
                  </template>
                </Column>
                <Column
                  field="name"
                  header="Khách hàng"
                  style="min-width: 9rem"
                >
                  <template #body="{ data }">
                    {{ data.customer }}
                  </template>
                </Column>
                <Column
                  field="total"
                  header="Tổng tiền"
                  dataType="numeric"
                  style="min-width: 9rem"
                >
                  <template #body="{ data }">
                    {{ formatCurrency(data.total) }}
                  </template>
                </Column>
                <Column
                  header="Thao tác"
                  style="min-width: 9rem"
                  bodyStyle="text-align: center; overflow: visible"
                >
                  <template #body="{ data }">
                    <p
                      @click="
                        $router.push({
                          path: '/admin/create-return',
                          query: { sku: data.idreturn },
                        })
                      "
                      class="cursor-pointer hover-primary-color"
                    >
                      <button style="cursor: pointer">Đổi trả</button>
                    </p>
                  </template>
                </Column>
              </DataTable>
            </div>
            <slot name="context"></slot>
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
      modal: false,
      position: "center",
      isHidden: false,
      orderreturn: null,
      selectedChooseOrderReturn: null,
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        date: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        },
        total: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        id: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        emp: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        customer: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
      },
      loading: true,
      orderreturn: [
        {
          id: 1000,
          createdOn: "2015-09-13",
          emp: "Dịu Ái",
          customer: "Thảo Hồng",
          total: 75000,
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
      return value.toLocaleString({
        style: "currency",
        currency: "VND",
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
    button {
      border: none;
      background-color: #fff;
      color: #0088ff;
      font-weight: 600;
    }
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

    .modal-context {
      width: 100%;
      display: block;
      .idod:hover {
        text-decoration: underline;
  font-weight: 600;
      }
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

      ::v-deep(.p-datatable.p-choose-order-return-customers) {
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
