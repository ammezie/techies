<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="box">
          <div
            class="columns"
            v-for="(meetup, index) in meetups"
            :key="index">
            <div class="column is-3">
              <p>
                {{ meetup.date | moment("dddd, MMMM Do YYYY, hA") }}
              </p>
            </div>
            <div class="column is-9">
              <h2 class="title is-5">
                {{ meetup.title }}
              </h2>
              <h3 class="subtitle is-6">
                {{ (meetup.attendees && meetup.attendees.length <= 1)
                ? `${meetup.attendees.length} attendee going`
                : `${meetup.attendees.length} attendees going` }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export const MEETUPS_QUERY = gql`
  query MeetupsQuery {
    meetups {
      id
      title
      date
      location
      organizer {
        name
      }
      attendees {
        name
      }
    }
  }
`
export default {
  name: 'MeetupList',
  data () {
    return {
      meetups: []
    }
  },
  apollo: {
    meetups: {
      query: MEETUPS_QUERY
    }
  }
}
</script>
