<template>
    <v-container>
        <v-layout row class="mb-3">
            <v-flex xs12 offset-sm3>
                <h1>Create a new Meetup</h1>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form  @submit.prevent="createMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                                name="title" 
                                label="Title" 
                                id="title"
                                v-model="title" 
                                required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                   <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                                name="location" 
                                label="Location" 
                                id="location"
                                v-model="location" 
                                required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                   <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                                name="imageUrl" 
                                label="Image Url" 
                                id="image-url"
                                v-model="imageUrl" 
                                required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                   <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" width="100%">
                        </v-flex>
                    </v-layout>
                   <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-textarea
                                name="description" 
                                label="Description" 
                                id="description"
                                v-model="description" 
                                required>
                            </v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row class="mb-2">
                        <v-flex xs12 sm6 offset-sm3>
                            <h2>Choose a Date and Time</h2>
                            <v-date-picker v-model="date"></v-date-picker>
                            <p>{{ date }}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h2>Choose a Date and Time</h2>
                            <v-time-picker v-model="time" format="24hr"></v-time-picker>
                            <p>{{ time }}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn class="primary" 
                                  :disabled="!formIsValid"
                                   type="submit">Create Meetup</v-btn>
                            {{ submitDateTime }}
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import moment from 'moment'
export default {
    name: 'CreateMeetup',
    data() {
        return {
            title: '',
            location: '',
            imageUrl: '',
            description: '',
            date: null,
            time: new Date()
        }
    },
    created() {
        const dateTime = moment()
        this.date = dateTime.format('YYYY-MM-DD').toString()
        this.time = dateTime.format('HH:mm').toString()
    },
    computed: {
        // only shows bbutton if all fields are filled
        formIsValid() {
            return this.title !== '' && 
                this.location !== '' && 
                this.imageUrl !== '' && 
                this.description !== ''
        },
        submitDateTime () {
            const date = new Date(this.date)
            if (typeof this.time === 'string') {
                // handles the time string from the picker which will  
                // retrieve the time and convert it into  the appropriate format
                const hours = this.time.match(/^(\d+)/)[1]  
                const minutes = this.time.match(/:(\d+)/)[1]
                // set the hour and minutes with the converted time 
                date.setHours(hours)
                date.setMinutes(minutes)
            } else {
                date.setHours(this.time.getHours())         // the time refers to the time property
                date.setMinutes(this.time.getMinutes())     // this works becasue of the Date method
                                                            // Once we choose a new time, it breaks
            }
            console.log(date)                           
            return date
        }
    },
    methods: {
        // stores the data onto the object costant
        createMeetup() {
            if(!this.formIsValid) {
                return 
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                imageUrl: this.imageUrl,
                description: this.description,
                date: this.submitDateTime
            }
            // ship the object to the store by running the function 
            // and passing the data through 
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
        }
    }
}
</script>

<style>

</style>
