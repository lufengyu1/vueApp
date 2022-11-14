import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cityInfo: {}
    },
    mutations: {
        UPDATE_CITYINFO(state, data) {
            state.cityInfo = data
        }
    },
    actions: {

    },
    modules: {},
    getters: {
        cityInfo: state => state.cityInfo
    }
})