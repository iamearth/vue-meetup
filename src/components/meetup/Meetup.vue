<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                    <h2>{{ meetup.title }}</h2>
                    </v-card-title>
                    <v-img
                        :src="meetup.imageUrl"
                        height="400px"
                    ></v-img>
                    <v-card-text>
                        <div>{{ meetup.date | date }} - {{ meetup.location }}</div>
                        <div>{{ meetup.description }}
                        </div>
                    </v-card-text>
                    <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Register</v-btn>
                    </v-card-action>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Meetup',
    props: ['id'],
    computed: {
        meetup() {
            return this.$store.getters.loadedMeetup(this.$route.params.id) // this.$route.params.id
        }
    }
}
</script>

<style>

</style>
