<template>
    <div class="city">
        <input type="text" v-model="ipVal">
        <ul>
            <li v-for="item in searchList" :key="item.adcode" @click="goHome(item)">{{ item.name }}</li>
        </ul>
        <div id="box"></div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    name: 'city',
    data() {
        return {
            ipVal: '',
            currentCity: '',
            searchList: [],
        }
    },
    computed: {
        ...mapGetters(['cityInfo'])
    },
    watch: {
        ipVal() {
            let _this = this;
            // JSAPI 2.0 输入提示插件名称由 AMap.Autocomplete 变更为 AMap.AutoComplete 啦！
            AMap.plugin('AMap.AutoComplete', function () {
                var autoOptions = {
                    //city 限定城市，默认全国
                    city: _this.currentCity
                };
                // 实例化AutoComplete
                var autoComplete = new AMap.AutoComplete(autoOptions);
                // 根据关键字进行搜索
                autoComplete.search(_this.ipVal, function (status, result) {
                    // 搜索成功时，result即是对应的匹配数据
                    console.log('se', result);
                    _this.searchList = result.tips
                })
            })
        }
    },
    mounted() {
        this.init();
        this.getCurrentCity();
    },
    methods: {
        ...mapMutations(['UPDATE_CITYINFO']),
        init() {
            let _this = this
            if (this.cityInfo.name) {
                //初始化 有数据
                var map = new AMap.Map('box', {
                    zoom: 18,
                    center: [_this.cityInfo.location.lng, _this.cityInfo.location.lat]

                });
                // 创建一个 Marker 实例：
                var marker = new AMap.Marker({
                    position: new AMap.LngLat(_this.cityInfo.location.lng, _this.cityInfo.location.lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    title: _this.cityInfo.name
                });

                // 将创建的点标记添加到已有的地图实例：
                map.add(marker);

            } else {
                //初始化
                var map = new AMap.Map('box', {
                    zoom: 11,
                });
            }


        },
        getCurrentCity() {
            let _this = this
            AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        // 查询成功，result即为当前所在城市信息
                        _this.currentCity = result.city
                    }
                })
            })
        },
        // 
        goHome(data) {
            this.UPDATE_CITYINFO(data);
            this.$router.push('/home')
        }

    }
}
</script>

<style lang="scss" scoped>
#box {
    height: 400px;
    width: 100%;
}
</style>