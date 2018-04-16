const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { meetup } = require('./Mutation/meetup')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...meetup
  },
  AuthPayload
}
