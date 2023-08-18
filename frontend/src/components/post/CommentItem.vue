<template>
  <div class="wrapper">
    <div class="id">Id: {{ id }}</div>
    <div class="text">{{ comment }}</div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    id: String,
    comment: String,
  }
}
</script>

<style scoped>
.wrapper {
  box-sizing: border-box;
  padding: 1vh 2vh;
  width: 100%;
  height: auto;

  border-radius: 2px;
  border: 1px solid #333131;

}

.id {
  font-size: 18px;
  font-weight: bold;
}
</style>
