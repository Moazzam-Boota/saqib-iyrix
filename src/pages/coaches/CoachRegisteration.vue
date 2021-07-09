<template>
  <div>
    <CoachForm></CoachForm>
  </div>
</template>

<script>
import CoachForm from "../../components/CoachForm.vue";
export default {
  components: {
    CoachForm,
  },

  methods: {
    // savaData(data) {
    //   this.$store.dispatch("coaches/registerCoach", data);
    //   console.log(data);
    // },
  },
};
</script>

<style lang="scss" scoped></style>
