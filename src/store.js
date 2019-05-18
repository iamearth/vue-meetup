import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
        id: 'akjnksdjv',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'Grand Park',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere aperiam recusandae amet. Porro magni commodi explicabo aspernatur ducimus pariatur id, atque, obcaecati voluptate at voluptatum, quaerat doloribus fugiat nam.'
      },
      { imageUrl: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72',
        id: 'sdkfbaknnckajc',
        title: 'Meetup in Paris',
        date: new Date(),
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
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    // If the data model is different than what is received then
    // this is how we remap the data to fit the model that we need.
    // Maybe there are some properties that we don't need,
    // We can get rid of it here. If we don't need to remap the data
    // then just the mutation function will do.
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'akchbsdknvskdv'
      }
      // At this point: Reach out to firebase and store it.
      // Firebase will also give us an ID which  we will learn how to store
      // This is also where we will upload the image and get the image path.
      // For now, we will  simply commit the logic as is.
      commit('createMeetup', meetup)
    }
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
