import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import LogIn from '@/components/LogIn'
import MeetupList from '@/components/MeetupList'
import SingleMeetup from '@/components/SingleMeetup'
import NewMeetup from '@/components/NewMeetup'
import MeetupsAttending from '@/components/MeetupsAttending'
import MyMeetups from '@/components/MyMeetups'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'MeetupList',
      component: MeetupList
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/create',
      name: 'NewMeetup',
      component: NewMeetup,
      meta: { requiresAuth: true }
    },
    {
      path: '/my-meetups',
      name: 'MyMeetups',
      component: MyMeetups
    },
    {
      path: '/meetups-going',
      name: 'MeetupsAttending',
      component: MeetupsAttending
    },
    {
      path: '/:id',
      name: 'SingleMeetup',
      component: SingleMeetup
    }
  ]
})
