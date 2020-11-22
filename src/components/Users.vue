<template>
  <table class="ui celled table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
    </thead>
    <tr v-for="user in users" :key="user.id">
      <td data-label="ID">{{user.id}}</td>
      <td data-label="Name">{{user.name}}</td>
      <td data-label="Username">{{user.username}}</td>
      <td data-label="Email">{{user.email}}</td>
      <td data-label="Address">{{user.address.street}}</td>
      <td data-label="Phone">{{user.phone}}</td>
      <td data-label="Website">{{user.website}}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUsers from '@/hooks/users';

export default defineComponent({
  name: 'Users',
  async setup() {
    const { users } = await useUsers();
    return { users };
  },
});
</script>
