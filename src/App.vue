<template>
  <div id="app">
    <h1>
      App
    </h1>
    <img src="./assets/logo.png">
    <router-link to="/hello">Hallo</router-link>
    <router-link to="/hoi">Hoi</router-link>
    <router-link to="/vueti">Vueti</router-link>
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
