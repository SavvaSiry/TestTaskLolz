<template>
  <div class="post-page">
    <div class="post-details">
      <div class="post-id">{{ id }}</div>
      <h1 class="post-title">{{ post.title }}</h1>
      <p class="post-description">{{ post.description }}</p>
      <p class="post-text">{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  props: {
    id: Number
  },
  data() {
    return {
      post: {id: 0, title: "Title", text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text" +
            "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text", description: "Description"}
    }
  }
}
</script>

<style lang="scss" scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
}

.post-details {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

.post-id {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.post-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.post-description {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}

.post-text {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}
}
</style>