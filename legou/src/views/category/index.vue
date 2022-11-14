<template>
    <div class="category">
        <van-sidebar v-model="activeTab" @change="getDataList()">
            <van-sidebar-item :title="item.name" v-for="item in categoryList" :key="item.id" />
        </van-sidebar>
        <div class="main">
            <div class="top"><img :src="subList.wap_banner_url" alt=""></div>
            <div>{{ subList.front_name }} </div>
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="文字" v-for="item in subList.subList" :key="item.id"
                    @click="$router.push({ path: '/category/list', query: { id: item.id } })">
                    <img :src="item.wap_banner_url" alt="">
                    <div>{{ item.name }}</div>
                </van-grid-item>
            </van-grid>
        </div>

    </div>
</template>

<script>
import {
    indexaction, currentaction
} from '@/api/api.js'
export default {
    name: 'category',
    data() {
        return {
            activeTab: 0,
            categoryList: [],
            bannerUr: '',
            subList: [],
        }
    },
    created() {
        this.getCategoryList()
    },
    mounted() {

    },
    methods: {
        // 获取分类列表 
        async getCategoryList() {
            let { data } = await indexaction();
            this.categoryList = data.categoryList
            this.getDataList()
        },
        // 获取选中的tab列表
        async getDataList(val) {
            let params = {
                id: this.categoryList[this.activeTab].id
            }
            let { data } = await currentaction(params);
            this.subList = data.data.currentOne;
        }

    }
}
</script>

<style lang="scss" scoped>
.category {
    display: flex;

    .van-sidebar {
        width: 80px;
        margin-right: 20px;
    }

    .main {
        width: calc(100% - 100px);

        .top {
            width: 100%;

            img {
                width: 100%
            }
        }

        .van-grid {
            .van-grid-item {
                img {
                    width: 100%
                }
            }
        }
    }

}
</style>