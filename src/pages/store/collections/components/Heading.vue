<template lang="">
  <div class="heading-wrapper">
    <div class="wallpaper-wrapper">
      <Skeleton
        shape="rectangle"
        width="100%"
        height="260px"
        v-show="!isLoaded"
      >
      </Skeleton>
      <img
        src="https://image.hsv-tech.io/1920x0/tfs/common/43ab5b36-fedc-4d8c-a24f-cd8ecfe05564.webp"
        alt=""
        style="width: 100%; object-fit: fill; border-radius: 10px"
        @load="isLoaded = true"
        v-show="isLoaded"
      />
    </div>
    <div class="logo-wrapper">
      <div class="logo-img">
        <Skeleton shape="square" size="100%" v-show="!isLoadedLogo"> </Skeleton>
        <img
          class="shadow-2"
          src="https://image.hsv-tech.io/400x0/tfs/common/ef78ea2a-5c56-48bb-814c-b3e1bacc4bea.webp"
          style="width: 100%; object-fit: fill; border-radius: 10px"
          @load="isLoadedLogo = true"
          alt=""
          v-show="isLoadedLogo"
        />
      </div>
      <div class="brand-info">
        <h2 class="uppercase">THE FACE SHOP</h2>
        <p>Hàn quốc</p>
      </div>
    </div>
    <div class="description-wrapper">
      <div class="description-content">
        <DescriptionVue></DescriptionVue>
      </div>
      
    </div>
    <div class="ads-slider">
      <AdsSlider></AdsSlider>
    </div>
    
  </div>
</template>
<script>
import WallpaperVue from "./Wallpaper.vue";
import AdsSlider from '@/pages/store/home/components/AdsSlider2.vue';
import DescriptionVue from "@/pages/store/product/components/aboutproduct/RightAbout.vue";
export default {
  components: {
    WallpaperVue,
    AdsSlider,
    DescriptionVue,
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
      width: 80%;
    }
  }

  .ads-slider {
    margin: 2rem 0;
  }
}
</style>
