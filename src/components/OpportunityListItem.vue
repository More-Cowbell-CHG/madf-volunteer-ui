<template>
  <b-list-group-item :to="`/opportunity/${linkKey}`" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ oppData.title }}</h5>:
      <h6>{{ oppData.status }}</h6>
      <p>{{ oppData.office }}</p>
      <!-- <small class="deadline">{{ oppData.deadline }}</small> -->
    </div>

    <p class="mb-1">{{ oppData.description }}</p>

    <small>Donec id elit non mi porta.</small>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    oppData: Object
  },
  data: function() {
    return {};
  },
  computed: {
    linkKey: function() {
      return this.oppData._id;
    }
  }
};
</script>

<style lang="scss">
</style>