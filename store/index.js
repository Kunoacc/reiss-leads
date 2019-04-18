import Vuex from "vuex"

const state = () => {
    return {
        isThemeDark: false
    }
}

const mutations = {
    SET_THEME(state){
        state.isThemeDark = !state.isThemeDark
    }
}

const actions = {
    toggleTheme({commit}){
        commit('SET_THEME')
    }
}

const getters = {

}

const createStore = () => {
    return new Vuex.Store({
        state,
        mutations,
        actions,
        getters
    })
}

export default createStore