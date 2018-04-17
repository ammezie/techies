<template>
  <div class="ui stackable two column centered grid container">
    <div class="column">
      <h3 class="ui horizontal divider header">Create Meetup</h3>

      <form class="ui form" method="POST" @submit.prevent="createMeetup">
        <div class="field">
          <label>Title</label>
          <input type="text" v-model="title" required>
        </div>

        <div class="field">
          <label>Location</label>
          <input type="text" v-model="location" required>
        </div>

        <div class="field">
          <label>Date</label>
          <input type="datetime-local" v-model="date" required>
        </div>

        <div class="field">
          <label>Description</label>
          <textarea v-model="description" rows="10"></textarea>
        </div>

        <button class="ui primary button">Create Meetup</button>
      </form>
    </div>
  </div>
</template>

<script>
import { CREATE_MEETUP_MUTATION } from '@/graphql/mutations'
import { MEETUPS_QUERY } from '@/graphql/queries'

export default {
  name: 'NewMeetup',
  data () {
    return {
      title: '',
      description: '',
      date: '',
      location: ''
    }
  },
  methods: {
    createMeetup () {
      this.$apollo
        .mutate({
          mutation: CREATE_MEETUP_MUTATION,
          variables: {
            title: this.title,
            location: this.location,
            date: this.date,
            description: this.description
          },
          update: (store, { data: { createMeetup } }) => {
            // read data from cache for this query
            const data = store.readQuery({ query: MEETUPS_QUERY })

            // add the new meetup from this mutation to existing meetups
            data.meetups.push(createMeetup)

            // write data back to the cache
            store.writeQuery({ query: MEETUPS_QUERY, data })
          }
        })
        .then(response => {
          // redirect to home
          this.$router.replace('/')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
