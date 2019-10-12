<template>
  <form
    class="auth-form"
    @submit.prevent="onSubmit"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="12"
        >
          <h2 class="mb-6">Registration</h2>
          <v-text-field
            v-model="form.email"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            label="E-mail"
            outlined
            data-vv-name="email"
          />
          <v-text-field
            ref="confirm_pas"
            v-model="form.password"
            v-validate="'required|min:6'"
            :error-messages="errors.collect('password')"
            type="password"
            label="Password"
            outlined
            data-vv-name="password"
          />
          <v-text-field
            v-model="form.repeatPassword"
            v-validate="'confirmed:confirm_pas'"
            :error-messages="errors.collect('repeatPassword')"
            type="password"
            label="Repeat password"
            outlined
            data-vv-name="repeatPassword"
          />
          <v-btn
            class="mr-4"
            color="success"
            type="submit"
            v-text="'submit'"
          />
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Registration',
  components: {
  },
  data() {
    return {
      valid: false,
      form: {
        email: '',
        password: '',
        repeatPassword: '',
      },
      sending: false,
    };
  },
  methods: {
    ...mapActions('auth', [
      'userRegistration',
    ]),
    onSubmit() {
      if (this.$validator.validateAll()) {
        try {
          this.userRegistration({
            email: this.form.email,
            password: this.form.password,
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>
