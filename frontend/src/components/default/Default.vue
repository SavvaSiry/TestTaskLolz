<template>
  <div class="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/default/Header";

export default {
  name: "DefaultVue",
  components: {AppHeader}
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100%;
  overflow: hidden;

  /* Ensure at least viewport height */

  .container {
    box-sizing: border-box;
    display: block;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 1vh 2vh;
  }

}
</style>