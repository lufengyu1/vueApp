<template>
    <div class="topic">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
            <div class="topic_content">
                <div class="topic_content_item" v-for="item in topicList" :key="item.id">
                    <img :src="item.scene_pic_url" alt="">
                    <div>{{ item.title }}</div>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
import { listaction } from '@/api/api.js'
export default {
    name: 'topic',
    data() {
        return {
            loading: false,
            finished: false,
            topicList: [],
            page: 1
        }
    },
    created() { this.getTopicPage() },
    mounted() { },
    methods: {
        // 获取专题页详情
        async getTopicPage() {
            console.log(this.page);
            let params = {
                page: this.page,
            }
            let { data } = await listaction(params);
            this.topicList.push(...data.data)
            this.loading = false;
            if (this.page >= data.total) {
                this.finished = true
            }

        },
        // 上拉加载
        onLoad() {
            this.page++;
            this.getTopicPage();
            // this.loading = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.topic {
    padding-bottom: 50px;

    .topic_content {
        .topic_content_item {
            img {
                width: 100%
            }
        }
    }
}
</style>