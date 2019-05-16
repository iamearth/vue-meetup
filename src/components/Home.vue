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
                <v-carousel>
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :src="meetup.imageUrl"
                    :key="meetup.id">
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
    data()  {
        return {
            meetups: [
                { imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', 
                  id: 'akjnksdjv', 
                  title: 'Meetup in New York'
                },
                { imageUrl: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72', 
                  id: 'sdkfbaknnckajc', 
                  title: 'Meetup in Paris'
                }
            ]
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
