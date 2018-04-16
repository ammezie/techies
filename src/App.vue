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
          <router-link class="ui item" to="/login" v-if="!authenticated">Log In</router-link>
          <router-link class="ui item" to="/signup" v-if="!authenticated">Sign Up</router-link>
          <router-link class="ui item" to="/create" v-if="authenticated">Create a Meetup</router-link>
          <a class="ui item" @click="logout" v-if="authenticated">Logout</a>
        </div>
      </div>
    </nav>
    <div style="padding-top: 50px; padding-bottom: 50px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    authenticated () {
      return !!localStorage.getItem('USER_TOKEN')
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
