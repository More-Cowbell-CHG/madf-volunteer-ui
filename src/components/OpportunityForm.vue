<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
      <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-4">
      <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
        <b-form-checkbox value="me">Check me out</b-form-checkbox>
        <b-form-checkbox value="that">Check that out</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
import opportunityList from "@/assets/opportunities.json";
export default {
  data: function() {
    return {
      oppData: undefined,
      waiverStatus: false
    };
  },
  computed: {},
  mounted: function() {
    this.oppData = opportunityList.find(x => x._id === this.$route.params.id);
    if (!this.oppData.waiver) {
      this.waiverStatus = true;
    }
  },
  components: {},
  methods: {
    handleSignUp() {
      if (this.waiverStatus) {
        // need to add function to actually sign them up
        return true;
      }
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