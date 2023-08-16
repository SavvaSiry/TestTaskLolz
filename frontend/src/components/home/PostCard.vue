<template>
  <div class="post">
    <h2 class="post-title">{{ title }}</h2>
    <p class="post-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;

  .post-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .post-description {
    font-size: 16px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
}
</style>