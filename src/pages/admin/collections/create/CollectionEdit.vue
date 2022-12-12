<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div
          class="header-wrapper__left flex align-items-center cursor-pointer"
          @click="$router.push({ path: '/admin/collections' })"
        >
          <i class="pi pi-angle-left"></i>
          <span>Quay lại</span>
        </div>
        <div class="header-wrapper__right">
          <Button label="Hủy" class="p-button-outlined p-button-danger" />
          <Button
            label="Xem trước"
            class="p-button-success"
            @click="
              $router.push({ path: `/collection/${this.$route.params.id}` })
            "
          />
          <Button
            label="Cập nhật"
            class="p-button-info"
            @click="updateCollection(this.$route.params.id)"
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper flex justify-content-center">
        <div class="left-content">
          <AddInfor> </AddInfor>
          <ProductTable></ProductTable>
          <AddMethod></AddMethod>
        </div>
        <div class="right-content">
          <Card>
            <template #title> Trạng thái</template>
            <template #content>
              <div class="p-2">Đặt lịch hiển thị</div>
              <Calendar
                inputId="time24"
                v-model="rangeAvailableDate"
                :showTime="true"
                :showSeconds="true"
                selectionMode="range"
              />
            </template>
          </Card>
          <Card>
            <template #title> Ảnh bìa </template>
            <template #content>
              <div>
                {{}}
                <Chip
                  :label="getCollectionItems.WallPaperPath"
                  :image="getCollectionItems.WallPaperPath"
                  class="custom-chip mb-2"
                  removable
                  @remove="getCollectionItems.WallPaperPath = ''"
                  v-if="getCollectionItems.WallPaperPath != null"
                />
                <AddFileVue
                  @geturl="wallimg"
                  v-if="
                    getCollectionItems.WallPaperPath == null ||
                    getCollectionItems.WallPaperPath == ''
                  "
                  >{{ getCollectionItems.WallPaperPath }} ></AddFileVue
                >
              </div>
            </template>
          </Card>
          <Card>
            <template #title> Ảnh logo </template>
            <template #content>
              <div>
                <Chip
                  :label="getCollectionItems.LogoImagePath"
                  :image="getCollectionItems.LogoImagePath"
                  class="custom-chip mb-2"
                  removable
                  @remove="getCollectionItems.LogoImagePath = ''"
                  v-if="getCollectionItems.LogoImagePath != null"
                />
                <AddFileVue
                  @geturl="logoimg"
                  v-if="
                    getCollectionItems.LogoImagePath == null ||
                    getCollectionItems.LogoImagePath == ''
                  "
                  >{{ getCollectionItems.LogoImagePath }}
                </AddFileVue>
              </div>
            </template>
          </Card>
          <Card>
            <template #title> Ảnh danh mục </template>
            <template #content>
              <div>
                <Chip
                  :label="getCollectionItems.CoverImagePath"
                  :image="getCollectionItems.CoverImagePath"
                  class="custom-chip mb-2"
                  removable
                  @remove="getCollectionItems.CoverImagePath = ''"
                  v-if="getCollectionItems.CoverImagePath != null"
                />
                <AddFileVue
                  @geturl="coverimg"
                  v-if="
                    getCollectionItems.CoverImagePath == null ||
                    getCollectionItems.CoverImagePath == ''
                  "
                ></AddFileVue>
              </div>
            </template>
          </Card>
          <Card>
            <template #title> Gắn lên menu </template>
            <template #content>
              <div class="flex justify-content-between">
                <div>Gắn danh mục vào menu</div>
                <div>Chọn menu</div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../../AdminBlankPage.vue";
import AddFileVue from "@/components/admin/add-image/AddImage.vue";
import AddInfor from "../component/AddInfor.vue";
import ProductTable from "../component/ProductTable.vue";
import AddMethod from "../component/AddMethod.vue";
import { useCollectionStorePinia } from "@/stores/admin/collection.js";
import { mapWritableState, mapActions } from "pinia";
import { format } from "https://cdn.skypack.dev/date-fns@2.29.3";

export default {
  components: {
    AdminBlankPage,
    AddFileVue,
    AddInfor,
    AddMethod,
    ProductTable,
  },
  created() {
    let id = this.$route.params.id;
    if (id) {
      this.getInfoCollection(id);
    }
  },
  computed: {
    ...mapWritableState(useCollectionStorePinia, {
      getCollectionItems: "getCollectionItems",
      collectionItems: "collectionItems",
    }),
  },
  methods: {
    onRadioChange: function (event) {
      alert(event.target.value);
    },
    ...mapActions(useCollectionStorePinia, [
      "getInfoCollection",
      "updateCollection",
    ]),
    getAllData: function () {
      //checking if the current url is create or not
      if (
        this.$route.fullPath ==
        `/admin/collections/edit/${this.$route.params.id}`
      ) {
        console.log(this.getInfoCollection(this.$route.params.id));
        // return this.getInfoCollection(this.$route.params.id).save;
      } else {
        // this.createCollection();
      }
      // window.location.reload();
    },
    logoimg(n) {
      console.log(n);
      //mỗi hàm này tương ứng sẽ chạy khi mà m upload ảnh, giá trị n là cái link ảnh
      //giờ có link ảnh rồi thì gán vô pinia
      this.collectionItems.LogoImagePath = n[0];
    },
    wallimg(n) {
      console.log(n);
      this.collectionItems.WallPaperPath = n[0];
    },
    coverimg(n) {
      console.log(n);
      this.collectionItems.CoverImagePath = n[0];
    },
  },
  async mounted() {
    await this.getInfoCollection(this.$route.params.id);
    this.rangeAvailableDate = [
      new Date(this.collectionItems.StartOn),
      new Date(this.collectionItems.EndOn),
    ];
  },
  data() {
    return {
      status: null,
      value: null,
      rangeAvailableDate: [],
    };
  },
  watch: {
    rangeAvailableDate(newValue, oldValue) {
      this.collectionItems.StartOn = format(
        new Date(newValue[0]),
        "yyyy-MM-dd HH:mm:ss"
      ).toString();
      this.collectionItems.EndOn = format(
        new Date(newValue[1]),
        "yyyy-MM-dd HH:mm:ss"
      ).toString();
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
  .header-wrapper__left:hover {
    color: var(--primary-color);
  }

  .header-wrapper__right {
    display: flex;
    gap: 10px;
  }
}
.right-content {
}
.right-content h3 {
  padding: 10px;
}
.p-card {
  padding: 5px;
}
:deep(.p-card) {
  padding: 5px;
  margin: 8px;
  border-radius: 13px;
}
:deep(.p-radiobutton-icon) {
  background-color: black;
}
</style>
