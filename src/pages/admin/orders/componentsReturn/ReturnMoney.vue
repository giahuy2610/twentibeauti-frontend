<template lang="">
    <div class="return-money shadow-2">
        <Card style="width: 100%; margin-top: 2em">
            <template #title>
                <div class="title">Hoàn tiền</div>
            </template>
            <template #content>
                <div class="content">
                        <div class="row1">
                            <div class="label">Cần hoàn tiền trả hàng</div>
                            <div class="money">375.000</div>
                        </div>
                        <div class="row2">
                            <div class="label">Khách cần trả đơn đổi</div>
                            <div class="money">300.000</div>
                        </div>
                        <div class="row3">
                            <div class="label">Tổng tiền cần hoàn trả khách</div>
                            <div class="money">75.000</div>
                        </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .title {
        font-size: 18px;
        font-weight: 500;
        padding: 10px;
        border-bottom: 1px solid #e6e6e6;
    }
    .content {
        display:flex;
        flex-direction: column;
        padding-left:500px;
        gap:5px;
        .row1,.row2,.row3 {
            display:flex;
            flex-direction: row;
            gap:120px;
            justify-content: space-between;
            .label {
                width:50%;
            }
            .money {
                font-weight: 500;
            }
        }
        .row3 > .label {
            font-weight: 500;
        }
    }
</style>