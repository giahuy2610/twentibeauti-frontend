<template lang="">
<div class="left-section">
    <div class="section-region">
        <h2 class="header">Đánh giá</h2>
        <div class="flex-row num-review">
            <div class=""><strong>3</strong>&nbsp;Đánh giá</div>
            <div class="seperator">&nbsp;</div>
            <Button class="p-button-text" @click="Popup">
                <span class="review" style="white-space: nowrap">Viết đánh giá</span>
            </Button>
        </div>
        <div class="star-rate">
            <i v-for="index in 5" class="pi pi-star-fill star"></i>
        </div>
        <div class="rate flex-row">
            <div class="score">5</div>
            <div class="progress-line">
                <div class="progress-line__get get__5" :style="barWidth"></div>
            </div>

            <div class="num-rate">({{count_star_5}})</div>
        </div>
        <div class="rate flex-row">
            <div class="score">4</div>
            <div class="progress-line">
                <div class="progress-line__get get__4" :style="barWidth"></div>
            </div>
            <div class="num-rate">({{count_star_4}})</div>
        </div>
        <div class="rate flex-row">
            <div class="score">3</div>
            <div class="progress-line">
                <div class="progress-line__get get__3" :style="barWidth"></div>
            </div>
            <div class="num-rate">({{count_star_3}})</div>
        </div>
        <div class="rate flex-row">
            <div class="score">2</div>
            <div class="progress-line">
                <div class="progress-line__get get__2" :style="barWidth"></div>
            </div>
            <div class="num-rate">({{count_star_2}})</div>
        </div>
        <div class="rate flex-row">
            <div class="score">1</div>
            <div class="progress-line">
                <div class="progress-line__get get__1" :style="barWidth"></div>
            </div>
            <div class="num-rate">({{count_star_1}})</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            count_star_1: 0,
            average_1: 0,
            count_star_2: 0,
            average_2: 0,
            count_star_3: 0,
            average_3: 0,
            count_star_4: 0,
            average_4: 0,
            count_star_5: 0,
            average_5: 0,
            totalRatings: 0,
            averageRating: 0,
        };
    },
    mounted() {
        console.log(this.reviews[1].numstar);
        this.reviews.map((review) => {
            if (Number(review.num) == 1) {
                this.count_star_1 += 1;
            } else if (Number(review.numstar) == 2) {
                this.count_star_2 += 1;
            } else if (Number(review.numstar) == 3) {
                this.count_star_3 += 1;
            } else if (Number(review.numstar) == 4) {
                this.count_star_4 += 1;
            } else if (Number(review.numstar) == 5) {
                this.count_star_5 += 1;
            }
            return { ...review };
        });
        const totalRatings = this.reviews.reduce((acc, { numstar }) => (acc += Number(numstar)),0);
        this.average_1 = this.count_star_1 / this.reviews.length * 100;
        this.average_2 = this.count_star_2 / this.reviews.length * 100;
        this.average_3 = this.count_star_3 / this.reviews.length * 100;
        this.average_4 = this.count_star_4 / this.reviews.length * 100;
        this.average_5 = this.count_star_5 / this.reviews.length * 100;
        const averageRating = totalRatings / this.reviews.length;
        console.log(
            this.average_1,
            this.average_2,
            this.average_3,
            this.average_4,
            this.average_5,
            totalRatings,
            averageRating
        );
    },
    computed: {
      barWidth() {
            return {
                "--bar-width-1": this.average_1 +'%',
                "--bar-width-2": this.average_2 +'%',
                "--bar-width-3": this.average_3 +'%',
                "--bar-width-4": this.average_4 +'%',
                "--bar-width-5": this.average_5 +'%',
            };
        },
    },
    props: ["reviews"],
    methods: {
        
        Popup() {
            this.$emit("popupmsg");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";

.star-rate {}

.section-region {
    padding-right: 30px;
}

.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.left-section {
    @include mobile {
        width: 90% !important;
    }

    @include mini-tablet {
        width: 40% !important;
    }

    @include tablet {
        width: 40% !important;
    }

    @include desktop {
        width: 30% !important;
    }

    .num-review {
        position: relative;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;

        .seperator {
            margin: 0px;
            position: relative;
            top: -0.06em;
            display: inline-block;
            height: 0.9em;
            margin: 0 8px;
            vertical-align: middle;
            border-top: 0;
            border-left: 1px solid rgba(0, 0, 0, 0.06);
        }
    }

    .star {
        margin-bottom: 1rem;
        position: relative;
        display: inline-block;
        margin-top: 1rem;
        margin-right: 5px;
        font-size: 2rem;
    }

    .rate {
        margin-bottom: 1rem;

        .progress-line {
            position: relative;
            margin-right: 10px;
            margin-left: 10px;
            width: 100%;
            height: 5px;
            overflow: hidden;
            vertical-align: middle;
            background-color: #f5f5f5;
            border-radius: 100px;

            &__get {
                height: 5px;
                background: rgb(0, 0, 0);
            }
        }

        .get {
            &__1 {
                width: var(--bar-width-1);
            }

            &__2 {
                width: var(--bar-width-2);
            }

            &__3 {
                width: var(--bar-width-3);
            }

            &__4 {
                width: var(--bar-width-4);
            }

            &__5 {
                width: var(--bar-width-5);
            }
        }
    }
}
</style>
