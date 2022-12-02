<template lang="">
<div class="product-bottom">
    <div class="image-bottom">
        <div class="product-thumbnail">
            <div class="scroll-wrapper">
                <div class="container-slide" ref="slide">
                    <Skeleton shape="square" size="400px" v-show="!isLoaded">
                    </Skeleton>
                    <div class="slick-slider">
                        <div class="slick-list">
                            <div class="slide-track">
                                <div ref="img" v-for="(item, index) in illustProducts" class="image-track">
                                    <img :src="item" @load="isLoaded = true" v-show="isLoaded" class="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="infor-bottom">
        <div class="name-product">
            <span>{{productName}}</span>
        </div>
        <Price :listPrice="this.listPrice" :retailPrice="this.retailPrice"></Price>
    </div>
</div>
</template>

<script>
import Price from "@/pages/store/product/components/productinfor/Price.vue";
export default {
    components: {
        Price,
    },
    data() {
        return {
            isLoaded: false,
            currentIllust: 1,
        };
    },

    props: ["illustProducts", "productName", "listPrice", "retailPrice"],
    methods: {
        scrollUp() {
            if (this.currentIllust != this.illustProducts.length) {
                this.currentIllust++;
                this.$refs.slide.scrollTop += this.$refs.img[0].offsetHeight;
                console.log(
                    this.currentIllust,
                    this.$refs.slide.scrollTop,
                    this.$refs.img[0].offsetHeight
                );
            } else {
                this.$refs.slide.scrollTop -=
                    this.$refs.img[0].offsetHeight * (this.illustProducts.length - 1);
                this.currentIllust = 1;
            }
        },
    },
    mounted() {
        setInterval(this.scrollUp, 3000);
    },
};
</script>

<style lang="scss" scoped>
.product-bottom {
    gap: 12px;
    overflow: hidden;
    align-items: center;
    display: flex;

    .image-bottom {
        flex-shrink: 0;
        overflow: hidden;

        .product-thumbnail {
            height: 72px;
            width: 72px;
            min-width: 72px;

            img {
                display: block;
                height: 100%;
                width: 100%;
                object-fit: cover;
                max-width: 100%;
            }
        }
    }

    .infor-bottom {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        .name-product {
            font-size: 16px;
            font-weight: 700;

            span {
                display: inline-block;
                max-width: 100%;
                white-space: nowrap;
                color: var(--text-primary);
                overflow-wrap: break-word;
            }
        }
    }
}

.scroll-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 0px auto;

    &::-webkit-scrollbar {
        display: none;
        scroll-behavior: smooth;
    }

    .container-slide {
        position: relative;
        overflow: hidden;
        scroll-behavior: smooth;

        .slick-slider {
          touch-action: pan-y;

            .slick-list {
                height: 30vh !important;
                transform: translateZ(0);
                position: relative;
                display: block;

                .slide-track {
                    -webkit-box-pack: justify;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    height: 700px;

                    .image-track{
                      
                      display: inline-block;
                      .imgage{
                        margin-top: 10px;
                        margin-bottom: 10px;
                        width: 200%;
                        
                      }
                    }
                }
            }
        }
    }
}
</style>
