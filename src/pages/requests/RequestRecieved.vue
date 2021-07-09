<template>
  <v-container>
    <h2>Requests Recieved</h2>

    <v-list v-if="hasRequest">
      <v-card>
      <RequestItem
        v-for="request in receivedRequests"
        :key="request.id"
        :email="request.email"
        :message="request.message"
      ></RequestItem>
      </v-card>
    </v-list>

    <h3 v-else>You have not received any request yet.</h3>
  </v-container>
</template>

<script>
import RequestItem from "../../components/RequestItem.vue";
export default {
  components: {
    RequestItem,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequest() {
      return this.$store.getters["requests/hasRequest"];
    },
  },
};
</script>

<style lang="scss" scoped></style>
