<template lang="pug">
  .editContactBox
    .getInfo(v-if="currentEditContact" id="box")
      .getName    
        label Name:
        input(ref="name" :value="currentEditContact.name") 
      .getPhone
        label Phone:
        input(ref="phone" :value="currentEditContact.phone")
      .getEmail
        label Email:
        input(ref="email" :value="currentEditContact.email")
      .getAddress
        label Address:
        textarea(ref="address" :value="currentEditContact.address")
      button(@click="editData" id="editBox") Save
      </style>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import debug from 'debug'
let log = debug('component:EditContactBox')

export default {
  name: 'editContactBox',
  props: [
    'index'
  ],
  data () {
    return {
    }
  },
  mounted: function () {
    log('Mounted')
  },
  computed: {
    ...mapGetters('contacts', [
      'contacts'
    ]),
    ...mapState('contacts', [
      'currentEditContact'
    ])
  },
  methods: {
    ...mapActions('contacts', [
      'addContact',
      'removeContact',
      'editContact'
    ]),
    editData () {
      const contact = {
        name: this.$refs.name.value,
        phone: this.$refs.phone.value,
        email: this.$refs.email.value,
        address: this.$refs.address.value,
        id: this.currentEditContact.id,
        bullet: 'green'
      }
      this.editContact(contact)
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables";
@import "../styles/_mixins";
.editContactBox {
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
      margin-left: 15em;
    }
    .getAddress label {
      vertical-align: 100%;
    }
  }
}
</style>
