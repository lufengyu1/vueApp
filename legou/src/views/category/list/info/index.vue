<template>
    <div class="info">
        <div v-if="goodsInfo.info">{{ goodsInfo.info.name }}</div>
        <van-icon name="like-o" size="30" @click="collectGoods" :color='goodsInfo.collected ? "red" : ""' />
        <van-button type="primary" size="large" @click="addCate"
            style="position:fixed;bottom:0;left:0;width:100%;z-index:9999999">
            加入购物车{{ goodsInfo.allnumber }}
        </van-button>
        <van-popup v-model="show" position="bottom" style="height:300px;bottom:50px">内容</van-popup>
    </div>
</template>

<script>
import { detailaction, addcollect, addcart } from '@/api/api'
export default {
    name: 'info',
    data() {
        return {
            show: false,
            goodsInfo: {}
        }
    },
    mounted() {
        this.getGoodsDetail()
    },
    methods: {
        // 获取商品详情
        async getGoodsDetail() {
            let params = {
                id: this.$route.query.id,
                openId: localStorage.getItem('openId')
            }
            let { data } = await detailaction(params);
            console.log(data);
            this.goodsInfo = data
        },
        // 收藏商品
        async collectGoods() {
            let params = {
                openId: localStorage.getItem('openId'),
                goodsId: this.$route.query.id,
            }
            let { data } = await addcollect(params);
            this.getGoodsDetail()
        },
        // 加入购物车
        async addCate() {
            if (!this.show) {
                this.show = true
            } else {
                let params = {
                    openId: localStorage.getItem('openId'),
                    goodsId: this.$route.query.id,
                    number: 1
                }
                let { data } = await addcart(params);
                this.getGoodsDetail()
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>