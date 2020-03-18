<template>
  <OpportunityFullView :oppData="oppData" />
</template>

<script>
import OpportunityFullView from "@/components/OpportunityFullView";
import opportunityList from "@/assets/opportunities.json";
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
  data: function() {
    console.log(this.$route);
    return {
      oppData: opportunityList[this.$route.params.name]
    };
  },
  components: {
    OpportunityFullView
  }
};
</script>

<style lang="scss" scoped>
</style>