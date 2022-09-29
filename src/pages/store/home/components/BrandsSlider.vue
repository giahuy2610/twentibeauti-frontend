<template lang="">
  <div class="brands-slider">
    <div class="brands-slider__thumbnail" v-for="(item, index) in brands">
      <a :href="item.brandPath"
        ><img :src="item.brandImg" :alt="item.brandName"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      brands: [
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/1920x0/tfs/common/0b50116e-158f-4aa7-95a7-910804ad9772.webp",
          brandPath: "/collections/a",
        },
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/1920x0/tfs/common/0b50116e-158f-4aa7-95a7-910804ad9772.webp",
          brandPath: "/collections/a",
        },
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/1920x0/tfs/common/0b50116e-158f-4aa7-95a7-910804ad9772.webp",
          brandPath: "/collections/a",
        },
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/1920x0/tfs/common/0b50116e-158f-4aa7-95a7-910804ad9772.webp",
          brandPath: "/collections/a",
        },
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/1920x0/tfs/common/0b50116e-158f-4aa7-95a7-910804ad9772.webp",
          brandPath: "/collections/a",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.brands-slider {
  display: flex;
  gap: 10px;

  &__thumbnail {
    flex: 1;

    img {
      max-width: 100%;
      height: 120px;
      object-fit: fill;
      border-radius: 10px;

      &:hover {
        border: 1px solid black;
      }
    }
  }
}
</style>
