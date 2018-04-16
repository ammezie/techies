<template>
  <div id="app">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <router-link class="navbar-item" to="/">Techies</router-link>

            <button class="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div class="navbar-menu">
            <div class="navbar-end">
              <router-link class="navbar-item" to="/login">Log In</router-link>
              <router-link class="navbar-item" to="/signup">Sign Up</router-link>
              <router-link class="navbar-item" to="/create">Create a Meetup</router-link>
              <router-link class="navbar-item" to="/logout">Logout</router-link>
            </div>
          </div>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
