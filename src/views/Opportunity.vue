<template>
  <div id="opportunity-view">
    <b-spinner v-if="!oppData" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    <template v-else>
      <b-button v-if="isChampion" type="button" @click="handleEditMode" variant="primary">Edit</b-button>
      <b-button v-if="isAdmin" type="button" @click="handleDelete" variant="danger">Delete</b-button>

      <OpportunityFullView v-on:signup="handleSignup" :oppData="oppData" />

      <b-modal id="modal-1" title="Success!">
        <p class="my-4">Signup Successfull.</p>
        <p class="my-4">Please make sure you arrive on time.</p>
        <b-button class="mt-3" block @click="$bvModal.hide('modal-1')">Close</b-button>
      </b-modal>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
// import opportunityList from "@/assets/opportunities.json";
import OpportunityFullView from "@/components/OpportunityFullView";

export default {
  components: {
    OpportunityFullView
  },
  data: function() {
    return {
      oppData: null
    };
  },
  computed: {
    ...mapGetters(["authHeader", "isAdmin", "isChampion"])
  },
  methods: {
    handleEditMode() {
      this.$router.push(`/edit/opportunity/${this.oppData._id}`);
    },
    handleDelete() {
      // Delete call to db via axios
    },
    handleSignup(start) {
      axios
        .post(
          `https://making-a-difference-foundation-volunteer-l6xs.onrender.com/opportunity/${this.oppData._id}/signup`,
          {
            start: start
          }
        )
        .then(() => {
          this.$bvModal.show("modal-1");
        });
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

