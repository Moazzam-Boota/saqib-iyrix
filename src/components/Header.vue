<template>
  <v-row>
    <p class="font-weight-bold mt-4 ml-5">Find a Coach</p>
    <v-menu left min-width="200px" offset-y content-class="elevation-0">
      <template v-slot:activator="{ on }">
        <v-btn icon x-large v-on="on">
          <v-icon large left icon>{{ mdiMenuDown }}</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-btn depressed rounded text to="/"> All Coach </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn depressed rounded text to="/requests"> Requests </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
    <v-spacer></v-spacer>
    <v-menu bottom min-width="200px" square- offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon x-large v-on="on" class="ml-2">
          <v-avatar color="#EA8E6F" rounded size="40">
            <span class="white--text text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn depressed rounded text> Edit Account </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn depressed rounded text> Disconnect </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script>
import { mdiMenuDown } from "@mdi/js";
import { mdiArrowLeft } from "@mdi/js";
export default {
  data() {
    return {
      user: {
        initials: "JD",
        fullName: "John Doe",
        email: "john.doe@doe.com",
      },
      mdiMenuDown: mdiMenuDown,
      drawer: false,
      mdiArrowLeft: mdiArrowLeft,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
