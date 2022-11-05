<template lang="">
    <div class="promoCode">
        <Card>
            <template #title>
                <span class="title">Mã khuyến mãi</span>
                <span class="generate-code">Sinh mã ngẫu nhiên</span>
            </template>
            <template #content>
                <span class="p-fluid">
                    <InputText id="promocode" type="text" v-model="promocode" placeholder="Ví dụ: COUPON10%"/>
                </span>
                <p>Khách hàng sẽ nhập mã khuyến mãi này ở màn hình thanh toán.</p>
            </template>
        </Card>
        <Card>
            <template #content>
            <div class="field-checkbox">
                <Checkbox inputId="binary" v-model="checked" :binary="true" />
                <label for="binary">Áp dụng cùng với chương trình khuyến mãi</label>
            </div>
            </template>
        </Card>
    </div>
</template>
<script>
export default {
    data()  {
        return {
            checked: false,
        }
    }
};
</script>
<style lang="scss" scoped>
.p-card
{
    position: relative;
}


.title {
    flex: 1 1 auto;
}
.generate-code {
    
    float: right;
    font-weight: 300 !important;
    color: #08f;

    &:hover
    {
        text-decoration: underline;
        cursor: pointer;
    }
  }
::v-deep(.field-checkbox)
{
    label
    {
        cursor: pointer;
    }
    margin-bottom: 0rem;
}
</style>