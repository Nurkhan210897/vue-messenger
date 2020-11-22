import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: []
    },
    mutations: {
        SET_API_CONTACTS(state, response) {
            state.contacts = response.contacts;
        }
    },
    actions: {
        FETCH_API_CONTACTS({ commit }) {
            axios
                .get('./json/contacts.json')
                .then(function(response) {
                    commit('SET_API_CONTACTS', response.data)
                })
        },
        SET_USER_TO_HEADER({ commit }, user) {

        }
    },
    modules: {}
})