import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')
Vue.use(Vuex)

const state = {
    items: [],
    afterItems: "",
    beforeItems: "",
    countForAPI: 5,
    isLoading: false,
}

const mutations = {
    // сохранение данных
    SAVE_ITEMS(state, items) {
        let sliceItems = items.data.data
        state.items = sliceItems.children
        if (sliceItems.after || sliceItems.before) {
            state.afterItems = sliceItems.after
            state.beforeItems = sliceItems.before
        } else {
            console.log('sliceItems.after и sliceItems.after == null')
        }

    },
    IS_LOADING(state, boolValue) {
        state.isLoading = boolValue;
    },
    // кол-во просмотренных новостей
    COUNT_FOR_API(state, value) {
        if(value){
            value == 'after' ? state.countForAPI += 5 : state.countForAPI -= 5
        }
    }
}


const actions = {
    loadItems({commit}, value) {
        commit('IS_LOADING', true)
        commit('COUNT_FOR_API', value)
        let afterOrBefore = value == 'after' ? state.afterItems : state.beforeItems
        let partUrl = value ? `${value}=${afterOrBefore}&count=${state.countForAPI}` : ""
        axios.get(`https://www.reddit.com/r/news.json?limit=5&${partUrl}`)
            .then((res) => {
                commit('SAVE_ITEMS', res)
                commit('IS_LOADING', false)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


const getters = {}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store;