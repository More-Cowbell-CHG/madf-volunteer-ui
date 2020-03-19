<template>
  <b-container class="slot-form-section">
    <b-form-group :id="`slot-date-input-group-${id}`" label-for="slot-date-input" label="Slot Date">
      <b-form-datepicker
        value-as-date
        :id="`slot-date-input-${id}`"
        v-model="slotData.date"
        class="mb-2"
      ></b-form-datepicker>
      <b-form-timepicker :id="`slot-time-input-${id}`" v-model="slotData.time" class="mb-2"></b-form-timepicker>
    </b-form-group>

    <b-form-group id="input-group-1" label="Volunteer Limit:" :label-for="`limit-input-${id}`">
      <b-form-input
        :id="`limit-input-${id}`"
        v-model="slotData.limit"
        type="number"
        required
        placeholder="Title"
      ></b-form-input>
    </b-form-group>
  </b-container>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    slotData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.slot-form-section {
  background-color: #c6e8e8;
  padding: 5px;
}
</style>