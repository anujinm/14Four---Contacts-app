<template lang="pug">
  .contacts
    .container.parent
      contact(v-for="(contact, index) in contacts" :key="'contact' + index" :data="contact" :index="index"
        :infoState="infoState" :infoState2="infoState2" :hover="onMouseHover" :hoverOff="onMouseOut" 
        :inactive="isInactive(index)" :active="isActive(index)" :isOdd="isOdd(index)")
</template>

<script>
// import { mapActions, mapState, mapGetters } from 'vuex'
import { mapActions, mapGetters } from 'vuex'
import debug from 'debug'
import Contact from './Contact'
let log = debug('component:Contacts')

export default {
  name: 'contacts',
  props: [
    'infoState',
    'infoState2'
  ],
  data () {
    return {
      activeRowIndex: -1
    }
  },
  beforeCreate: function () {
    this.rowIndex = -1
  },
  mounted: function () {
    log('Mounted')
  },
  computed: {
    // ...mapState('contacts', [
    //   'contacts'
    // ]),
    ...mapGetters('contacts', [
      'contacts'
    ])
  },
  methods: {
    ...mapActions('contacts', [
      'addContact',
      'removeContact'
    ]),
    onMouseHover (index) {
      this.activeRowIndex = index
      // console.log(this.rowIndex)
    },
    onMouseOut () {
      // console.log('mouseout')
      this.activeRowIndex = -1
    },
    isActive (index) {
      return index === this.activeRowIndex
    },
    isInactive (index) {
      return this.activeRowIndex !== -1 && index !== this.activeRowIndex
    },
    isOdd (index) {
      this.rowIndex = index
      return this.rowIndex % 2 === 1
    }
  },
  components: {
    contact: Contact
  }
}
</script>

<style lang="scss">
// unscoped scss
.contacts{
  .contact{
    // this does the same thing as isOdd()
    // so we can just use one of these 
    &:nth-child(even) {
      background: linear-gradient(#282828, #383838, #282828);
    }
  }
}

</style>

<style scoped lang="scss">
@import "../styles/_variables";
@import "../styles/_mixins";
.contacts {
  max-height: 490px;
  overflow: scroll;
  width: 310px;
  .parent {
    height: 100%;
    float:left;
  }
  .row{
    font-size: 15px;
    padding: 10px;
    border: 1px solid black;
    background: linear-gradient(#333333, #1C1C1C);
    position: relative;

    &:hover {
      .info{
        .detailsText{
          display: relative;
        }
      }
    }
  }
  .bullet {
    padding-right: 5px;
  }

  .container{
    padding: 0;
  }

  .info{
    .detailsText{
      display: none;
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
    }
  }
}
</style>
