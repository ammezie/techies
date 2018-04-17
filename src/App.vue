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
      <router-view :me="me"/>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      name
      myMeetups {
        id
        title
        date
        location
        attendees {
          id
        }
      }
      meetupsAttending {
        id
        title
        date
        location
        organizer {
          name
        }
        attendees {
          id
        }
      }
    }
  }
`

export default {
  name: 'App',
  data () {
    return {
      me: {}
    }
  },
  apollo: {
    me: {
      query: ME_QUERY
    }
  }
}
</script>

<style>
body {
  background-color: #f9f9f9;
}
</style>
