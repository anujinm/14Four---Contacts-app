'use strict'

import debug from 'debug'
let log = debug('store:contacts')

const contacts = {

  namespaced: true,

  state: {
    contacts: [
      {
        bullet: 'green',
        name: 'T\'Challa',
        phone: '509-234-2313',
        email: 'bpanther@yahoo.com',
        address: '6539 Wilton Ave. Culver City CA 90234'
      },
      {
        bullet: 'green',
        name: 'Hawk eye',
        phone: '509-345-3257',
        email: 'lookatmyeye@yahoo.com',
        address: '9707 Morton Ave. Seattle WA 21234'
      },
      {
        bullet: 'yellow',
        name: 'Tony Stark',
        phone: '323-353-6890',
        email: 'iamtony@yahoo.com',
        address: '3456 N Ivanhoe Rd. Spokane WA 99214'
      },
      {
        bullet: 'red',
        name: 'Natasha',
        phone: '323-876-2346',
        email: 'nat@yahoo.com',
        address: '4572 Boone Ave. SaltLake City WA 23421'
      },
      {
        bullet: 'green',
        name: 'Loki',
        phone: '206-248-2761',
        email: 'Loki@yahoo.com',
        address: '1295 Southhill Ave. Pullman WA 99218'
      },
      {
        bullet: 'green',
        name: 'Chris',
        phone: '509-345-3257',
        email: 'christiano@yahoo.com',
        address: '9707 Morton Ave. Seattle WA 21234'
      },
      {
        bullet: 'yellow',
        name: 'Elly',
        phone: '323-353-6890',
        email: 'elly@yahoo.com',
        address: '3456 N Ivanhoe Rd. Spokane WA 99214'
      },
      {
        bullet: 'red',
        name: 'Bucky',
        phone: '323-876-2346',
        email: 'mbucky@yahoo.com',
        address: '4572 Boone Ave. SaltLake City WA 23421'
      },
      {
        bullet: 'green',
        name: 'Steve R',
        phone: '206-248-2761',
        email: 'captain@yahoo.com',
        address: '1295 Southhill Ave. Pullman WA 99218'
      },
      {
        bullet: 'yellow',
        name: 'Hulk',
        phone: '564-564-7898',
        email: 'hulk@yahoo.com',
        address: '6539 Wilton Ave. New York NY 45684'
      },
      {
        bullet: 'yellow',
        name: 'Thor',
        phone: '509-123-1352',
        email: 'thor@yahoo.com',
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
      console.log(contact)
    },
    REMOVE_CONTACT (state, { contact }) {
      console.log('coming in name: ' + contact.name)
      log('mutation REMOVE_CONTACT', contact)
      var myIndex = -1
      var i
      let cont = contacts.state.contacts
      console.log(cont)
      for (i = 0; i < cont.length; i++) {
        console.log('my i: ' + i)
        if (cont[i].name === contact.name) {
          myIndex = i
        }
      }
      console.log('final index: ' + myIndex)
      state.contacts.splice(myIndex, 1)
    }
  },

  getters: {
  },

  actions: {
    addContact (context, contact) {
      context.commit('ADD_CONTACT', { contact })
    },
    removeContact (context, contact) {
      context.commit('REMOVE_CONTACT', { contact })
    }
  }

}

export default contacts
