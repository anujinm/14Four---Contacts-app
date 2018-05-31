<template lang="pug">
  .main
    .container
      h5 Contacts
      hr  
      contacts(:infoState="infoState" :infoState2="infoState2")
      hr
      select(@change="getInfo")
        option(value="phone") Phone number
        option(value="email") Email address
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import debug from 'debug'
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
    // ...mapState('tasks', {
    //   tasksSorted: state => state.all.slice().sort((a, b) => a.title.localeCompare(b.title))
    // })
  },
  methods: {
    // ...mapActions('tasks', [
    //   'syncTask',
    //   'setActiveTask'
    // ]),
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
  },
  components: {
    'contacts': contacts
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
  h5 {
    padding: 15px;
  }
  background: linear-gradient(#333333, #1C1C1C);
  border-radius: 20px;
  color: white;
  height: 590px;
  width: 310px;
}
</style>
