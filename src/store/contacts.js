'use strict'

import debug from 'debug'
let log = debug('store:contacts')
import Vue from 'vue'

const contacts = {

  namespaced: true,

  state: {
    currentEditContact: null,
    contactsObj: {
      '001': {
        bullet: 'green',
        name: 'Bruce W',
        phone: '456-356-6559',
        email: 'iambatman@yahoo.com',
        address: '6539 Wilton Ave. Culver City CA 90234'
      },
      '002': {
        bullet: 'green',
        name: 'T\'Challa',
        phone: '509-234-2313',
        email: 'bpanther@yahoo.com',
        address: '6539 Wilton Ave. Culver City CA 90234'
      },
      '003': {
        bullet: 'green',
        name: 'Hawk eye',
        phone: '509-345-3257',
        email: 'lookatmyeye@yahoo.com',
        address: '9707 Morton Ave. Seattle WA 21234'
      },
      '004': {
        bullet: 'yellow',
        name: 'Tony Stark',
        phone: '323-353-6890',
        email: 'iamtony@yahoo.com',
        address: '3456 N Ivanhoe Rd. Spokane WA 99214'
      },
      '005': {
        bullet: 'red',
        name: 'Natasha',
        phone: '323-876-2346',
        email: 'nat@yahoo.com',
        address: '4572 Boone Ave. SaltLake City WA 23421'
      },
      '006': {
        bullet: 'green',
        name: 'Loki',
        phone: '206-248-2761',
        email: 'Loki@yahoo.com',
        address: '1295 Southhill Ave. Pullman WA 99218'
      },
      '007': {
        bullet: 'green',
        name: 'Chris',
        phone: '509-345-3257',
        email: 'christiano@yahoo.com',
        address: '9707 Morton Ave. Seattle WA 21234'
      },
      '008': {
        bullet: 'yellow',
        name: 'Elly',
        phone: '323-353-6890',
        email: 'elly@yahoo.com',
        address: '3456 N Ivanhoe Rd. Spokane WA 99214'
      },
      '009': {
        bullet: 'red',
        name: 'Bucky',
        phone: '323-876-2346',
        email: 'mbucky@yahoo.com',
        address: '4572 Boone Ave. SaltLake City WA 23421'
      },
      '010': {
        bullet: 'green',
        name: 'Steve R',
        phone: '206-248-2761',
        email: 'captain@yahoo.com',
        address: '1295 Southhill Ave. Pullman WA 99218'
      },
      '011': {
        bullet: 'yellow',
        name: 'Hulk',
        phone: '564-564-7898',
        email: 'hulk@yahoo.com',
        address: '6539 Wilton Ave. New York NY 45684'
      },
      '012': {
        bullet: 'yellow',
        name: 'Thor',
        phone: '509-123-1352',
        email: 'thor@yahoo.com',
        address: '3242 Samson Rd. South City KN 77543'
      },
      '013': {
        bullet: 'green',
        name: 'Jacques',
        phone: '509-353-6890',
        email: 'rich@yahoo.com',
        address: '4568 Youth Rd. Culver City CA 12342'
      },
      '014': {
        bullet: 'red',
        name: 'Ryan',
        phone: '206-578-6467',
        email: 'ryanbb@hotmail.com',
        address: '4356 Mariam Ave. San Jose CA 90345'
      },
      '015': {
        bullet: 'green',
        name: 'Roberto',
        phone: '893-137-1123',
        email: 'roberto@yahoo.com',
        address: '300 W Hawthorne Rd. Spokane WA 99215'
      },
      '016': {
        bullet: 'green',
        name: 'Tom',
        phone: '509-457-1189',
        email: 'tomt@gmail.com',
        address: '6539 Wilton Ave. Culver City CA 90234'
      }
    }
  },

  mutations: {
    ADD_CONTACT (state, { contact }) {
      log('mutation ADD_CONTACT', contact)
      /* eslint-disable */
      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
      /* eslint-enable */
      const id = guid()
      Vue.set(state.contactsObj, id, contact)
    },
    REMOVE_CONTACT (state, { contact }) {
      log('mutation REMOVE_CONTACT', contact)
      const { id } = contact
      Vue.delete(state.contactsObj, id)
      /* for loop to loop through keys in the Object :
      /*
      /*  Object.keys(state.contactsObj).forEach((key) => {
      /*    const item = state.contactsObj[key]
      /*    console.log(item)
      /*  })   */
    },
    EDIT_CONTACT (state, { contact }) {
      log('mutation EDIT_CONTACT', contact)
      const { id } = contact
      Vue.set(state.contactsObj, id, contact)
      state.currentEditContact = null
    },
    SHOW_EDIT_CONTACT (state, { contact }) {
      state.currentEditContact = contact
    }
  },

  getters: {
    contacts (state) {
      const contacts = Object.keys(state.contactsObj).map((id) => {
        return { id, ...state.contactsObj[id] }
      })
      contacts.sort((a, b) => {
        const textA = a.name.toUpperCase()
        const textB = b.name.toUpperCase()
        const returnVal = (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        return returnVal
      })
      return contacts
    }
  },

  actions: {
    addContact (context, contact) {
      context.commit('ADD_CONTACT', { contact })
    },
    removeContact (context, contact) {
      context.commit('REMOVE_CONTACT', { contact })
    },
    editContact (context, contact) {
      context.commit('EDIT_CONTACT', { contact })
    },
    showEditContact (context, contact) {
      context.commit('SHOW_EDIT_CONTACT', { contact })
    }
  }
}

export default contacts
