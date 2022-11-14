<template>
    <div class="home">
        <p>
            <router-link to="/home/city">{{ city }}</router-link>
        </p>
        <!-- <div id="container"></div> -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
            <van-swipe-item v-for="item in homeInfo.banner" :key="item.id">
                <img class="swipe_img" :src="item.image_url" alt="">
            </van-swipe-item>
        </van-swipe>
        <button @click="goSearchPage">搜素页</button>
        <router-link to="/home/newGoods/1" tag="button">新品首发</router-link>
        <router-link to="/home/newgoods/2" tag="button">人气推荐</router-link>
    </div>
</template>

<script>
import { index } from "@/api/home/index.js"
import { mapGetters } from "vuex"
export default {
    name: 'home',
    data() {
        return {
            homeInfo: [],
            city: ''
        }
    },
    created() {
        this.getHomeInfo()
    },
    computed: {
        ...mapGetters(['cityInfo']),
    },
    mounted() {
        let _this = this;
        console.log('cityInfo', this.cityInfo);
        if (this.cityInfo.name) {
            return this.city = this.cityInfo.name
        } else {
            AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        // 查询成功，result即为当前所在城市信息
                        console.log('123', result);
                        _this.city = result.city
                    }
                })
            })
        }

    },
    methods: {
        async getHomeInfo() {
            let { data } = await index()
            this.homeInfo = data
        },
        goSearchPage() {
            this.$router.push('/home/search');
        }
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

#container {
    width: 100%;
    height: 180px;
}
</style>