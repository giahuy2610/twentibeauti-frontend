<template lang="">
    <div class="right-col">
        <div @click="showingFullText = !showingFullText" class="product-content">
            <div  :class="{ shorten: showingFullText }">
              <div v-html="descriptions"></div>
            </div>
            <div :class="{'background-cover': showingFullText}"></div>
            <div class="centered btn-showingFullText">
                <Button class="p-button-secondary p-button-outlined p-button-rounded">
                    <span v-if="showingFullText == true">Xem thêm nội dung</span>
                    <span v-if="showingFullText == false">Ẩn bớt nội dung</span>
                </Button>    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["descriptions"],
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