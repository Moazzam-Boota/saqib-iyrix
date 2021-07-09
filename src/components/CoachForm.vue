<template>
  <v-container>
    <v-form @click.prevent="submit">
      <!-- this text field for first name  -->

      <div>
        <v-text-field
          v-model.trim="firstname.val"
          label="First name"
          required
          color="purple"
          width="50"
        ></v-text-field>
      </div>
      <p v-if="!firstname.isValid" class="red--text">
        First Name should not be empty.
      </p>
      <!-- this text field for first name  -->

      <!-- this text field for last name  -->

      <div>
        <v-text-field
          v-model.trim="lastname.val"
          label="Last name"
          required
        ></v-text-field>
      </div>
      <p v-if="!lastname.isValid" class="red--text">
        Last Name should not be empty.
      </p>
      <!-- this text field for last name  -->

      <!-- this for rate  -->
      <div>
        <v-text-field
          v-model.number="rate.val"
          label="Hourly rate"
          required
        ></v-text-field>
      </div>
      <p v-if="!rate.isValid" class="red--text">Error</p>
      <!-- this for rate  -->

      <!-- these are checkboxes -->
      <div>
        <v-row>
          <v-checkbox label="Frontend" v-model="frontend"></v-checkbox>
          <v-checkbox label="Backend" v-model="backend"></v-checkbox>
          <v-checkbox label="JavaScript" v-model="javascript"></v-checkbox>
        </v-row>
      </div>
      <p v-if="!areas.isValid" class="red--text">
        Must choose one or more options
      </p>
      <!-- these are checkboxes -->

      <!-- descriptions -->
      <div>
        <v-textarea v-model.trim="descriptions.val" color="teal">
          <template v-slot:label>
            <div>Description <small>(optional)</small></div>
          </template>
        </v-textarea>
      </div>
      <p v-if="!descriptions.isValid" class="red--text">
        Enter some Introduction
      </p>
      <!-- descriptions -->

      <!-- submit button -->
      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <!-- submit button -->
    </v-form>
    <p v-if="!formIsValid" class="red--text">
      Please fix some errors and try again to submit the form
    </p>
    <v-dialog v-if="formIsValid">
      <h1>Thank You</h1>
      <p>Your data submitted successfully</p>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  emits: ["sava-data"],
  data() {
    return {
      // set values for v-model text fields
      firstname: {
        val: "",
        isValid: true,
      },
      lastname: {
        val: "",
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      descriptions: {
        val: "",
        isValid: true,
      },
      // set values for v-model text fields

      // for change check box
      frontend: false,
      backend: false,
      javascript: false,
      // for change check box

      // set value for push to array
      frontendValue: "",
      backendValue: "",
      javaScripValue: "",
      areas: {
        val: [],
        isValid: true,
      },
      // set value for push to array

      formIsValid: true,
    };
  },
  methods: {
    //validation function on form submit
    validation() {
      this.formIsValid = true;

      if (this.firstname.val === "") {
        this.formIsValid = false;
        this.firstname.isValid = false;
      }
      if (this.lastname.val === "") {
        this.formIsValid = false;
        this.lastname.isValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.formIsValid = false;
        this.rate.isValid = false;
      }
      if (this.descriptions.val === "") {
        this.formIsValid = false;
        this.descriptions.isValid = false;
      }
      if (this.areas.val.length === 0) {
        this.formIsValid = false;
        this.areas.isValid = false;
      }
    },

    //validation function on form submit
    // calling function on form submission
    submit() {
      // calling this function on form submit and this is function scope
      if (this.frontend) {
        this.frontendValue == "frontend";
        this.areas.val.push("frontend");
      }
      if (this.backend) {
        this.backendValue == "backend";
        this.areas.val.push("backend");
      }
      if (this.javascript) {
        this.javaScripValue == "javascript";
        this.areas.val.push("javascript");
      }
      this.validation();

      if (!this.formIsValid) {
        return;
      }

      const formdata = {
        firstname: this.firstname.val,
        lastname: this.lastname.val,
        descriptions: this.descriptions.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      // console.log(formdata);
      // this.$emit("save-data", formdata);
      this.$store.dispatch("coaches/registerCoach", formdata);

      // set value again to empty
      this.firstname.val = "";
      this.lastname.val = "";
      this.descriptions.val = "";
      this.rate.val = null;
      this.areas.val = null;

      // set value again to empty

      //set route to back

      this.$router.replace("/");
      //set route to back
    },
    // calling function on form submission
  },
};
</script>

<style lang="scss" scoped>
.invalid label {
  color: red;
}
</style>
