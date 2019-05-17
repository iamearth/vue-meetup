import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Meetups from '@/components/meetup/Meetups'
import CreateMeetup from '@/components/meetup/CreateMeetup'
import Meetup from '@/components/meetup/Meetup'
import Profile from '@/components/user/Profile'
import Signin from '@/components/user/Signin'
import Signup from '@/components/user/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/profile',
      name: Profile,
      component: Profile
    },
    {
      path: '/signin',
      name: Signin,
      component: Signin
    },
    {
      path: '/signup',
      name: Signup,
      component: Signup
    }
  ]
})
