<template>
  <div class="opportunities">
    <h1>List of Opportunities</h1>
    <BContainer>
      <b-button
        v-if="isAdmin"
        v-on:click="toggleFilterByStatus"
        class="filterButton"
      >{{ filterByText }}</b-button>

      <b-form-group>
        <b-form-checkbox-group
          v-if="filterByStatus"
          id="checkbox-group-2"
          v-model="selectedStatuses"
          :options="statusOptions"
          name="statuses-1"
        ></b-form-checkbox-group>
        <b-form-checkbox-group
          v-else
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
      isAdmin: true,
      filterByStatus: false,
      selectedOffices: ["SLC", "FLD", "RNC", "MIC"], // Must be an array reference!
      options: [
        { text: "Salt Lake City", value: "SLC" },
        { text: "Ft. Lauderdale", value: "FLD" },
        { text: "Raleigh", value: "RNC" },
        { text: "Michigan", value: "MIC" }
      ],
      selectedStatuses: ["pending", "open", "closed", "archived"],
      statusOptions: [
        { text: "pending", value: "pending" },
        { text: "open", value: "open" },
        { text: "closed", value: "closed" },
        { text: "archived", value: "archived" }
      ]
    };
  },
  computed: {
    opportunities: function() {
      if (this.filterByStatus) {
        return opportunityList.opportunities.filter(opp => {
          for (let i = 0; i < this.selectedStatuses.length; i++) {
            if (opp.status === this.selectedStatuses[i]) {
              return true;
            }
          }
        });
      } else {
        return opportunityList.opportunities.filter(opp => {
          for (let i = 0; i < this.selectedOffices.length; i++) {
            if (opp.office === this.selectedOffices[i]) {
              return true;
            }
          }
        });
      }
    },
    filterByText: function() {
      return this.filterByStatus
        ? "Change to Filter By Office"
        : "Change to Filter By Status";
    }
  },
  components: {
    OpportunityListItem
  },
  methods: {
    toggleFilterByStatus() {
      this.filterByStatus = !this.filterByStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
.filterButton {
  margin: 3px;
}
</style>