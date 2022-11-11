<template lang="">
    <div class="eventName">
        <Card>
            <template #title>
                <span class="title">Tên chương trình khuyến mãi</span>
            </template>
            <template #content>
                <span class="p-fluid">
                    <InputText id="promocode" type="text" v-model="getEventPromoItem._nameEvent" @input="change" placeholder="Ví dụ: Chương trình khuyến mãi tháng 4" />
                </span>
            </template>
        </Card>
    </div>
</template>
    
<script>
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
import axios from 'axios';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapWritableState(useEventStorePinia, {
            getEventPromoItem: "getEventPromoItem",
        }),
    },

    methods: {
        change() {
            console.log(this.getEventPromoItem._nameEvent)
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
            this.getEventPromoItem._promoCode = data.codes[0];
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
