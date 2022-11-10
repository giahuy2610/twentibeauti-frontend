<template lang="">
<div class="promoCode">
    <Card>
        <template #title>
            <span class="title">Mã khuyến mãi</span>
            <span class="generate-code" @click="generateCode()">Sinh mã ngẫu nhiên</span>
        </template>
        <template #content>
            <span class="p-fluid">
                <InputText id="promocode" type="text" v-model="getPromoItem._promoCode" @input="change" placeholder="Ví dụ: COUPON10%" />
            </span>
            <p>Khách hàng sẽ nhập mã khuyến mãi này ở màn hình thanh toán.</p>
        </template>
    </Card>
    <Card>
        <template #content>
            <div class="field-checkbox">
                <Checkbox @click="change" inputId="binary" v-model="getPromoItem._withCampaignPromo" :binary="true" />
                <label for="binary">Áp dụng cùng với chương trình khuyến mãi</label>
            </div>
        </template>
    </Card>
</div>
</template>

<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
import axios from 'axios';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapWritableState(usePromotionStorePinia, {
            getPromoItem: "getPromoItem",
        }),
    },

    methods: {
        change() {
            console.log(this.getPromoItem._promoCode),
                console.log(this.getPromoItem._withCampaignPromo)
            console.log(this.getPromoItem._appliedMode)
        },
        async generateCode() {
            const request = new Request('https://api.voucherjet.com/api/v1/p/generator', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: '{ "count": 100, "pattern": "DE-####", "characters" : "0123456789" }',
                body: JSON.stringify({
                    'count': 1,
                    'pattern': '###########',
                    'characters': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'
                })
            });
            const res = await fetch(request);   
            const data = await res.json();
            this.getPromoItem._promoCode = data.codes[0];
        },
    }
};
</script>

<style lang="scss" scoped>
.p-card {
    position: relative;
}

.title {
    flex: 1 1 auto;
}

.generate-code {

    float: right;
    font-weight: 300 !important;
    color: #08f;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
