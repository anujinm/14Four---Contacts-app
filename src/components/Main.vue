<template lang="pug">
  .main
    .container
      .title
        h5 Contacts
        button.btn.btn-default(@click="showAdd = !showAdd" ) +
        addContactBox(v-if="showAdd" /* :onCreate="contactAdded"*/)
        editContactBox(v-if="currentEditContact")
      hr  
      contacts.contacts(ref="contacts" id="contacts" :infoState="infoState" :infoState2="infoState2")
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
      showAdd: false,
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
    text-shadow: 2px 2px 4px #000000;
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
  height: $main-height;
  width: $main-width;
  overflow: auto;
  box-shadow: 10px 10px 15px #5b4855;
}
</style>
