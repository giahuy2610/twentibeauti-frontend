<template lang="">
    <div class="promocustomer">
        <Card>
            <template #title>
                Nhóm khách hàng
            </template>
            <template #content>
                    <div class="field-radiobutton">
                        <RadioButton @click="customer = '0'" inputId="customer0" name="customer" value="0" v-model="customer" />
                        <label for="customer0">Tất cả</label>
                    </div>
                    <div class="group">
                        <div class="field-radiobutton">
                            <RadioButton @click="customer = '1'" inputId="customer1" name="customer" value="1" v-model="customer" />
                            <label for="customer1">Nhóm khách hàng đã lưu</label>
                        </div>
                        <div class="search" v-show="customer === '1'">
                            <DialogDataTable></DialogDataTable>
                        </div>
                        
                    </div>
            </template>
        </Card>
    </div>
</template>
<script>
import DialogDataTable from '@/pages/admin/promotions/components/DialogDataTable.vue';

export default {
    components : {DialogDataTable,},

    data() {
        return{
            customer : '0',
        }
        
    }
}
</script>
<style lang="scss" scoped>
.search
{
    display: flex;
}
</style>