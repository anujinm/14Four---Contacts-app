'use strict'

import debug from 'debug'
let log = debug('store:contacts')

const contacts = {

  namespaced: true,

  state: {
    contacts: [
      {
        bullet: 'green',
        name: 'Kate',
        phone: '509-234-2313',
        email: 'ahsdbm@yahoo.com',
        address: '6539 Wilton Ave. Culver City CA 90234'
      },
      {
        bullet: 'green',
        name: 'Christian',
        phone: '509-345-3257',
        email: 'christianb@yahoo.com',
        address: '9707 Morton Ave. Seattle WA 21234'
      },
      {
        bullet: 'yellow',
        name: 'Scott',
        phone: '323-353-6890',
        email: 'rich@yahoo.com',
        address: '3456 N Ivanhoe Rd. Spokane WA 99214'
      },
      {
        bullet: 'red',
        name: 'Danny',
        phone: '323-876-2346',
        email: 'dannym@yahoo.com',
        address: '4572 Boone Ave. SaltLake City WA 23421'
      },
      {
        bullet: 'green',
        name: 'Taka',
        phone: '206-248-2761',
        email: 'takataka@yahoo.com',
        address: '1295 Southhill Ave. Pullman WA 99218'
      },
      {
        bullet: 'green',
        name: 'Christian',
        phone: '509-345-3257',
        email: 'christianb@yahoo.com',
        address: '9707 Morton Ave. Seattle WA 21234'
      },
      {
        bullet: 'yellow',
        name: 'Scott',
        phone: '323-353-6890',
        email: 'rich@yahoo.com',
        address: '3456 N Ivanhoe Rd. Spokane WA 99214'
      },
      {
        bullet: 'red',
        name: 'Danny',
        phone: '323-876-2346',
        email: 'dannym@yahoo.com',
        address: '4572 Boone Ave. SaltLake City WA 23421'
      },
      {
        bullet: 'green',
        name: 'Taka',
        phone: '206-248-2761',
        email: 'takataka@yahoo.com',
        address: '1295 Southhill Ave. Pullman WA 99218'
      },
      {
        bullet: 'yellow',
        name: 'Tim',
        phone: '564-564-7898',
        email: 'tim@yahoo.com',
        address: '6539 Wilton Ave. New York NY 45684'
      },
      {
        bullet: 'yellow',
        name: 'Patrick',
        phone: '509-123-1352',
        email: 'pjhb@yahoo.com',
        address: '3242 Samson Rd. South City KN 77543'
      },
      {
        bullet: 'green',
        name: 'Jacques',
        phone: '509-353-6890',
        email: 'rich@yahoo.com',
        address: '4568 Youth Rd. Culver City CA 12342'
      },
      {
        bullet: 'red',
        name: 'Ryan',
        phone: '206-578-6467',
        email: 'ryanbb@hotmail.com',
        address: '4356 Mariam Ave. San Jose CA 90345'
      },
      {
        bullet: 'green',
        name: 'Roberto',
        phone: '893-137-1123',
        email: 'roberto@yahoo.com',
        address: '300 W Hawthorne Rd. Spokane WA 99215'
      },
      {
        bullet: 'green',
        name: 'Tom',
        phone: '509-457-1189',
        email: 'tomt@gmail.com',
        address: '6539 Wilton Ave. Culver City CA 90234'
      }
    ]
  },

  mutations: {
    ADD_CONTACT (state, { contact }) {
      log('mutation ADD_CONTACT', contact)
      state.contacts.push(contact)
    }
  },

  getters: {
  },

  actions: {
    addContact (context, contact) {
      context.commit('ADD_CONTACT', { contact })
    }
  }

}

export default contacts
