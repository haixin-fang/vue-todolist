import Vuex from 'vuex'
import defaultState from './state/state.js'
import mutations from './mutations/mutations.js'
import getters from './getters/getters.js'
import actions from './actions/actions.js'
const isDev = process.env.NODE_ENV === 'development'
export default () => {
    const store = new Vuex.Store({
        strict: isDev,
        state: defaultState,
        mutations,
        getters,
        actions
    })
    if (module.hot) {
        module.hot.accept([
            './state/state.js',
            './mutations/mutations.js',
            './actions/actions.js',
            './getters/getters.js'
        ], () => {
            const newState = require('./state/state.js').default
            const newMutations = require('./mutations/mutations.js').default
            const newActions = require('./actions/actions.js').default
            const newGetters = require('./getters/getters.js').default
            store.hotUpdate({
                state: newState,
                mutations: newMutations,
                getters: newGetters,
                actions: newActions
            })
        })
    }
    return store
}
