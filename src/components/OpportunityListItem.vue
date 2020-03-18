<template>
  <b-list-group-item :to="`/opportunity/${linkKey}`" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ oppData.name }}</h5>:
      <h6>{{ oppData.status }}</h6>
      <p>{{ oppData.office }}</p>
      <small class="deadline">{{ oppData.deadline }}</small>
    </div>

    <p class="mb-1">{{ oppData.desc }}</p>

    <small>Donec id elit non mi porta.</small>
  </b-list-group-item>
</template>

<script>
// Office
// Name
// Desc
// Slot
// Date/Time
// Number of volunteers
// Status
// Pending
// Active
// Full
// Deadline
// Address
// Waiver
export default {
  props: {
    oppData: Object,
    linkKey: String
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
</style>