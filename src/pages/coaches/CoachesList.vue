<template>
  <v-container>
    <p class="font-weight-bold mt-4 ml-5">All Coaches</p>
    <v-row>
      <v-col>
        <v-btn rounded outlined class="mr-2" @click="loadCoaches"> Refresh </v-btn>
        <v-btn rounded outlined class="ml-2" to="/register">
          Register As a Coach
        </v-btn>
      </v-col>
    </v-row>
    <div class="mt-2">
      <v-layout wrap>
        <h4>Find Your Coach</h4>
        <v-checkbox
          v-model="frontend"
          label="Frontend"
          @change="setFilter"
        ></v-checkbox>
        <v-checkbox
          label="Backend"
          v-model="backend"
          @change="setFilter"
        ></v-checkbox>
        <v-checkbox
          label="JavaScript"
          v-model="javascript"
          @change="setFilter"
        ></v-checkbox>
      </v-layout>
      <!-- filter check boxes -->
    </div>
    <v-list>
      <v-card class="mt-4" tile>
        <v-row style="position: absolute">
          <CoachListItem
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstname"
            :lastName="coach.lastname"
            :rate="coach.hourlyRate"
            :area="coach.areas"
          ></CoachListItem>
        </v-row>
      </v-card>
    </v-list>
  </v-container>
</template>

<script>
import CoachListItem from "../../components/CoachListItem.vue";
export default {
  components: {
    CoachListItem,
  },
  data() {
    return {
      // set value for check boxes
      frontend: true,
      backend: true,
      javascript: true,
      // set value for check boxes

      // detect change of check boxes set values
      activeFrontend: true,
      activeBackend: true,
      activeJavaScript: true,
      // detect change of check boxes set values
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFrontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeBackend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeJavaScript && coach.areas.includes("javascript")) {
          return true;
        }
        return false;
      });
    },
  },
  created() {
    this.$store.dispatch("coaches/getCoaches");
  },
  methods: {
    setFilter() {
      this.activeFrontend = this.frontend;
      this.activeBackend = this.backend;
      this.activeJavaScript = this.javascript;
    },
    loadCoaches() {
      this.$store.dispatch("coaches/getCoaches");
    },
  },
};
</script>

<style lang="scss" scoped></style>
