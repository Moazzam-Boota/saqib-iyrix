<template>
<v-app-bar dark>
      <v-toolbar-title>Find a Coach</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class=".d-none">
        <v-btn to="/" text> All Coaches </v-btn>
        <v-btn to="/requests" text> Requests </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
