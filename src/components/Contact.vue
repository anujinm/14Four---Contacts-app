<template lang="pug">
  .contact(@mouseover="onMouseOver" @mouseleave="onMouseOut" 
  :class="{active: active, inactive: inactive, isOdd: isOdd}")
    .background-active
    .bullet(v-bulletColor="data.bullet" ) ●
    .name(v-html="data.name")
    .vline
    .info
      a.email(v-if="infoState === 'email'" v-html="data.email")
      .phone(v-else v-html="data.phone")
      .detailsText
        a.email(v-if="infoState2 === 'email'" v-html="data.email")
        .phone(v-if="infoState2 === 'phone'" v-html="data.phone")
        .address(v-html="'<br/>' + data.address")
        button(@click="deleteContact") Delete contact
        button Edit contact
</template>

<script>
import { mapActions } from 'vuex'
import debug from 'debug'
let log = debug('component:Contact')
export default {
  name: 'contact',
  props: [
    'data',
    'infoState',
    'infoState2',
    'index',
    'active',
    'inactive',
    'hover',
    'hoverOff',
    'isOdd'
  ],
  data () {
    return {
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
    ...mapActions('contacts', [
      'removeContact'
    ]),
    onMouseOver () {
      if (typeof this.hover === 'function') {
        this.hover(this.index)
      }
    },
    onMouseOut () {
      if (typeof this.hoverOff === 'function') {
        this.hoverOff(this.index)
      }
    },
    deleteContact () {
      const contact = this.data
      this.removeContact(contact)
    }
  },
  components: {
  },
  directives: {
    'bulletColor': {
      bind (el, binding, vmode) {
        el.style.color = binding.value
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables";
@import "../styles/_mixins";
.contact {
  font-size: 15px;
  padding: 10px;
  border: 1px solid black;
  background:linear-gradient(#1C1C1C, #282828, #1c1c1c);
  position: relative;
  transition: background-color .33s ease-in-out;
  
  button {
    display: inline;
  }
  .email{
    color: #7fbfff;
    border-bottom: 1px solid #7fbfff;
    cursor: pointer;
    &:hover {
      color: #7fbfff;
    }
  }
  
  &.isOdd {
    background: linear-gradient(#282828, #383838, #282828);
  }
  .background-active {
    position: absolute;
    top: 0; bottom: 0; right: 0; left: 0;
    transition: background-color .33s ease-in-out;
    opacity: 0;
    background-color: #585858;
  }

  &.active {
    background: linear-gradient(#383838, #606060);
    .vline {
      display: none;
    }
  }

  &.inactive {
    background:rgba(0,0,0,0.8);
    color: #303030;
  }
  &:hover {
    .background-active{
      opacity: 1;
    }
    .info{
      .detailsText{
        display: block;
        transition: background-color 3s ease-in-out;
        background-color: #585858;
        width: 193px;
        padding-left: 25px;
        padding-right: 10px;
        padding-top: 10px; 
        padding-bottom: 10px;  
        margin-left: -27px;
      }
    }
    
  }
  .bullet {
    padding-right: 5px;
    display: inline-block;
    position: relative;
  }

  .name {
    width: 6em;
    display: inline-block;
    position: relative;
  }

  .info{
    display: inline-block;
    position: relative;
    left: 10%;
    .detailsText{
      display: none;
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
      z-index: 1;
    }
  }

  .vline {
    width: 1em;
    border-left: 1px solid black;
    height: 35px;
    position: absolute;
    top:0; bottom: 0;
    display: inline-block;
  }
  
}
</style>
