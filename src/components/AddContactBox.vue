<template lang="pug">
  .addContactBox
    .getInfo(id="box")
      .getName    
        label Name:
        input(ref="name")
      .getPhone
        label Phone:
        input(ref="phone")
      .getEmail
        label Email:
        input(ref="email")
      .getAddress
        label Address:
        textarea(ref="address")
      button(@click="addData" id="addBox") Add Contact
      </style>
</template>

<script>
import { mapActions } from 'vuex'
import Contacts from '@/components/Contacts'
import debug from 'debug'
let log = debug('component:AddContactBox')
export default {
  name: 'addContactBox',
  props: [
    'contacts'
    // 'onCreate'
  ],
  data () {
    return {
    }
  },
  mounted: function () {
    log('Mounted')
  },
  computed: {
  },
  methods: {
    ...mapActions('contacts', [
      'addContact'
    ]),
    addData () {
      const contact = {
        name: this.$refs.name.value,
        phone: this.$refs.phone.value,
        email: this.$refs.email.value,
        address: this.$refs.address.value,
        bullet: 'green'
      }
      this.addContact(contact)
      var contactsBox = document.getElementById('contacts')
      console.log('here' + contactsBox.style.display)
      if (contactsBox.style.display === 'block') {
        contactsBox.style.display = 'none'
        contactsBox.style.height = '490px'
      }
      // if (typeof this.onCreate === 'function') {
      //   this.onCreate(contact)
      // }
    }
  },
  components: {
    'contacts': Contacts
  }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables";
@import "../styles/_mixins";
.addContactBox {
  // display: none;
  font-size: 15px;
  .getInfo {
    padding-bottom: 10px;
    padding-left: 25px;
    label {
      width:5em;
    }
    input {
      margin: 5px;
      width: 13em;
    }
    textarea {
      margin: 5px;
      width: 13em;
    }
    button {
      margin-left: 11.5em;
    }
    .getAddress label {
      vertical-align: 100%;
    }
  }
}
</style>
