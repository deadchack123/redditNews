import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')
Vue.use(Vuex)

const state = {
    data: [],
    after: "",
    before: "",
    count: 5,
    forbid: false,
    show: true
}

const mutations = {
    // сохранение данных
    SAVE_DATA(state, payload) {
        let cutData = payload.data.data
        state.data = cutData.children
        state.after = cutData.after
        state.before = cutData.before
    },
    // показ/скрытие текущей страницы
    SHOW(state, payload) {
        state.show = payload
    },
    // блок кнопок
    FORBID(state, payload) {
        state.forbid = payload
    },
    // кол-во просмотренных новостей
    COUNT(state, payload) {
        state.count = state.count + parseInt(`${payload}` + 5)
    }
}


const actions = {
    takeNews({ commit }) {
        axios.get('https://www.reddit.com/r/news.json?limit=5')
            .then((res) => {
                commit('SAVE_DATA', res)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    nextNews({ commit }) {
        if (state.after) {
            commit('SHOW', false)
            commit('FORBID', true)
            axios.get('https://www.reddit.com/r/news.json?limit=5&after=' + state.after + '&count=' + state.count)
                .then((res) => {
                    commit('SAVE_DATA', res)
                    commit('COUNT', '+')
                    commit('SHOW', true)
                    commit('FORBID', false)
                })
                .catch((err) => {
                    console.log(err)
                })

        } else {
            console.log(new Error('Нет данных'))
        }
    },
    prevNews({ commit }) {
        if (state.before) {
            commit('SHOW', false)
            commit('FORBID', true)
            axios.get('https://www.reddit.com/r/news.json?limit=5&before=' + state.before + '&count=' + state.count)
                .then((res) => {
                    commit('SAVE_DATA', res)
                    commit('COUNT', '-')
                    commit('SHOW', true)
                    commit('FORBID', false)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            console.log(new Error('Нет данных'))
        }
    }
}


const getters = {
    data: state => state.data,
    count: state => state.count,
    forbid: state => state.forbid,
    show: state => state.show
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store;