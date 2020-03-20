<template>
  <div id="users-list-view">
    <b-container>
      <BListGroup>
        <UserListItem v-for="(user) in users" :key="user._id" v-bind:userData="user" />
      </BListGroup>
    </b-container>
  </div>
</template>

<script>
import usersList from "@/assets/usersList.json";
import UserListItem from "@/components/UserListItem";
export default {
  components: {
    UserListItem
  },
  data: function() {
    return {
      users: usersList
    };
  }
};
</script>

<style lang="scss">
</style>