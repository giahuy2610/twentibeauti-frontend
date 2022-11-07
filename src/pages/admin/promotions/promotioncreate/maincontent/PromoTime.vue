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
                        <Calendar :showIcon="true" inputId="basic" v-model="date1" autocomplete="off" />
                    </div>
                    <div class="time field col-12 md:col-4 ">
                        <label for="time12">Time / 12h</label>
                        <Calendar :showIcon="true"  icon="pi pi-clock" inputId="time12" v-model="date8" :timeOnly="true" hourFormat="12" />
                    </div>
                </div>
                <div class="group">
                    <div style="margin-left:20px" class="field-checkbox">
                        <Checkbox @click="onshow3 = !onshow3" value="1" name="time" inputId="option3" v-model="checked" />
                        <label for="option3">Thời gian kết thúc</label>
                    </div>
                    <div v-show="onshow3" class="dateStart">
                        <div class="date field col-12 md:col-4 ">
                            <label for="basic">Ngày bắt đầu</label>
                            <Calendar :showIcon="true" inputId="basic" v-model="date1" autocomplete="off" />
                        </div>
                        <div class="time field col-12 md:col-4 ">
                            <label for="time12">Time / 12h</label>
                            <Calendar :showIcon="true"  icon="pi pi-clock" inputId="time12" v-model="date8" :timeOnly="true" hourFormat="12" />
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked: null,
            onshow3: null,
            date1: null,
            date8: null,
        }
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