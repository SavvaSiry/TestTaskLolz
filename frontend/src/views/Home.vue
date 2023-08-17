<template>
  <pagination-bar
    @changeAmount="changeSize"
    @changePage="changePage"
    :current-page="page"
    :amount="size"
  />
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
import PaginationBar from "@/components/home/PaginationBar";

export default {
  name: "HomePage",
  components: {PaginationBar, PostCard},
  data() {
    return {
      posts: [],
      page: 0,
      size: 5
    }
  },
  watch: {
    page: 'updatePosts',
    size: 'updatePosts'
  },
  async mounted() {
    await this.updatePosts();
  },
  methods: {
    routePost(id) {
      this.$router.push(`/posts/${id}`)
    },
    changeSize(size) {
      this.size = size
    },
    changePage(page) {
      console.log(page)
      this.page = page
    },
    async updatePosts() {
      await store.dispatch('getPosts', {page: this.page, size: this.size})
      this.posts = store.getters.getPosts
    }
  }
}
</script>

<style lang="scss" scoped>

</style>