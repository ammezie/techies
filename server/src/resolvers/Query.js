const { getUserId } = require('../utils')

const Query = {
  meetups (parent, args, ctx, info) {
    return ctx.db.query.meetups({ orderBy: 'date_DESC' }, info)
  },

  meetup (parent, { id }, ctx, info) {
    return ctx.db.query.meetup({ where: { id } }, info)
  },

  me (parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  }
}

module.exports = { Query }
