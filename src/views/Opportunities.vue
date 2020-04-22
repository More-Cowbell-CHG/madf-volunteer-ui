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
      <BListGroup v-if="this.opportunities">
        <OpportunityListItem v-for="(opp) in opportunities" :key="opp._id" v-bind:oppData="opp" />
      </BListGroup>
      <h4 v-else>No Opportunities Available</h4>
    </BContainer>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import OpportunityListItem from "@/components/OpportunityListItem.vue";
// import opportunityList from "@/assets/opportunitiesGet.json";
export default {
  data: function() {
    return {
      opportunityList: undefined,
      filteredOpps: undefined,
      filterByStatus: false,
      selectedOffices: ["MIDV", "FTLA", "DURH", "GRAP"], // Must be an array reference!
      options: [
        { text: "Midvale", value: "MIDV" },
        { text: "Ft. Lauderdale", value: "FTLA" },
        { text: "Raleigh", value: "DURH" },
        { text: "Michigan", value: "GRAP" }
      ],
      selectedStatuses: ["pending", "open", "closed", "archived"]
    };
  },
  computed: {
    ...mapGetters(["authHeader", "isChampion", "isAdmin"]),
    statusOptions: function() {
      if (this.isAdmin || this.isChampion) {
        return [
          { text: "pending", value: "pending" },
          { text: "open", value: "open" },
          { text: "closed", value: "closed" },
          { text: "archived", value: "archived" }
        ];
      } else {
        return [
          { text: "pending", value: "pending" },
          { text: "open", value: "open" },
          { text: "closed", value: "closed" },
          { text: "archived", value: "archived" }
        ];
      }
    },

    opportunities: function() {
      let adminChampArray;
      if (this.opportunityList) {
        if (!this.isAdmin && !this.isChampion) {
          adminChampArray = this.opportunityList.filter(opp => {
            return opp.status === "open";
          });
        } else {
          adminChampArray = this.opportunityList;
        }
        if (this.filterByStatus) {
          return adminChampArray.filter(opp => {
            for (let i = 0; i < this.selectedStatuses.length; i++) {
              if (opp.status === this.selectedStatuses[i]) {
                return true;
              }
            }
          });
        } else {
          return adminChampArray.filter(opp => {
            for (let i = 0; i < this.selectedOffices.length; i++) {
              if (opp.office === this.selectedOffices[i]) {
                return true;
              }
            }
          });
        }
      } else {
        return null;
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
  },
  beforeMount: function() {
    axios
      .get(
        "https://making-a-difference-foundation-volunteer-l6xs.onrender.com/opportunity"
      )
      .then(response => {
        this.opportunityList = response.data.opportunities; /// ?????
      });
  }
};
</script>

<style lang="scss" scoped>
.filterButton {
  margin: 3px;
}
</style>