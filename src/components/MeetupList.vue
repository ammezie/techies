<template>
  <div class="ui stackable relaxed grid container">
    <div class="twelve wide column">
      <h2 class="ui header">All Meetups</h2>
      <div class="ui segment">
        <div v-if="$apollo.loading">Loading...</div>

        <Meetup :meetups="meetups"/>
      </div>
    </div>

    <div class="four wide column">
      <Menu/>
    </div>
  </div>
</template>

<script>
import { MEETUPS_QUERY } from '@/graphql/queries'
import Menu from '@/components/Menu'
import Meetup from '@/components/Meetup'

export default {
  name: 'MeetupList',
  components: { Menu, Meetup },
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
