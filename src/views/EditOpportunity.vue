<template>
  <div id="edit-opportunity-view">
    <b-spinner v-if="!oppData" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    <template v-else>
      <b-button type="button" @click="handleCancel" variant="primary">Cancel</b-button>

      <OpportunityForm :editMode="true" :editFormData="oppData" />
    </template>
  </div>
</template>

<script>
import axios from "axios";
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
  mounted: function() {
    axios
      .get(
        `https://making-a-difference-foundation-volunteer-l6xs.onrender.com/opportunity/${this.$route.params.id}`
      )
      .then(response => {
        this.oppData = response.data; /// ?????
      });
  }
};
</script>

<style lang="scss">
</style>