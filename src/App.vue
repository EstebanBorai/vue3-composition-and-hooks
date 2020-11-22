<template>
  <div id="app">
    <Suspense>
      <template #default>
        <Users />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Users from './components/Users.vue';

export default defineComponent({
  components: {
    Users,
  },
});
</script>
