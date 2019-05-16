  <template>
    <v-app>
    <!-- side navigation ----------------------------------------->
      <v-navigation-drawer temporary fixed v-model="sideNav">
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>supervisor_icon</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>View Meetups</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <!-- top  navigation ----------------------------------------->
      <v-toolbar>
        <v-toolbar-title>DevMeetup</v-toolbar-title>
        <!-- adds hamburger icon -->
        <v-toolbar-side-icon 
          @click="sideNav = !sideNav"
          class="hidden-sm-and-up">
        </v-toolbar-side-icon>
        <v-spacer><!-- space between logo and navigation --></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat>
            <v-icon left>supervisor_account</v-icon>
            View Meetups
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <main></main>
    </v-app>
  </template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sideNav: false
    }
  }
}
</script>
