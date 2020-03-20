<template>
  <div id="users-list-view">
    <b-spinner v-if="!users" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>

    <b-container>
      <BListGroup>
        <UserListItem v-for="(user) in users" :key="user._id" v-bind:userData="user" />
      </BListGroup>
    </b-container>
  </div>
</template>

<script>
// import usersList from "@/assets/usersList.json";
import axios from "axios";
import { mapGetters } from "vuex";
import UserListItem from "@/components/UserListItem";
export default {
  components: {
    UserListItem
  },
  data: function() {
    return {
      users: undefined
    };
  },
  computed: {
    ...mapGetters(["authHeader"])
  },
  mounted: function() {
    axios
      .get(
        "https://making-a-difference-foundation-volunteer-l6xs.onrender.com/user",
        this.authHeader
      )
      .then(response => {
        this.users = response.data.users;
      });
  }
};
</script>

<style lang="scss">
</style>