<template lang="pug">
  #app
    app-home
    //- transition(name="vt-page")
    router-view
</template>

<script>
// import Nav from '@/components/Nav'
import contacts from '@/components/Contacts'
import mainSrc from '@/components/Main'
import Home from '@/pages/Home'
import debug from 'debug'
let log = debug('App')
export default {
  name: 'app',
  mounted: function () {
    log('App Mounted')
    this.$store.dispatch('loading', false)
  },
  computed: {
  },
  methods: {
  },
  components: {
    'app-home': Home,
    'contacts': contacts,
    'mainScreen': mainSrc
  }
}
</script>

<style lang="scss">
@import "./styles/main";
#app {
  width: 100%;
  height: 700px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  hr {
    display: block;
    margin-top: 0em;
    margin-bottom: 0em;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border-width: 1px;
    color: grey;
  }
}
</style>
