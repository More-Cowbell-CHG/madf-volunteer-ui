<template>
  <b-list-group-item :to="`/users/${userData._id}`" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ userData.name }}</h5>:
      <h6>Roles:</h6>
      <p v-for="role in userData.roles" v-bind:key="role">{{ role }}</p>
      <p>{{ userData.email }}</p>
    </div>

    <small>Donec id elit non mi porta.</small>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    userData: Object
  },
  data: function() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss">
</style>