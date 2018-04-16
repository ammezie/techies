import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import LogIn from '@/components/LogIn'
import MeetupList from '@/components/MeetupList'
import SingleMeetup from '@/components/SingleMeetup'
import NewMeetup from '@/components/NewMeetup'

Vue.use(Router)

export default new Router({
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
      component: NewMeetup
    },
    {
      path: '/:id',
      name: 'SingleMeetup',
      component: SingleMeetup
    }
  ]
})
