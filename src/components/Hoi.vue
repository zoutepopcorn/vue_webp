<template>
  <div>
    <h1>Hooiiii {{msg}}</h1>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: 'hoi',
  created() {
    console.log("create hoi");
    api.get('jaja').then(console.log).catch(console.log)
  },
  data () {
    return {
      msg: 'dit is Hoi.vue'
    }
  }
}
</script>
