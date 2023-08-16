<template>
  <post-card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :description="post.description"
      @click="routePost(post.id)"
  />
</template>

<script>
import PostCard from "@/components/home/PostCard";

export default {
  name: "HomePage",
  components: {PostCard},
  data() {
    return {
      posts: [
        {id: 0, description: "Эта статья о программировании", title: "О программировании"},
        {id: 1, description: "Эта статья о крипте", title: "О крипте"}
      ]
    }
  },
  methods: {
    routePost(id) {
      this.$router.push(`/posts/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>