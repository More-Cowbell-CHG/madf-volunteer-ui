<template>
  <b-container id="user-form">
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="userForm.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="userForm.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Roles:" label-for="roles-edit">
        <b-form-checkbox-group
          id="roles-edit"
          v-if="isAdmin"
          v-model="userForm.roles"
          :options="roleOptions"
          name="roles-edit"
        ></b-form-checkbox-group>
        <b-list-group v-else>
          <b-list-group-item v-for="role in userData.roles" :key="role">{{role}}</b-list-group-item>
        </b-list-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </b-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      userForm: {
        name: this.userData.name,
        roles: this.userData.roles,
        email: this.userData.email
      },
      roleOptions: ["volunteer", "champion", "admin"]
    };
  },
  computed: {
    ...mapGetters(["isChampion", "isAdmin"])
  },
  methods: {
    handleSubmit() {
      axios
        .put(
          `https://making-a-difference-foundation-volunteer-l6xs.onrender.com/user/${this.$route.params.id}`,
          this.userForm
        )
        .then(response => {
          this.userData = response.data;
        });
    }
  }
};
</script>

<style lang="scss">
div#user-form form {
  text-align: left;
}

#user-form label {
  font-weight: bold;
}

div#roles-edit label {
  font-weight: 400;
}
</style>