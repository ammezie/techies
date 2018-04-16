<template>
  <section class="section">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-centered">Log In</h2>

        <form method="POST" @submit.prevent="login">
          <div class="field">
            <label class="label">Email address</label>

            <div class="control">
              <input type="email" class="input" v-model="email">
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>

            <div class="control">
              <input type="password" class="input" v-model="password">
            </div>
          </div>

          <div class="control">
            <button class="button is-dark is-fullwidth">Log In</button>
          </div>
        </form>

        <hr>

        <p class="has-text-centered">
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

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
          // localStorage.setItem('USER_ID', response.data.login.user.id)
          localStorage.setItem('USER_TOKEN', response.data.login.token)

          // redirect user
          this.$router.replace('/')
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
