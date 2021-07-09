<template>
  <div>
    <v-btn icon x-large class="ml-5" @click.stop="drawer = !drawer">
      <v-icon medium color="black" left icon>{{ mdiArrowLeft }}</v-icon>
    </v-btn>
    <v-card flat width="250" rounded>
      <v-navigation-drawer v-model="drawer" absolute temporary app floating>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import { mdiArrowLeft } from "@mdi/js";
export default {
  data() {
    return {
      drawer: false,
      mdiArrowLeft,
    };
  },
};
</script>

<style lang="scss" scoped></style>
