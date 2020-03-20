<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="offset-lg-3 mt-5" lg="6">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-1" class="text-left" label="Your Name:" label-for="input-1">
              <b-form-input id="input-1" v-model="$v.form.name.$model" required placeholder="Enter name"></b-form-input>
              <b-form-invalid-feedback force-show v-if="!$v.form.name.alpha">Name must be charachters.</b-form-invalid-feedback>
              <b-form-invalid-feedback force-show v-if="!$v.form.name.minLength && $v.form.name.alpha">Name must be have at least 3 letters.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-2" class="text-left" label="Email address:" label-for="input-2">
              <b-form-input id="input-2" v-model="$v.form.email.$model" type="email" required placeholder="Enter email"></b-form-input>
              <b-form-invalid-feedback force-show v-if="!$v.form.email.email">Please enter a valid email.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-3" class="text-left" label="Password:" label-for="input-3">
              <b-form-text id="password-help-block">
                Your password must be at least 5 characters long, contain letters and numbers. No spaces, special characters, or emoji.
              </b-form-text>
              <b-form-input id="input-3" v-model="$v.form.password.$model" type="password" required placeholder="Password"></b-form-input>
              <b-form-invalid-feedback force-show v-if="!$v.form.password.minLength">Password must be at least 5 characters long.</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-3" class="text-left" label="Password:" label-for="input-3">
              <b-form-text id="password-help-block">
                Repeat Password.
              </b-form-text>
              <b-form-input id="input-3" v-model="$v.form.repeatPassword.$model" type="password" required placeholder="Password"></b-form-input>
              <b-form-invalid-feedback force-show v-if="!$v.form.repeatPassword.sameAsPassword && $v.form.repeatPassword.$model != ''">Passwords Do not match.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-4">
               <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                 <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-button class="my-2 mx-1 w-50" type="submit" variant="primary">Submit</b-button>
            <b-button class="my-2 mx-1 w-50" type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { required, sameAs, minLength, email, helpers } from 'vuelidate/lib/validators';
const alpha = helpers.regex('alpha', /^[A-Za-z\s]{1,}[.-]{0,1}[A-Za-z\s]{0,}$/);

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        checked: []
      },
      show: true
    }
  },
  validations: {
    form: {
      name: {
        required,
        alpha,
        minLength: minLength(3)
      },
      email: {
        required,
        email,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(5)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
	},
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset form values
      this.form.name = "";
      this.form.email = "";
      this.form.password = null;
      this.form.repeatPassword = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>