<template>
  <div class="auth-page">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Auth',
};
</script>

<style lang="scss">
  .auth-form {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
