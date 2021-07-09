<template>
  <v-container>
    <v-form @submit.prevent="sendMessage">
      <v-text-field
        v-model.trim="email"
        label="Enter Email id"
        required
        color="purple"
      ></v-text-field>
      <p v-if="!formIsValid" class="red--text">Please enter your email</p>

      <v-textarea v-model.trim="message" color="teal">
        <template v-slot:label>
          <div>Messaage</div>
        </template>
      </v-textarea>
      <p v-if="!formIsValid" class="red--text">Please enter message</p>
      <v-btn class="mr-4" @click="sendMessage" depressed rounded outlined>
        Send Message</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    sendMessage() {
      this.formIsValid = true;

      if (this.email === "" || !this.email.includes("@") || this.email === "") {
        this.formIsValid = false;
        return;
      }

      const newRequest = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      };

      this.$store.dispatch("requests/contactCoach", newRequest);
      console.log(newRequest);
      this.$router.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
