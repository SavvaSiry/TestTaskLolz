<template>
  <div>
    Home page
  </div>
  <div>
    <post-card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :description="post.description"
    >
    </post-card>
  </div>
</template>

<script>
import PostCard from "@/components/home/PostCard";
export default {
  name: "HomePage",
  components: {PostCard},
  data() {
    return {
      posts: [
        {id: 0, description: "Эта статья о программировании", title: "О программировании", text: "text text text text text"},
        {id: 1, description: "Эта статья о крипте", title: "О крипте", text: "text text text text text"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>