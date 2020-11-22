import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactList from '../components/contacts/v_contact_list'

Vue.use(VueRouter)

const routes = [{
    name: 'ContactList',
    path: '/',
    component: ContactList
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router