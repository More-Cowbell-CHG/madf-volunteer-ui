<template>
  <div id="edit-opportunity-view">
    <b-spinner v-if="!oppData" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>

    <b-button type="button" @click="handleCancel" variant="primary">Cancel</b-button>

    <OpportunityForm :editMode="true" :editFormData="oppData" />
  </div>
</template>

<script>
import opportunityList from "@/assets/opportunities.json";
import OpportunityForm from "@/components/OpportunityForm";

export default {
  components: {
    OpportunityForm
  },
  data: function() {
    return {
      oppData: opportunityList.find(x => x._id === this.$route.params.id)
    };
  },
  computed: {},
  methods: {
    handleCancel() {
      this.$router.go(-1);
    }
  },
  mounted: function() {}
};
</script>

<style lang="scss">
</style>