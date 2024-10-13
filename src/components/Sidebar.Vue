<template>
  <div class="sidebar">
    <h2>Dashboard</h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/analytics">Analytics</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}
.sidebar h2 {
  margin-bottom: 20px;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar ul li {
  margin-bottom: 10px;
}
.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}
.sidebar ul li a:hover {
  text-decoration: underline;
}
</style>
