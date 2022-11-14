<template>
    <div class="category_list">
        <van-tabs v-model="activeNav" @change="updateGoodsList">
            <van-tab v-for="(item, index) in navList" :name="item.name" :key="index" :title="item.name">
            </van-tab>
        </van-tabs>
        <van-grid :column-num="3">
            <van-grid-item v-for="value in goodsList" :key="value"
                @click="$router.push(`/category/list/info?id=${value.id}`)">
                <img :src="value.list_pic_url" alt="" style="width:100%">
                <div>{{ value.retail_price }}</div>
                <div style="">{{ value.name }}</div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import { categoryNav, goodsList } from '@/api/api'
export default {
    name: 'category_list',
    data() {
        return {
            activeNav: 0,
            currentNav: '',
            navList: [],
            goodsList: []
        }
    },
    mounted() {
        this.getCategoryNav()
    },
    methods: {
        // 获取nav导航
        async getCategoryNav() {
            let params = {
                id: this.$route.query.id
            }
            let { data } = await categoryNav(params);
            console.log('nav', data);
            this.activeNav = data.currentNav.name
            this.navList = data.navData
            this.getGoodsList();
        },
        // 获取商品列表
        async getGoodsList() {
            let params = {
                categoryId: this.$route.query.id
            }
            let { data } = await goodsList(params);
            this.goodsList = data.data
        },
        //
        async updateGoodsList(val) {
            let categoryId = this.navList.find((item) => {
                return item.name == val
            }).id;
            console.log(categoryId);
            let params = {
                categoryId: categoryId
            }
            let { data } = await goodsList(params);
            this.goodsList = data.data
        }
    },
}
</script>

<style lang="scss" scoped>

</style>