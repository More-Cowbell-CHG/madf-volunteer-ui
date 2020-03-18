<template>
  <div class="opportunities">
    <h1>List of Opportunities</h1>
    <BContainer>
      <BListGroup>
        <OpportunityListItem
          v-for="(opp, linkKey) in opportunities"
          :key="opp.name"
          :linkKey="linkKey"
          v-bind:oppData="opp"
        />
      </BListGroup>
    </BContainer>
  </div>
</template>

<script>
import OpportunityListItem from "@/components/OpportunityListItem.vue";
import opportunityList from "@/assets/opportunities.json";
console.log("OPP LIST", opportunityList);
export default {
  data: function() {
    return {
      opportunities: opportunityList
    };
  },
  components: {
    OpportunityListItem
  }
};
</script>

<style lang="scss" scoped>
</style>