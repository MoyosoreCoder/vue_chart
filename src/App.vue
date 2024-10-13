<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
}
</style>
