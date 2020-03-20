<template>
  <div class="full-opportunity-view">
    <b-spinner v-if="!computedOppData" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    <BJumbotron v-else :header="computedOppData.title" :lead="computedOppData.description">
      <div class="details">
        <h3>{{ computedOppData.office }}</h3>
        <h4>Date and Time: {{ computedOppData.slots[0].start }}</h4>
        <h4>Number of Slots Open: {{ computedOppData.slots[0].limit }}</h4>
        <h4>Status: {{ computedOppData.status }}</h4>
        <div class="address-link">
          <h4>Location:</h4>
          <b-link
            :href="`https://www.google.com/maps/search/?api=1&query=${computedOppData.address}`"
            target="_blank"
            class="inline-link"
          >{{ computedOppData.address }}</b-link>
        </div>
        <h6>Sign Up Deadline: {{ computedOppData.deadline }}</h6>
      </div>
      <template v-if="computedOppData.waiver">
        <h4>Waiver:</h4>
        <div class="waiver-text">{{ computedOppData.waiver }}</div>
        <b-form-checkbox
          id="checkbox-1"
          v-model="waiverStatus"
          name="checkbox-1"
        >I acknowledge I have read and understand the waiver</b-form-checkbox>
      </template>
      <b-button class="mx-1" v-if="computedOppData.status === 'Pending' && isAdmin" @click="handleApproval" variant="success">Approve</b-button>
      <b-button class="mx-1" @click="handleSignUp" variant="success" :disabled="!waiverStatus">Sign Up</b-button>
    </BJumbotron>
  </div>
</template>

<script>
import opportunityList from "@/assets/opportunities.json";
export default {
  props: {
    oppData: {
      type: Object,
      required: false
    }
  },
  data: function() {
    return {
      isAdmin: true
    };
  },
  computed: {
    computedOppData: function() {
      if (!this.oppData) {
        return opportunityList.find(x => x._id === this.$route.params.id);
      }
      console.log(this.oppData);
      return this.oppData;
    },
    waiverStatus: function() {
      if (!this.computedOppData.waiver) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function() {
    //   this.oppData = opportunityList.find(x => x._id === this.$route.params.id);
    // if (!this.computedOppData.waiver) {
    //   this.waiverStatus = true;
    // }
    // }
  },
  components: {},
  methods: {
    handleSignUp() {
      if (this.waiverStatus) {
        // need to add function to actually sign them up
        return true;
      }
    },
    handleApproval() {
      // ...
    }
  }
};
</script>

<style lang="scss">
.address-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.address-link h4 {
  margin: 0;
}

.inline-link {
  margin-left: 10px;
}

.waiver-text {
  display: block;
  overflow-y: scroll;
  max-width: 800px;
  margin: 10px auto;
  background-color: white;
  border-radius: 10px;
  max-height: 300px;
  padding: 5px 10px;
}
</style>