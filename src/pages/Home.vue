<template lang="pug">
  .home
    .container
      h5 Welcome to the amazing contacts app
        //- h5 here is my component
      mainScreen
</template>

<script>
import mainScr from '@/components/Main'
import debug from 'debug'
let log = debug('component:Home')
export default {
  name: 'home',
  props: [],
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
  },
  components: {
    'mainScreen': mainScr
  }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables";
@import "../styles/_mixins";
.home {
  background: radial-gradient(circle,#e8bbd8, #fffcdc);
  padding: 50px;
}
</style>
