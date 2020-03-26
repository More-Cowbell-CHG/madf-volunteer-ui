<template>
  <div id="opportunity-view">
    <b-spinner v-if="!oppData" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    <template v-else>
      <b-button v-if="isChampion" type="button" @click="handleEditMode" variant="primary">Edit</b-button>
      <b-button v-if="isAdmin" type="button" @click="handleDelete" variant="danger">Delete</b-button>

      <OpportunityFullView :oppData="oppData" />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import opportunityList from "@/assets/opportunities.json";
import OpportunityFullView from "@/components/OpportunityFullView";

export default {
  components: {
    OpportunityFullView
  },
  data: function() {
    return {
      oppData: opportunityList.find(x => x._id === this.$route.params.id)
    };
  },
  computed: {
    ...mapGetters(["authHeader"]),
    isChampion: function() {
      // This will have logic checking the user info that comes back from DB
      return true;
    },
    isAdmin: function() {
      // This will have logic checking the user info that comes back from DB
      return true;
    }
  },
  methods: {
    handleEditMode() {
      this.$router.push(`/edit/opportunity/${this.oppData._id}`);
    },
    handleDelete() {
      // Delete call to db via axios
    }
  },
  mounted: function() {
    axios
      .get(
        `https://making-a-difference-foundation-volunteer-l6xs.onrender.com/opportunity/${this.$route.params.id}`
      )
      .then(response => {
        this.oppData = response; /// ?????
      });
  }
};
</script>

<style lang="scss">
</style>