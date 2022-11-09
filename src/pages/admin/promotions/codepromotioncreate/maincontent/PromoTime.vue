<template lang="">
    <div class="promotime">
        <Card>
            <template #title>
                Thời gian
            </template>
            <template #content>
                <div class="dateStart">
                    <div class="date field col-12 md:col-4 ">
                        <label for="basic">Ngày bắt đầu</label>
                        <Calendar :showIcon="true" inputId="basic" v-model="getPromoItem._startDate" autocomplete="off"  :showButtonBar="true"/>
                    </div>
                    <div class="time field col-12 md:col-4 ">
                        <label for="time24">Thời điểm</label>
                        <Calendar :showIcon="true"  icon="pi pi-clock" inputId="time24" v-model="getPromoItem._startTime" :showTime="true" :timeOnly="true" hourFormat="24" />
                    </div>
                </div>
                <div class="group">
                    <div style="margin-left:20px" class="field-checkbox">
                        <Checkbox @click="onshow3 = !onshow3" value="1" name="time" inputId="option3" v-model="checked" />
                        <label for="option3">Ngày kết thúc</label>
                    </div>
                    <div v-show="onshow3" class="dateStart">
                        <div class="date field col-12 md:col-4 ">
                            <label for="basic">Ngày bắt đầu</label>
                            <Calendar :showIcon="true" inputId="basic" v-model="getPromoItem._endDate" autocomplete="off"  :showButtonBar="true" />
                        </div>
                        <div class="time field col-12 md:col-4 ">
                            <label for="time24">Thời điểm</label>
                            <Calendar :showIcon="true"  icon="pi pi-clock" inputId="time24" v-model="getPromoItem._endTime" :showTime="true" :timeOnly="true" hourFormat="24" />
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState , mapActions } from "pinia";
import moment from 'moment';

export default {
    computed: {
    ...mapWritableState(usePromotionStorePinia, {
        getPromoItem: "getPromoItem",
    }),
    },
    data() {
        return {
            checked: null,
            onshow3: null,

        }
    },
    created()
    {
         this.getPromoItem._startDate = moment().format('L');
        // this.getPromoItem._startTime = moment().format('LT');
    }
}
</script>
<style lang="scss" scoped>
.dateStart
{
    display: flex;
    flex-direction: row;
    width: 100%;
    .date{
        display: flex;
        flex-direction: column;
        margin: 10px;
        flex: 1 1 auto;
    }
    .time{
        width: 45%;
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    
}
</style>