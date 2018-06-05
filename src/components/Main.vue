<template lang="pug">
  .main
    .container
      .title
        h5 Contacts
        button.btn.btn-default(@click="addContact") +
        addContactBox(ref="addBox" id="addBox" /* :onCreate="contactAdded"*/)
        editContactBox(v-if="currentEditContact" ref="editBox")
      hr  
      contacts(ref="contacts" id="contacts" :infoState="infoState" :infoState2="infoState2")
      hr
      select(@change="getInfo")
        option(value="phone") Phone number
        option(value="email") Email address
</template>

<script>
import { mapState, mapActions } from 'vuex'
import debug from 'debug'
import addContactBox from '@/components/AddContactBox'
import editContactBox from '@/components/EditContactBox'
import contacts from '@/components/Contacts'
let log = debug('component:Main')
export default {
  name: 'mainScr',
  props: [
    'index'
  ],
  data () {
    return {
      infoState: 'phone',
      infoState2: 'email'
    }
  },
  beforeCreate: function () {
  },
  mounted: function () {
    log('Mounted')
  },
  computed: {
    ...mapState('contacts', [
      'currentEditContact',
      'addNewContact'
    ])
  },
  methods: {
    ...mapActions('contacts', [
      'showNewContact'
    ]),
    getInfo (event) {
      const { value } = event.target
      this.infoState = value
      if (this.infoState === 'email') {
        this.infoState2 = 'phone'
      }
      if (this.infoState === 'phone') {
        this.infoState2 = 'email'
      }
    },
    addContact () {
      const addBox = document.getElementById('addBox')
      const contactsBox = document.getElementById('contacts')
      // const addBox = this.$refs.addBox
      // const contactsBox = this.$refs.contacts
      if (addBox.style.display === 'block') {
        addBox.style.display = 'none'
        contactsBox.style.height = '490px'
      } else {
        addBox.style.display = 'block'
        contactsBox.style.height = '333px'
      }
    }
    /* Using refs (instead of eventBus)
      it passes the info to Main and
      Main tells Contacts to update */
    // contactAdded (contact) {
    //   this.$refs.contacts.contacts.push(contact)
    // }
  },
  components: {
    'contacts': contacts,
    'addContactBox': addContactBox,
    'editContactBox': editContactBox
  }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables";
@import "../styles/_mixins";
.main{
  .container {
    padding:0;
  }
  select {
    font-size: small;
    width: 120px;
    margin-left: 50%;
    margin-top: 10px;
  }
  .title {
    justify-content: space-between;
    h5 {
      display: inline-block;
      padding-top: 20px;
      padding-bottom: 10px;
      width: 80%;
    }
    .btn {
      display: inline-block;
      width: 10%;
      background: transparent;
      color: white;
      font-size: 30px;
      padding-top: 0;
    }
  }
  background: linear-gradient(#333333, #1C1C1C);
  border-radius: 20px;
  color: white;
  height: 600px;
  width: 310px;
}
</style>
