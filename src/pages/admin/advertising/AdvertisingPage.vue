<template>
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">Quảng cáo</div>
    </template>
    <template v-slot:main>
      <div class="ads-wrapper">
        <Card>
          <template #title> Soạn thảo </template>
          <template #content>
            <Editor v-model="contentEmailHTML" editorStyle="height: 320px" />
          </template>
        </Card>
        <Card
          >
          <template #content>
            <Toast position="bottom-right" group="br" />
            <DataTable
              v-model:value="promotionRegisters"
              :paginator="true"
              class="p-datatable-customers"
              :rows="10"
              dataKey="email"
              :rowHover="true"
              v-model:selection="selectedEmail"
              v-model:filters="filters"
              filterDisplay="menu"
              :loading="loading"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              :rowsPerPageOptions="[10, 25, 50]"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
              :globalFilterFields="['Email', 'IDCus']"
              responsiveLayout="scroll"
              selectionMode="single"
            >
              <template #header>
                <div class="flex justify-content-between align-items-center">
                  <h5 class="m-0">Danh sách đăng ký nhận quảng cáo</h5>
                  <div class="">
                    <Button
                      label="Hủy"
                      class="p-button-outlined p-button-danger"
                    />
                    <Button
                      label="Xem trước"
                      class="p-button-outlined p-button-info mx-2"
                    />
                    <Button
                      label="Gửi"
                      class="p-button-outlined p-button-success"
                      @click="
                        axios
                          .post('promotion/send', {
                            Content: contentEmailHTML,
                            Customers: selectedEmail,
                          })
                          .then((response) => {});
                        this.$toast.add({
                          severity: 'success',
                          summary: 'Thành công',
                          detail: 'Gửi thành công',
                          life: 3000,
                        });
                        contentEmailHTML = '';
                        selectedEmail = [];
                      "
                    />
                  </div>
                  <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText
                      v-model="filters['global'].value"
                      placeholder="Tìm kiếm"
                    />
                  </span>
                </div>
              </template>
              <template #empty>Chưa có đăng ký</template>
              <template #loading>Đang tải thông tin</template>
              <Column
                selectionMode="multiple"
                headerStyle="width: 3rem"
              ></Column>
              <Column
                field="Email"
                header="Email"
                sortable
                style="min-width: 14rem"
              >
                <template #body="{ data }">
                  {{ data.Email }}
                </template>
                <template #filter="{ filterModel }">
                  <InputText
                    type="text"
                    v-model="filterModel.value"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>
              <Column
                field="IDCus"
                header="Tài khoản khách hàng"
                sortable
                filterMatchMode="contains"
                style="min-width: 14rem"
              >
                <template #body="{ data }">
                  <p
                    @click="
                      data.cusId !== ''
                        ? $router.push({
                            path: '/admin/customerdetails',
                            query: { sku: data.IDCus },
                          })
                        : false
                    "
                    style="color: var(--text-admin-color)"
                    class="cursor-pointer"
                  >
                    {{
                      data.IDCus !== "" ? data.IDCus : "Chưa phải khách hàng"
                    }}
                  </p>
                </template>
              </Column>

              <Column header="Khả dụng" sortable style="min-width: 10rem">
                <template #body="{ data }">
                  {{ !data.IsDeleted ? "Đang đăng ký" : "Đã hủy" }}
                </template>
              </Column>
              <Column
                headerStyle="width: 4rem; text-align: center"
                bodyStyle="text-align: center; overflow: visible"
              >
                <template #body>
                  <Button type="button" icon="pi pi-cog"></Button>
                </template>
              </Column>
            </DataTable>
          </template>
        </Card>
      </div>
    </template>
  </AdminBlankPage>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import AdminBlankPage from "../AdminBlankPage.vue";
export default {
  components: {
    AdminBlankPage,
  },
  data() {
    return {
      selectedEmail: [],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      loading: true,
      promotionRegisters: [],
      contentEmailHTML: "",
    };
  },
  async mounted() {
    await this.axios
      .get("/promotion/index")
      .then((response) => {
        this.promotionRegisters = response.data;
      })
      .catch((e) => console.error(e));
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.ads-wrapper {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.hover-primary-color {
  text-decoration: underline;
  &:hover {
    color: var(--primary-color);
  }
}

::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #d8dadc;

  .p-progressbar-value {
    background-color: #607d8b;
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
</style>
