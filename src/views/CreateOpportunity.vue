<template>
  <OpportunityForm :oppData="oppData" v-if="editMode" />
  <OpportunityFullView :oppData="oppData" v-else />
</template>

<script>
import opportunityList from "@/assets/opportunities.json";

import OpportunityFullView from "@/components/OpportunityFullView";
import OpportunityForm from "@/components/OpportunityForm";
export default {
  data: function() {
    return {
      editMode: true,
      oppData: opportunityList.find(x => x._id === this.$route.params.id)
    };
  },
  components: {
    OpportunityFullView,
    OpportunityForm
  }
};
</script>

<style lang="scss">
</style>