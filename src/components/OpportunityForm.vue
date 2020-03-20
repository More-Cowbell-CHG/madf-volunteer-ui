<template>
  <b-container>
    <b-form @submit.prevent="handleFormSubmit">
      <b-form-group id="input-group-1" label="Title:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.title" type="text" required placeholder="Title"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          required
          placeholder="Enter description"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="location-name-input" label="Location Name:" label-for="location-name">
        <b-form-input type="text" id="location-name" v-model="form.location.name" required></b-form-input>
      </b-form-group>

      <b-form-group
        id="location-address-input"
        label="Location Address:"
        label-for="location-address"
      >
        <b-form-input
          type="text"
          id="location-address"
          v-model="form.location.address"
          placeholder="Street, City, State, Zipcode"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Office:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.office" :options="officeLocations" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label-for="deadline-input" label="Signup Deadline">
        <b-form-datepicker
          value-as-date
          id="deadline-input"
          v-model="form.deadline.date"
          class="mb-2"
        ></b-form-datepicker>
        <b-form-timepicker id="deadline-time-input" v-model="form.deadline.time" class="mb-2"></b-form-timepicker>
      </b-form-group>

      <b-form-group id="input-group-3" label="Waiver Text:" label-for="input-3">
        <b-form-textarea
          id="waiver-text"
          placeholder="Waiver Info..."
          rows="3"
          max-rows="6"
          v-model="form.waiver"
        ></b-form-textarea>
      </b-form-group>

      <SlotFormSection
        v-for="(slot, index) in form.slots"
        :key="index"
        :id="index"
        :slotData.sync="slot"
      />
      <b-button-group>
        <b-button @click="handleAddSlot" type="button" variant="success">Add Slot</b-button>
        <b-button @click="handleRemoveSlot" type="button" variant="danger">Remove Slot</b-button>
      </b-button-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
import axios from "axios";
import SlotFormSection from "@/components/SlotFormSection.vue";

export default {
  props: {
    editMode: {
      type: Boolean,
      required: false
    },
    editFormData: {
      type: Object,
      required: false
    }
  },
  data: function() {
    return {
      form: {
        title: "",
        description: "",
        office: "",
        location: {
          name: "",
          address: ""
        },
        status: "pending",
        deadline: {
          date: new Date(),
          time: ""
        },
        waiver: null,
        slots: [
          {
            date: "",
            time: "",
            limit: 5,
            volunteers: []
          }
        ]
      },
      officeLocations: [
        { value: null, text: "Please select a location" },
        { text: "Salt Lake City", value: "SLC", tz: "-7" },
        { text: "Ft. Lauderdale", value: "FLD", tz: "-5" },
        { text: "Raleigh", value: "RNC", tz: "-5" },
        { text: "Michigan", value: "MIC", tz: "-5" }
      ]
    };
  },
  computed: {},
  mounted: function() {
    if (this.editMode && this.editFormData) {
      this.form = this.editFormData;
      const editDeadline = new Date(this.editFormData.deadline);
      const editModeSlots = this.editFormData.slots.map(slot => {
        const slotDate = new Date(slot.start);
        return {
          date: slotDate,
          time: `${slotDate.getHours()}:${slotDate.getMinutes()}:00`,
          limit: slot.limit,
          volunteers: slot.volunteers
        };
      });
      this.form.slots = editModeSlots;
      this.form.deadline = {
        date: editDeadline,
        time: `${editDeadline.getHours()}:${editDeadline.getMinutes()}:00`
      };
    }
  },
  components: {
    SlotFormSection
  },
  methods: {
    handleAddSlot() {
      this.form.slots.push({
        date: new Date(),
        time: "",
        limit: 5,
        volunteers: []
      });
    },
    handleRemoveSlot() {
      this.form.slots.pop();
    },
    handleFormSubmit() {
      const deadlineLong = this.buildDate(
        this.form.deadline.date,
        this.form.deadline.time
      );
      const newSlots = this.form.slots.map(slot => {
        return {
          start: this.buildDate(slot.date, slot.time),
          limit: slot.limit,
          volunteers: slot.volunteers
        };
      });

      const submitData = this.form;

      submitData.deadline = deadlineLong;
      submitData.slots = newSlots;

      // ****** TO DO: Need to hook up actual submission to DB using axios
      // **** Below is a generic axios call, change method, url, and data sent
      // ** MAKE SURE TO ADD conditional if it is a put vs a post

      if (this.editMode) {
        axios
          .pu(
            "https://making-a-difference-foundation-volunteer-l6xs.onrender.com/opportunity",
            this.authHeader,
            submitData
          )
          .then(response => {
            this.$router.push(`/opportunity/${response.data._id}`);
          });
      } else {
        axios
          .post(
            "https://making-a-difference-foundation-volunteer-l6xs.onrender.com/opportunity",
            this.authHeader,
            submitData
          )
          .then(response => {
            this.$router.push(`/opportunity/${response.data._id}`);
          });
      }
    },
    buildDate(dateObj, time) {
      const timeSplit = time.split(":");
      const year = dateObj.getUTCFullYear();
      const month = dateObj.getUTCMonth();
      const day = dateObj.getUTCDate();
      const newDate = new Date();

      newDate.setFullYear(year);
      newDate.setMonth(month);
      newDate.setDate(day);
      newDate.setHours(timeSplit[0], timeSplit[1], 0, 0);
      return newDate.getTime();
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