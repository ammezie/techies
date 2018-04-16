<template>
  <div class="ui stackable relaxed grid container">
    <div class="twelve wide column">
      <div class="ui segment">
        <div class="ui divided items">
          <div
            class="item"
            v-for="(meetup, index) in meetups"
            :key="index"
            >
            <div class="content">
              <router-link class="header" :to="`${meetup.id}`">
                {{ meetup.title }}
              </router-link>
              <div class="meta">
                Organized by <strong>{{ meetup.organizer.name }}</strong>
              </div>
              <div class="description">
                <span>
                  <i class="calendar icon"></i> {{ meetup.date | moment("dddd, MMMM Do YYYY, hA") }}
                </span>
                <span>
                  <i class="map marker alternate icon"></i> {{ meetup.location }}
                </span>
              </div>
              <div class="extra">
                <i class="thumbs up icon"></i> {{ (meetup.attendees && meetup.attendees.length <= 1)
                ? `${meetup.attendees.length} attendee going`
                : `${meetup.attendees.length} attendees going` }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui vertical menu">
        <router-link class="item" to="/">All Meetups</router-link>
        <router-link class="item" to="/my-meetups">My Meetups</router-link>
        <router-link class="item" to="/meetups-going">I'm going</router-link>
      </div>
    </div>
  </div>
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
        id
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
