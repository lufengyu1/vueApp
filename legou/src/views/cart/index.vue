<template>
    <div class="cart">
        <van-checkbox-group v-model="checkedList" @change="selectGoods">
            <van-checkbox :name="item" v-for="item in cartList.data" :key="item.id"
                style="display: flex;justify-content: space-between;">
                <van-swipe-cell>
                    <div style=" flex:1;display:flex;width:100%;justify-content:space-between;">
                        <div> <img :src="item.list_pic_url" alt="" style="width:60px"></div>
                        <div style="flex:2">{{ item.goods_name }}</div>
                        <div style="flex:1">{{ item.retail_price }}</div>
                        <div style="flex:1">{{ item.number }}</div>
                    </div>
                    <template #right>
                        <van-button square type="danger" text="删除" size="mini" class="delete-button"
                            style="height: 100%;" />
                    </template>
                </van-swipe-cell>
            </van-checkbox>


        </van-checkbox-group>
    </div>
</template>

<script>
import { cartlist } from '@/api/api'
export default {
    name: 'cart',
    data() {
        return {
            cartList: [],
            checkedList: [],
        }
    },
    mounted() { this.cartlist() },
    methods: {
        // 获取购物车列表
        async cartlist() {
            let params = {
                openId: localStorage.getItem('openId')
            }
            let { data } = await cartlist(params);
            console.log('cart', data);
            this.cartList = data
        },
        selectGoods() {
            console.log('select', this.checkedList);
        }
    }
}
</script>

<style lang="scss" scoped>
.cart{
    padding-bottom: 50px;
}
::v-deep .van-checkbox__label {
    flex: 1
}
</style>