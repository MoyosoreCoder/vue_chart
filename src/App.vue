<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <AppSidebar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import AppSidebar from "./components/AppSidebar.vue";

export default defineComponent({
  components: {
    Header,
    AppSidebar,
  },
});
</script>

<style scoped>
.main-container {
  display: flex;
}
</style>
