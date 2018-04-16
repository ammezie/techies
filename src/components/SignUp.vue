<template>
  <div class="ui stackable three column centered grid container">
    <div class="column">
      <h3 class="ui horizontal divider header">Sign Up</h3>

      <form class="ui form" method="POST" @submit.prevent="signup">
        <div class="field">
          <label>Name</label>
          <input type="text" v-model="name" required>
        </div>

        <div class="field">
          <label>Email address</label>
          <input type="email" v-model="email" required>
        </div>

        <div class="field">
          <label>Password</label>
          <input type="password" v-model="password" required>
        </div>

        <button class="fluid ui primary button">Sign Up</button>
      </form>

      <div class="ui divider"></div>
      <div class="ui column grid">
        <div class="center aligned column">
          Already got an account? <router-link to="/login">Log In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
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
        .catch(error => console.error(error))
    }
  }
}
</script>
