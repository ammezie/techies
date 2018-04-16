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
          <p></p>
        </div>

        <div class="attendees">
          <h4 class="ui header">Attendees {{ `(${meetup.attendees.length})` }}</h4>

          <div class="ui bulleted list">
            <div
              class="item"
              v-for="(attendee, index) in meetup.attendees"
              :key="index"
              >{{ attendee.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui segment">
        <h3>Are you going?</h3>
        <div class="ui fluid buttons">
          <button class="ui icon button">
            <i class="large thumbs up outline icon"></i>
          </button>
          <div class="or"></div>
          <button class="ui icon button">
            <i class="large thumbs down outline icon"></i>
          </button>
        </div>
      </div>
      <div class="ui segment">
        <div class="ui list">
          <div class="item">
            <i class="calendar icon"></i>
            <div class="content">
              {{ meetup.date | moment("dddd, MMMM Do YYYY, hA") }}
            </div>
          </div>
          <div class="item">
            <i class="map marker alternate icon"></i>
            <div class="content">
              {{ meetup.location }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export const MEETUP_QUERY = gql`
  query MeetupQuery($id: ID!) {
    meetup(id: $id) {
      id
      title
      description
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
  name: 'SingleMeetup',
  data () {
    return {
      meetup: ''
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
    }
  }
}
</script>
