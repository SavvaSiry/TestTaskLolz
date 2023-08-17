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
import {store} from "@/store";

export default {
  name: "HomePage",
  components: {PostCard},
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    await store.dispatch('getPosts', {page: 0, size: 10})
    this.posts = store.getters.getPosts
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