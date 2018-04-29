<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
      console.log(res.data);
    }).catch(console.log)
  },
  data () {
    return {
      msg: 'Hello daar'
    }
  }
}
</script>
