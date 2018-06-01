import Vue from 'vue'
import Vuex from 'vuex'
import debug from 'debug'
import root from './root'
import contacts from './contacts'
import tasks from './tasks'

let log = debug('store')

Vue.use(Vuex)

root.modules = {
  tasks,
  contacts
}

const store = new Vuex.Store(root)

log('Initial State', store.state)

export default store
