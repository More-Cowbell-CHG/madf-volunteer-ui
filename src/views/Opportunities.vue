<template>
  <div class="opportunities">
    <h1>List of Opportunities</h1>
    <BContainer>
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
      opportunities: opportunityList.opportunities
    };
  },
  components: {
    OpportunityListItem
  }
};
</script>

<style lang="scss" scoped>
</style>