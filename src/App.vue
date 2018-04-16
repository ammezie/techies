<template>
  <div id="app">
    <nav class="ui borderless menu">
      <div class="ui container">
        <div class="header item">
          <h1>
            <router-link class="navbar-item" to="/">Techies</router-link>
          </h1>
        </div>
        <div class="right menu">
          <template v-if="isAuthenticated">
            <router-link class="ui item" to="/create">Create a Meetup</router-link>
            <a class="ui item" @click="logout">Logout</a>
          </template>

          <template v-else>
            <router-link class="ui item" to="/login">Log In</router-link>
            <router-link class="ui item" to="/signup">Sign Up</router-link>
          </template>
        </div>
      </div>
    </nav>
    <div style="padding-top: 30px; padding-bottom: 30px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isAuthenticated: !!localStorage.getItem('USER_TOKEN')
    }
  },
  methods: {
    logout () {
      // remove user token from localstorage
      localStorage.removeItem('USER_TOKEN')

      // redirect user
      this.$router.replace('/login')
    }
  }
}
</script>

<style>
body {
  background-color: #f9f9f9;
}
</style>
