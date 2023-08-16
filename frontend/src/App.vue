<template>
  <router-view>

  </router-view>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-color: #fffefe;
  color: #1b1a1a;
}

a {
  color: #fffefe; /* Set your desired link color */
  text-decoration: none; /* Remove default underline */

  &:visited {
     color: #fffefe; /* Keep the color the same after visiting */
   }

  &:hover {
     text-decoration: underline; /* Add underline on hover */
   }
}
</style>
