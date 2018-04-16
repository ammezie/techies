const { getUserId } = require('../../utils')

const meetup = {
  async createMeetup (
    parent,
    { title, description, date, location },
    ctx,
    info
  ) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createMeetup(
      {
        data: {
          title,
          description,
          date,
          location,
          organizer: {
            connect: {
              id: userId
            }
          }
        }
      },
      info
    )
  },
  async attending (parent, { id }, ctx, info) {
    const userId = getUserId(ctx)

    const meetupExists = await ctx.db.exists.Meetup({
      id
    })

    if (!meetupExists) {
      throw new Error('Sorry, meetup not found!')
    }

    return ctx.db.mutation.updateMeetup(
      {
        where: {
          id
        },
        data: {
          attendees: {
            connect: {
              id: userId
            }
          }
        }
      },
      info
    )
  },
  async notAttending (parent, { id }, ctx, info) {
    console.log('here')

    const userId = getUserId(ctx)

    const meetupExists = await ctx.db.exists.Meetup({
      id
    })

    if (!meetupExists) {
      throw new Error('Sorry, meetup not found!')
    }

    return ctx.db.mutation.updateMeetup(
      {
        where: {
          id
        },
        data: {
          attendees: {
            disconnect: {
              id: userId
            }
          }
        }
      },
      info
    )
  }
}

module.exports = {
  meetup
}
