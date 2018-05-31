<template lang="pug">
  .contacts
    .container
      contact(v-for="(contact, index) in contacts" :key="'contact' + index" :data="contact" :index="index"
        :infoState="infoState" :infoState2="infoState2" :hover="onMouseHover" :hoverOff="onMouseOut" 
        :inactive="isInactive(index)" :active="isActive(index)" :isOdd="isOdd(index)")
</template>

<script>
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
      activeRowIndex: -1,
      contacts: [
        {
          bullet: ['●', 'green'],
          name: 'Kate',
          phone: '509-234-2313',
          email: 'ahsdbm@yahoo.com',
          address: '6539 Wilton Ave. Culver City CA 90234'
        },
        {
          bullet: ['●', 'green'],
          name: 'Christian',
          phone: '509-345-3257',
          email: 'christianb@yahoo.com',
          address: '9707 Morton Ave. Seattle WA 21234'
        },
        {
          bullet: ['●', 'yellow'],
          name: 'Scott',
          phone: '323-353-6890',
          email: 'rich@yahoo.com',
          address: '3456 N Ivanhoe Rd. Spokane WA 99214'
        },
        {
          bullet: ['●', 'red'],
          name: 'Danny',
          phone: '323-876-2346',
          email: 'dannym@yahoo.com',
          address: '4572 Boone Ave. SaltLake City WA 23421'
        },
        {
          bullet: ['●', 'green'],
          name: 'Taka',
          phone: '206-248-2761',
          email: 'takataka@yahoo.com',
          address: '1295 Southhill Ave. Pullman WA 99218'
        },
        {
          bullet: ['●', 'yellow'],
          name: 'Tim',
          phone: '564-564-7898',
          email: 'tim@yahoo.com',
          address: '6539 Wilton Ave. New York NY 45684'
        },
        {
          bullet: ['●', 'yellow'],
          name: 'Patrick',
          phone: '509-123-1352',
          email: 'pjhb@yahoo.com',
          address: '3242 Samson Rd. South City KN 77543'
        },
        {
          bullet: ['●', 'green'],
          name: 'Jacques',
          phone: '509-353-6890',
          email: 'rich@yahoo.com',
          address: '4568 Youth Rd. Culver City CA 12342'
        },
        {
          bullet: ['●', 'red'],
          name: 'Ryan',
          phone: '206-578-6467',
          email: 'ryanbb@hotmail.com',
          address: '4356 Mariam Ave. San Jose CA 90345'
        },
        {
          bullet: ['●', 'red'],
          name: 'Anne',
          phone: '353-387-1234',
          email: 'anne@gmail.com',
          address: '6735 Anne Ave. San Fransisco CA 90224'
        },
        {
          bullet: ['●', 'green'],
          name: 'Roberto',
          phone: '893-137-1123',
          email: 'rr@yahoo.com',
          address: '300 W Hawthorne Rd. Spokane WA 99215'
        },
        {
          bullet: ['●', 'green'],
          name: 'Tom',
          phone: '509-457-1189',
          email: 'tomt@gmail.com',
          address: '6539 Wilton Ave. Culver City CA 90234'
        },
        {
          bullet: ['●', 'yellow'],
          name: 'Cat',
          phone: '323-387-1234',
          email: 'catty@gmail.com',
          address: '233 S Main St. Seattle WA 90234'
        }
      ]
    }
  },
  beforeCreate: function () {
    this.rowIndex = -1
  },
  mounted: function () {
    log('Mounted')
  },
  computed: {
  },
  methods: {
    onMouseHover (index) {
      // this.rowIndex = index
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
      return this.rowIndex % 2 === 0
    }
  },
  directives: {
    'bulletColor': {
      bind (el, binding, vmode) {
        el.style.color = 'green'
      }
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
    &:nth-child(odd) {
      background: linear-gradient(#282828, #383838, #282828);
    }
  }
}

</style>

<style scoped lang="scss">
@import "../styles/_variables";
@import "../styles/_mixins";
.contacts {
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
