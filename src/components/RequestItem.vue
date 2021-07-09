<template>
  <v-list-item>
    <a :href="emailLink">{{ email }}</a>
    <v-list-item>{{ message }} </v-list-item>
  </v-list-item>
</template>

<script>
export default {
  props: ["email", "message"],

  components: {
    emailLink() {
      return "mailto" + this.email;
    },
  },
};
</script>

<style lang="scss" scoped></style>
