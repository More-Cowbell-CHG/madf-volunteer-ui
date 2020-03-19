<template>
  <div class="opportunities">
    <h1>List of Opportunities</h1>
    <BContainer>
      <b-form-group label="Using options array:">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selectedOffices"
          :options="options"
          name="offices-1"
        ></b-form-checkbox-group>
      </b-form-group>
      <BListGroup>
        <OpportunityListItem v-for="(opp) in opportunities" :key="opp._id" v-bind:oppData="opp" />
      </BListGroup>
    </BContainer>
  </div>
</template>

<script>
import OpportunityListItem from "@/components/OpportunityListItem.vue";
import opportunityList from "@/assets/opportunitiesGet.json";
export default {
  data: function() {
    return {
      selectedOffices: ["SLC", "FLD", "RNC", "MIC"], // Must be an array reference!
      options: [
        { text: "Salt Lake City", value: "SLC" },
        { text: "Ft. Lauderdale", value: "FLD" },
        { text: "Raleigh", value: "RNC" },
        { text: "Michigan", value: "MIC" }
      ]
    };
  },
  computed: {
    opportunities: function() {
      return opportunityList.filter(opp => {
        for (let i = 0; i < this.selectedOffices.length; i++) {
          if (opp.office === this.selectedOffices[i]) {
            return true;
          }
        }
      });
    }
  },
  components: {
    OpportunityListItem
  },
  methods: {
    officeFilter: function() {}
  }
};
</script>

<style lang="scss" scoped>
</style>