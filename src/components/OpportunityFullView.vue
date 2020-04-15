<template>
  <BJumbotron :header="oppData.title" :lead="oppData.description">
    <div class="details">
      <h3>{{ oppData.office }}</h3>
      <template v-if="oppData.waiver">
        <h4>Waiver:</h4>
        <div class="waiver-text">{{ oppData.waiver }}</div>
        <b-form-checkbox
          id="checkbox-1"
          v-model="waiverStatus"
          name="checkbox-1"
        >I acknowledge I have read and understand the waiver</b-form-checkbox>
      </template>
      <b-card-group deck class="slots">
        <b-card
          v-for="slot in slotsToShow"
          :key="slot.start"
          :title="new Date(slot.start).toDateString()"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Number of spots open: {{ slot.limit }}</b-card-text>

          <b-button
            @click="handleSlotSignup(slot.start)"
            type="button"
            :disabled="!waiverStatus"
            variant="primary"
          >Sign up for Slot</b-button>
        </b-card>
      </b-card-group>
      <h4>Status: {{ oppData.status }}</h4>
      <div class="address-link">
        <h4>Location:</h4>
        <b-link
          :href="`https://www.google.com/maps/search/?api=1&query=${oppData.address}`"
          target="_blank"
          class="inline-link"
        >{{ oppData.address }}</b-link>
      </div>
      <h6>Sign Up Deadline: {{ new Date(oppData.deadline).toDateString() }}</h6>
    </div>
    <b-button
      class="mx-1"
      v-if="oppData.status === 'Pending' && isAdmin"
      @click="handleApproval"
      variant="success"
    >Approve</b-button>
  </BJumbotron>
</template>

<script>
// import OpportunityForm from "@/components/OpportunityForm.vue";
import { mapGetters } from "vuex";
export default {
  props: {
    oppData: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      waiverStatus: false
    };
  },
  computed: {
    ...mapGetters(["isAdmin"]),
    slotsToShow: function() {
      return this.oppData.slots.filter(slot => slot.limit > 0);
    }
  },
  mounted: function() {
    if (!this.oppData.waiver) {
      this.waiverStatus = true;
    } else {
      this.waiverStatus = false;
    }
  },
  components: {
    // OpportunityForm
  },
  methods: {
    handleSlotSignup(start) {
      if (this.waiverStatus) {
        this.$emit("signup", start);
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
.slots.card-deck {
  justify-content: center;
}
</style>