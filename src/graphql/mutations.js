import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const CREATE_MEETUP_MUTATION = gql`
  mutation CreateMeetupMutation(
    $title: String!
    $location: String!
    $date: DateTime!
    $description: String!
  ) {
    createMeetup(
      title: $title
      location: $location
      date: $date
      description: $description
    ) {
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

export const ATTENDING_MEETUP_MUTATION = gql`
  mutation AttendingMeetupMutation($id: ID!) {
    attending(id: $id) {
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

export const NOT_ATTENDING_MEETUP_MUTATION = gql`
  mutation AttendingMeetupMutation($id: ID!) {
    notAttending(id: $id) {
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
