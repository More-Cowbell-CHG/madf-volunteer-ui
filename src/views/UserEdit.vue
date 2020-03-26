<template>
  <b-spinner v-if="!userData" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>

  <UserForm v-else :userData="userData" />
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
// import usersList from "@/assets/usersList.json";
import UserForm from "@/components/UserForm.vue";

export default {
  components: {
    UserForm
  },
  data: function() {
    return {
      userData: undefined
    };
  },
  computed: {
    ...mapGetters(["authHeader"])
  },
  mounted: function() {
    console.log("MOUNTED");
    axios
      .get(
        `https://making-a-difference-foundation-volunteer-l6xs.onrender.com/user/${this.$route.params.id}`
      )
      .then(response => {
        this.userData = response.data;
      });
  }
};
</script>

<style lang="scss" scoped>
</style>