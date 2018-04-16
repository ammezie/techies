<template>
  <section class="section">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-centered">Sign Up</h2>

        <form method="POST" @submit.prevent="signup">
          <div class="field">
            <label class="label">Name</label>

            <div class="control">
              <input type="text" class="input" v-model="name">
            </div>
          </div>

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
            <button class="button is-dark is-fullwidth">Sign Up</button>
          </div>
        </form>

        <hr>

        <p class="has-text-centered">
          <router-link to="/login">Log In</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
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
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      this.$apollo
        .mutate({
          mutation: SIGNUP_MUTATION,
          variables: {
            name: this.name,
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          localStorage.setItem('USER_TOKEN', response.data.signup.token)

          // redirect to login page
          this.$router.replace('/')
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
