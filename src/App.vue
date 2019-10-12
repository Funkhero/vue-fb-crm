<template>
  <v-app>
    <v-content>
      <component :is="layout">
        <router-view/>
      </component>
    </v-content>
  </v-app>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

export default {
  name: 'App',
  components: {
    mainLayout: MainLayout,
    emptyLayout: EmptyLayout,
  },
  computed: {
    layout() {
      const routeWithLayout = this.$route.matched.find(route => !!route.meta.layout);

      return routeWithLayout ? `${routeWithLayout.meta.layout}Layout` : 'mainLayout';
    },
  },
};
</script>
