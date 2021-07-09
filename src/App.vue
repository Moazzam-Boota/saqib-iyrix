<template>
  <v-app>
      <Drawer></Drawer>
    <v-app-bar flat color="white" dense app clipped-left>
      <Header></Header>
    </v-app-bar>
    <v-main :style="{ backgroundColor: backgroundColor, margin: margin }">
        <v-container fluid fill-height>
          <v-layout>
            <v-flex> <router-view></router-view> </v-flex>
          </v-layout>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "../src/components/Header.vue";
import Drawer from "../src/components/Drawer";

export default {
  name: "App",
  components: {
    Header,
    Drawer,
  },

  data: () => ({
    //
    backgroundColor: "#F4F4F7",
    margin: 0,
  }),
};
</script>
