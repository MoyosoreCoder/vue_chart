<template>
  <aside class="app-sidebar">
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/settings">Settings</router-link></li>
      <li><router-link to="/reports">Reports</router-link></li>
    </ul>
  </aside>
</template>

<style scoped>
.app-sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 1rem;
}
</style>
