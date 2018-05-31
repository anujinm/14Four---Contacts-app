<template lang="pug">
  .contact(@mouseover="onMouseOver" @mouseleave="onMouseOut" :class="{active: active, inactive: inactive}")
    .background-active
    .bullet(v-bulletColor="" v-html="data.bullet")
    .name(v-html="data.name")
    .info
      .data(v-html="data[infoState]")
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
    'hoverOff'
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
        el.style.color = 'green'
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
  background: linear-gradient(#333333, #1C1C1C);
  position: relative;
  transition: background-color .33s ease-in-out;

  .background-active{
    position: absolute;
    top: 0; bottom: 0; right: 0; left: 0;
    transition: background-color .33s ease-in-out;
    opacity: 0;
    background-color: orange;
  }

  &.active {
    background: linear-gradient(#383838, #606060);
  }

  &.inactive{
    background:rgba(0,0,0,0.1);
    color: gray;
  }
  &:hover {
    .background-active{
      opacity: 1;
    }
    .info{
      .detailsText{
        display: block;
        transition: background-color 3s ease-in-out;
        background-color: orange;
        width: 190px;
        padding:10px; 
        margin-left: -10px;
      }
    }
    
  }
  .bullet {
    padding-right: 5px;
    display: inline-block;
    position: relative;
  }

  .name {
    width: 7em;
    display: inline-block;
    position: relative;
  }

  .info{
    display: inline-block;
    position: relative;
    .detailsText{
      display: none;
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
      z-index: 1;
    }
  }

  
}
</style>
