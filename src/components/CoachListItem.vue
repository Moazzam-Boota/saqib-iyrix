<template>
  <v-list-item>
    <v-list-item-avatar size="150">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="John" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="title">
        {{ fullName }}
        <v-row v-for="area in areas" :key="area">
          Area Of Experties {{ area }}
        </v-row>
      </v-list-item-title>
      <v-list-item-subtitle>
        <div>Hourly Rate: {{ rate }}</div>
        <div class="mt-2">
          <!-- <v-btn depressed rounded outlined class="mr-1" :to="coachContactLink">
            Contact
          </v-btn> -->
          <v-btn depressed rounded outlined class="ml-1" :to="coachDetallink">
            View Details
          </v-btn>
        </div></v-list-item-subtitle
      >
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "CoachListItem",
  props: ["id", "firstName", "lastName", "rate", "areas"],

  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return "/coaches/" + this.id + "/contact";
      // return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetallink() {
      return "/coaches/" + this.id;
      // return this.$route.path + "/" + this.id;
    },
  },
  beforeRouteUpdate() {
    console.log("this is before route update");
  },
};
</script>

<style lang="scss" scoped></style>
