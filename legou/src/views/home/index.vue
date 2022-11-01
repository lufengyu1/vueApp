<template>
    <div class="home">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
            <van-swipe-item v-for="item in homeInfo.banner" :key="item.id">
                <img class="swipe_img" :src="item.image_url" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { index } from "@/api/home/index.js"
export default {
    name: 'home',
    data() {
        return {
            homeInfo: []
        }
    },
    created() {
        this.getHomeInfo()

    },
    methods: {
        async getHomeInfo() {
            let { data } = await index()
            this.homeInfo = data
        },
    }
}
</script>

<style lang="scss" scoped>
.home {
    .swipe_img {
        width: 100%
    }

    ::v-deep .van-swipe__indicator {
        background-color: red
    }
}
</style>