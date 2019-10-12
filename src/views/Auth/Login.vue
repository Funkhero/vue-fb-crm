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
          <h2 class="mb-6">Login</h2>
          <v-text-field
            v-model="form.email"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            label="E-mail"
            outlined
            data-vv-name="email"
          />
          <v-text-field
            v-model="form.password"
            v-validate="'required'"
            :error-messages="errors.collect('password')"
            type="password"
            label="Password"
            outlined
            data-vv-name="password"
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
  name: 'Login',
  data() {
    return {
      valid: false,
      form: {
        email: '',
        password: '',
      },
      sending: false,
    };
  },
  methods: {
    ...mapActions('auth', [
      'userLogin',
    ]),
    onSubmit() {
      if (this.$validator.validateAll()) {
        try {
          this.userLogin({
            ...this.form,
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>
