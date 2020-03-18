<template>
  <BJumbotron :header="oppData.name" :lead="oppData.desc">
    <div class="details">
      <h3>{{ oppData.office }}</h3>
      <h4>Date and Time: {{ oppData.slot.date }}</h4>
      <h4>Number of Slots Open: {{ oppData.slot.numberOfVolunteers }}</h4>
      <h4>Status: {{ oppData.status }}</h4>
      <div class="address-link">
        <h4>Location:</h4>
        <b-link
          :href="`https://www.google.com/maps/search/?api=1&query=${oppData.address}`"
          target="_blank"
          class="inline-link"
        >{{ oppData.address }}</b-link>
      </div>
      <h6>Sign Up Deadline: {{ oppData.deadline }}</h6>
    </div>
    <b-button variant="primary" :href="oppData.waiver">Sign the Waiver</b-button>
    <b-button variant="success" :href="oppData.waiver">Sign Up</b-button>
  </BJumbotron>
</template>

<script>
import opportunityList from "@/assets/opportunities.json";
export default {
  data: function() {
    return {
      oppData: opportunityList[this.$route.params.name]
    };
  },
  components: {}
};
</script>

<style lang="scss">
.address-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.address-link h4 {
  margin: 0;
}

.inline-link {
  margin-left: 10px;
}
</style>