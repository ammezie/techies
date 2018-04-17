<template>
  <div class="ui stackable relaxed grid container">
    <div class="twelve wide column">
      <h2 class="ui header">My Meetups</h2>
      <div class="ui segment">
        <div v-if="$apollo.loading">Loading...</div>

        <Meetup :meetups="me.myMeetups"/>
      </div>
    </div>

    <div class="four wide column">
      <Menu/>
    </div>
  </div>
</template>

<script>
import { ME_QUERY } from '@/graphql/queries'
import Menu from '@/components/Menu'
import Meetup from '@/components/Meetup'

export default {
  name: 'MyMeetups',
  components: { Menu, Meetup },
  data () {
    return {
      me: []
    }
  },
  apollo: {
    me: {
      query: ME_QUERY
    }
  }
}
</script>
