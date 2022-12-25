<template lang="">
  <div class="heading-wrapper">
    <div class="wallpaper-wrapper" v-if="collectionItems.WallPaperPath != null">
      <Skeleton
        shape="rectangle"
        width="100%"
        height="260px"
        v-show="!isLoaded"
      >
      </Skeleton>
      <img
        :src="getCollectionItems.WallPaperPath"
        alt=""
        style="width: 100%; object-fit: fill; border-radius: 10px"
        @load="isLoaded = true"
        v-show="isLoaded"
      />
    </div>
    <div class="logo-wrapper" v-if="collectionItems.LogoImagePath != null">
      <div class="logo-img">
        <Skeleton shape="square" size="100%" v-show="!isLoadedLogo"> </Skeleton>
        <img
          class="shadow-2"
          :src="getCollectionItems.LogoImagePath"
          style="width: 100%; object-fit: fill; border-radius: 10px"
          @load="isLoadedLogo = true"
          alt=""
          v-show="isLoadedLogo"
        />
      </div>
      <div class="brand-info">
        <h2 class="uppercase">{{ getCollectionItems.NameCollection }}</h2>
      </div>
    </div>
    <div class="description-wrapper" v-if="collectionItems.Description != null">
      <div class="description-content">
        <DescriptionVue
          :descriptions="collectionItems.Description"
        ></DescriptionVue>
      </div>
    </div>
    <div class="ads-slider">
      <AdsSlider></AdsSlider>
    </div>
  </div>
</template>
<script>
import WallpaperVue from "./Wallpaper.vue";
import AdsSlider from "@/pages/store/home/components/AdsSlider2.vue";
import DescriptionVue from "@/pages/store/product/components/aboutproduct/RightAbout.vue";
import { useCollectionStorePinia } from "@/stores/store/collection.js";
import { mapWritableState, mapActions } from "pinia";
import { stringLength } from "@firebase/util";
export default {
  components: {
    WallpaperVue,
    AdsSlider,
    DescriptionVue,
  },
  props: {
    LogoImagePath: String,
  },
  computed: {
    ...mapWritableState(useCollectionStorePinia, {
      getCollectionItems: "getCollectionItems",
      collectionItems: "collectionItems",
    }),
  },
  methods: {
    ...mapActions(useCollectionStorePinia, ["getInfoCollection"]),
  },
  data() {
    return {
      isLoaded: false,
      isLoadedLogo: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.heading-wrapper {
  display: flex;
  flex-direction: column;

  .wallpaper-wrapper {
    position: relative;
    width: 100%;
    height: fit-content;
  }
  .logo-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -4rem;
    z-index: 2;

    .logo-img {
      width: 120px;
      height: 120px;
    }

    .brand-info {
      text-align: center;
    }
  }

  .description-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    .description-content {
      width: 100%;

      @include desktop {
        width: 80%;
      }
    }
  }

  .ads-slider {
    margin: 2rem 0;
  }
}
</style>
