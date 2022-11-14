<template>
    <div class="newGoods">
        新品首发人气推荐页面
        <div class="top">
            <div class="top_item">综合</div>
            <div class="top_item" @click="changeTab" :class="activeTab=='price'?'activeTab':''">价格
                <div class="top_item_icon">
                    <van-icon class="icon up" name="arrow-up" :class="sortType == 'asc' ? 'activeSort' : ''" />
                    <van-icon class="icon down" name="arrow-down" :class="sortType == 'desc' ? 'activeSort' : ''" />
                </div>
            </div>
            <div class="top_item">分类</div>
        </div>
        <van-grid :column-num="2">
            <van-grid-item v-for="item in newGoodsList" :key="item.id">
                <img :src="item.list_pic_url" style="width:100%" alt="">
                <div>{{ item.name }}</div>
                <div>￥{{ item.retail_price }}</div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import { goodsList } from '@/api/home/index.js'
export default {
    name: 'newGoods',
    data() {
        return {
            // 选中的标签
            activeTab: '',
            // 排序方式
            sortType: '',
            // 商品列表
            newGoodsList: []
        }
    },
    created() {
        this.getNewGoodsList()
    },
    methods: {
        // 获取数据
        async getNewGoodsList() {
            let params = {
                isHot: this.$route.params.id == 2 ? '1' : '',
                isNew: this.$route.params.id == 1 ? '1' : '',
                order: this.sortType
            }
            let { data } = await goodsList(params);
            this.newGoodsList = data.data;
        },
        // 改变价格排序
        changeTab() {
            if (this.activeTab != 'price') {
                this.activeTab = 'price';
                this.sortType = ''
            } else {
                if (this.sortType == '') {
                    this.sortType = 'asc'
                } else if (this.sortType == 'asc') {
                    this.sortType = 'desc'
                } else if (this.sortType == 'desc') {
                    this.sortType = ''
                }
            }
            this.getNewGoodsList()
        }
    }
}
</script>

<style lang="scss" scoped>
.newGoods {
    .top {
        display: flex;

        .activeTab {
            color: red
        }

        .top_item {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            .top_item_icon {
                display: flex;
                flex-direction: column;

                .activeSort {
                    color: blue !important;
                }
                .icon {
                    color: black;
                    font-size: 12px;
                }
                .up{
                    position: relative;
                    top: 2px;
                }
                .down{
                    position: relative;
                    bottom: 2px;
                }
            }
        }
    }
}
</style>