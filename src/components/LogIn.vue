<template>
  <div class="ui stackable three column centered grid container">
    <div class="column">
      <h3 class="ui horizontal divider header">Log In</h3>

      <form class="ui form" method="POST" @submit.prevent="login">
        <div class="field">
          <label>Email address</label>
          <input type="email" v-model="email" required>
        </div>

        <div class="field">
          <label>Password</label>
          <input type="password" v-model="password" required>
        </div>

        <button class="fluid ui primary button">Log In</button>
      </form>

      <div class="ui divider"></div>
      <div class="ui column grid">
        <div class="center aligned column">
          Don't have an account? <router-link to="/signup">Sign Up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LOGIN_MUTATION } from '@/graphql/mutations'

export default {
  name: 'LogIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$apollo
        .mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          // save user token to localstorage
          localStorage.setItem('USER_TOKEN', response.data.login.token)

          // redirect user
          this.$router.replace('/')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
