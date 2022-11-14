<template>
    <div>
        搜索页
       
        <div class="top">
            <input type="text" v-model.trim="iptVal" @input="handleIptChange">
        </div>
        <div class="default" v-if="current === 'default'">
            1234
            <div v-for="(item) in searchInfo.historyData" :key="item.id">
                {{ item.keyword }}
            </div>
        </div>
        <div class="notice" v-else-if="current === 'notice'">
            <div class="searchTip" v-for="(item) in searchResult" :key="item.id" @click="showList(item)">
                {{ item.name }}
            </div>
        </div>
        <div class="goods" v-else>
            <div class="searchList" v-for="item in goodsList" :key="item.id">
                <img :src="item.list_pic_url" alt="" style="width:100%">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { indexaction, helperaction, addhistoryaction } from '@/api/home/index.js'
export default {
    name: 'search',
    data() {
        return {
            // 搜素信息
            searchInfo: {},
            // 搜索内容
            iptVal: "",
            // 搜索提示
            searchResult: [],
            // 搜索结果
            goodsList: [],
            // 当前展示的页面
            current: "default"  // default notice list
        }
    },
    async created() {
        // 初始化
        let { data } = await indexaction({ openId: localStorage.getItem('openId') });
        this.searchInfo = data;
        console.log(this.searchInfo);
    },
    mounted() { },
    methods: {
        // 输入框输入内容时，展示搜索提示内容
        async handleIptChange() {
            if (this.iptVal.length == 0) {
                this.current = 'default';
                return
            } else {
                this.current = 'notice';
                let params = {
                    keyword: this.iptVal,
                    order: ""
                };
                let { data } = await helperaction(params);
                this.searchResult = data.keywords
            }
        },
        // 展示选中的商品
        async showList(item) {
            this.current = 'list';
            addhistoryaction({
                keyword: item.name,
                openId: localStorage.getItem("openId")
            })
            let params = {
                keyword: item.name,
                order: ""
            };
            let { data } = await helperaction(params);
            this.goodsList = data.keywords
        }
    }

}
</script>

<style lang="scss" scoped>

</style>