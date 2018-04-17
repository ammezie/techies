<template>
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
        <div class="meta" v-if="meetup.organizer">
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
</template>

<script>
export default {
  name: 'Meetup',
  props: ['meetups']
}
</script>
