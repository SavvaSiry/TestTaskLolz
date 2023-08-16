<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script>
import AppHeader from "@/components/default/Header";
export default {
  name: "DefaultVue",
  components: {AppHeader}
}
</script>

<style scoped>

</style>