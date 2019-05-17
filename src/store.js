import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
        id: 'akjnksdjv',
        title: 'Meetup in New York',
        date: '2017-07-17',
        location: 'Grand Park',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere aperiam recusandae amet. Porro magni commodi explicabo aspernatur ducimus pariatur id, atque, obcaecati voluptate at voluptatum, quaerat doloribus fugiat nam.'
      },
      { imageUrl: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72',
        id: 'sdkfbaknnckajc',
        title: 'Meetup in Paris',
        date: '2017-07-17',
        location: 'Eifel Tower',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere aperiam recusandae amet. Porro magni commodi explicabo aspernatur ducimus pariatur id, atque, obcaecati voluptate at voluptatum, quaerat doloribus fugiat nam.'
      }
    ],
    user: {
      id: 'akscndv',
      registeredMeetups: ['askcjnknv']
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
