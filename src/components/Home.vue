<template>
    <v-container>
        <!-- Meetup Buttons ------------------------------------>
        <v-layout row wrap class="mb-4">
            <v-flex xs12 class="text-xs-center">
                <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
                <v-btn large router to="/meetups/new" class="primary">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <!-- Carousel ------------------------------------>
        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel style="cursor: pointer">
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :src="meetup.imageUrl"
                    :key="meetup.id"
                    @click="onLoadMeetup(meetup.id)">
                    <div class="title">{{ meetup.title }}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <!-- Footer ------------------------------------>
        <v-layout row wrap class="mt-4">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        }
    },
    methods: {
        onLoadMeetup(id) {
            this.$router.push('/meetups/' + id)
        }
    }
}
</script>

<style scoped>
 .title {
     width: 100%;
     text-align: center;
     position: absolute;
     bottom: 50px;
     color: white;
     background:  rgba(0,0,0,0.5); 
     font-size: 2rem;
     margin: 0 auto;
 }
</style>
