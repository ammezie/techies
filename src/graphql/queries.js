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
        id
        name
      }
    }
  }
`
