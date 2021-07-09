<template>
  <div>
    <v-container>
      <h1>{{ fullName }}</h1>
      <p>Hourly Rate {{ rate }}</p>
      <span v-for="area in areas" :key="area">[ {{ "" + area + "" }} ]</span>
      <p>Deascription: {{ description }}</p>
      <div v-if="contactdisable">
        <h2>Interested to reach out now</h2>
        <v-btn
          depressed
          rounded
          outlined
          class="mr-1"
          :to="contactLink"
          @click="hideContactButton"
        >
          Contact
        </v-btn>
      </div>
    </v-container>
    <router-view v-if="!contactdisable"></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
      contactdisable: true,
    };
  },
  methods: {
    hideContactButton() {
      this.contactdisable = false;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
    console.log(this.selectedCoach);
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstname + " " + this.selectedCoach.lastname;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.descriptions;
    },
    contactLink() {
      return "/coaches" + "/" + this.id + "/contact";
    },
  },
};
</script>

<style lang="scss" scoped></style>
