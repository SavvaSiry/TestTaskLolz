<template>
  <h1>Post Page</h1>
  <div class="post-page">
    <div class="post-details">
      <h1 class="post-title">{{ post.title }}</h1>
      <p class="post-description">{{ post.description }}</p>
      <p class="post-text">{{ post.text }}</p>
    </div>
  </div>

  <post-comments
      :id="this.id"
  />

</template>

<script>
import {store} from "@/store";
import PostComments from "@/components/post/PostComments";

export default {
  name: "PostPage",
  components: {PostComments},
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      post: {id: 0, title: "No post", text: "no", description: "no"}
    }
  },
  async mounted() {
    await store.dispatch("getPostById", this.id);
    this.post = store.getters.getPost;
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
  width: 100%;

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
