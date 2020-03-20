<template>
  <UserForm :userData="userData" />
</template>

<script>
import usersList from "@/assets/usersList.json";
import UserForm from "@/components/UserForm.vue";

export default {
  components: {
    UserForm
  },
  data: function() {
    return {
      userData: usersList.find(x => x._id === this.$route.params.id)
    };
  }
};
</script>

<style lang="scss" scoped>
</style>