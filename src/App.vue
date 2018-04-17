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
          <router-link class="ui item" to="/create">Create a Meetup</router-link>
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
  name: 'App'
}
</script>

<style>
body {
  background-color: #f9f9f9;
}
</style>
