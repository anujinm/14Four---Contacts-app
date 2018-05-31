<template lang="pug">
  .contact(@mouseover="onMouseOver" @mouseleave="onMouseOut" 
  :class="{active: active, inactive: inactive, isOdd: isOdd}")
    .background-active
    .bullet(v-bulletColor="data.bullet" ) ●
    .name(v-html="data.name")
    .vline
    .info
      data(v-html="data[infoState]")
      p.detailsText(v-html="data[infoState2] + '<br/><br/>' + data.address")
</template>

<script>
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
    onMouseOver () {
      if (typeof this.hover === 'function') {
        this.hover(this.index)
      }
    },
    onMouseOut () {
      if (typeof this.hoverOff === 'function') {
        this.hoverOff(this.index)
      }
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
    // what to do??
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
