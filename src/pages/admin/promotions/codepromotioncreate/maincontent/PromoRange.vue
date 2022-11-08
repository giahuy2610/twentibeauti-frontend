<template lang="">
    <div class="promotime">
        <Card>
            <template #title>
                Giới hạn sử dụng
            </template>
            <template #content>
                <div class="group">
                    <div class="field-checkbox">
                        <Checkbox @click="onshow1 = !onshow1" value="0" name="time" inputId="option1" v-model="checked" />
                        <label for="option1">Giới hạn số lần mã giảm giá được áp dụng</label>
                    </div>
                    <InputNumber style="margin-bottom:10px" v-show="onshow1 == true" showButtons inputId="minmax-buttons" v-model="value20"  :min="0" :max="1000000000" />
                </div>
                <div class="group">
                    <div class="field-checkbox">
                        <Checkbox @click="onshow2 = !onshow2" value="1" name="time" inputId="option2" v-model="checked" />
                        <label for="option2">Giới hạn mỗi khách hàng chỉ được sử dụng mã giảm giá này 1 lần</label>
                    </div>
                    <span v-show="onshow2 == true" style="margin-left:30px">Kiểm tra bằng email</span>
                </div>
            </template>
        </Card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            onshow1:false,
            onshow2:false,
            checked : false,
            value20 : 20.
        }
    }
}
</script>
<style lang="scss" scoped>
    .group{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
</style>