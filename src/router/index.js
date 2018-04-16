import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import LogIn from '@/components/LogIn'
import MeetupList from '@/components/MeetupList'
import SingleMeetup from '@/components/SingleMeetup'

Vue.use(Router)

export default new Router({
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
      path: '/:id',
      name: 'SingleMeetup',
      component: SingleMeetup
    }
  ]
})
