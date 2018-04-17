<template>
  <div class="ui vertical menu">
    <router-link class="item" exact to="/">All Meetups</router-link>
    <template v-if="isAuthenticated">
      <router-link class="item" exact to="/my-meetups">My Meetups</router-link>
      <router-link class="item" exact to="/meetups-going">I'm going</router-link>
      <a class="ui item" @click="logout">Logout</a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      isAuthenticated: !!localStorage.getItem('USER_TOKEN')
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('USER_TOKEN')

      this.$router.replace('/login')
    }
  }
}
</script>
