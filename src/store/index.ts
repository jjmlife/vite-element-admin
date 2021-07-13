import {createStore} from 'vuex'
import getters from './getters'
import users from './module/user'

const modules = {
    users
}

const store = createStore({
    modules: modules,
    getters
})

export default store;
