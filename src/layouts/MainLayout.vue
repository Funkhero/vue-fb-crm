<template>
  <div class="main-layout">
    <header></header>
    <div class="md-layout">
      <slot/>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>
