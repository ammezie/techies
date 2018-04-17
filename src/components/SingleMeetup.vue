<template>
  <div class="ui stackable relaxed grid container">
    <div class="twelve wide column">
      <div class="ui segment">
        <h1 class="ui dividing header">
          {{ meetup.title }}
          <div class="sub header">Organized by {{ meetup.organizer.name }}</div>
        </h1>

        <div class="description">
          <h3 class="ui header">Details</h3>
          <p>{{ meetup.description }}</p>
          <p>
            <span>
              <i class="calendar icon"></i> {{ meetup.date | moment("dddd, MMMM Do YYYY, hA") }}
            </span>
            <span>
              <i class="map marker alternate icon"></i> {{ meetup.location }}
            </span>
          </p>
        </div>

        <h3 class="ui header">Are you going?</h3>

        <button class="ui icon primary button" v-if="attending" @click="notAttendingMeetup" title="I'm not going">
          <i class="large thumbs down outline icon"></i>
        </button>
        <button class="ui icon button" v-else @click="attendingMeetup" title="I'm going">
          <i class="large thumbs up outline icon"></i>
        </button>

        <h3 class="ui header">
          Attendees {{ `(${meetup.attendees.length})` }}
        </h3>

        <div class="ui bulleted list">
          <div
            class="item"
            v-for="(attendee, index) in meetup.attendees"
            :key="index"
            >{{ attendee.name }}</div>
        </div>
      </div>
    </div>
    <div class="four wide column">
      <Menu/>
    </div>
  </div>
</template>

<script>
import { MEETUP_QUERY, ME_QUERY } from '@/graphql/queries'
import {
  ATTENDING_MEETUP_MUTATION,
  NOT_ATTENDING_MEETUP_MUTATION
} from '@/graphql/mutations'
import Menu from '@/components/Menu'

export default {
  name: 'SingleMeetup',
  components: { Menu },
  data () {
    return {
      meetup: {},
      me: {}
    }
  },
  computed: {
    attending () {
      return this.meetup.attendees.some(item => {
        return item.id === this.me.id
      })
    }
  },
  apollo: {
    meetup: {
      query: MEETUP_QUERY,
      variables () {
        return {
          id: this.$route.params.id
        }
      }
    },
    me: {
      query: ME_QUERY
    }
  },
  methods: {
    attendingMeetup () {
      if (!localStorage.getItem('USER_TOKEN')) {
        alert('You must be logged in to perform the action.')
        this.$router.replace('/login')
      }

      this.$apollo
        .mutate({
          mutation: ATTENDING_MEETUP_MUTATION,
          variables: {
            id: this.$route.params.id
          }
        })
        .then(response => {
          this.meetup = response.data.attending
        })
        .catch(error => console.error(error))
    },
    notAttendingMeetup () {
      if (!localStorage.getItem('USER_TOKEN')) {
        alert('You must be logged in to perform the action.')
        this.$router.replace('/login')
      }

      this.$apollo
        .mutate({
          mutation: NOT_ATTENDING_MEETUP_MUTATION,
          variables: {
            id: this.$route.params.id
          }
        })
        .then(response => {
          this.meetup = response.data.notAttending
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
