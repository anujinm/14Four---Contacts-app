<template lang="pug">
  .main
    .container
      .title
        h5 Contacts
        button.btn.btn-default(@click="addContact") +
        addContactBox(id="addBox" /* :onCreate="contactAdded"*/)
      hr  
      contacts(id="contacts" :infoState="infoState" :infoState2="infoState2" /*ref="contacts"*/)
      hr
      select(@change="getInfo")
        option(value="phone") Phone number
        option(value="email") Email address
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import debug from 'debug'
import addContactBox from '@/components/AddContactBox'
import contacts from '@/components/Contacts'
let log = debug('component:Main')
export default {
  name: 'mainScr',
  props: [],
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
  },
  methods: {
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
      var addBox = document.getElementById('addBox')
      var contactsBox = document.getElementById('contacts')
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
    'addContactBox': addContactBox
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
