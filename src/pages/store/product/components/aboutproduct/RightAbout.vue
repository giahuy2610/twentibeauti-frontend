<template lang="">
    <div class="right-col">
        <div @click="showingFullText = !showingFullText" class="product-content">
            <div  :class="{ shorten: showingFullText }" v-html="getCollectionItems.Description" >
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
import { useCollectionStorePinia } from "@/stores/store/collection.js";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    showMoreContent() {
      return this.showingFullText ? "Xem thêm nội dung" : "Ẩn bớt nội dung";
    },
    ...mapState(useCollectionStorePinia, {
      getCollectionItems: "getCollectionItems",
    }),
  },
  methods: {
    ...mapActions(useCollectionStorePinia,["getInfoCollection"],
    ),
  },
  mounted() {
    //  this.getInfoCollection();
  },
    data() {
    return {
      showingFullText: true,
    };
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