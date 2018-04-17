<template>
  <div class="ui stackable relaxed grid container">
    <div class="twelve wide column">
      <h2 class="ui header">My Meetups</h2>
      <div class="ui segment">
        <Meetup :meetups="me.myMeetups"/>
      </div>
    </div>

    <div class="four wide column">
      <Menu/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Meetup from '@/components/Meetup'

export default {
  name: 'MyMeetups',
  props: ['me'],
  components: { Menu, Meetup }
}
</script>
