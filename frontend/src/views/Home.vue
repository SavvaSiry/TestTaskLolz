<template>
  <h1>Home Page</h1>
  <pagination-bar
    @changeSize="changeSize"
    @changePage="changePage"
    :page="page"
    :size="size"
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
      posts: [
        {id: 0, text: "123", title: "123", description: "desc"},
        {id: 2, text: "123", title: "123", description: "desc"},
        {id: 3, text: "123", title: "123", description: "desc"},
        {id: 4, text: "123", title: "123", description: "desc"},
        {id: 5, text: "123", title: "123", description: "desc"},
        {id: 7, text: "123", title: "123", description: "desc"},
        {id: 6, text: "123", title: "123", description: "desc"},
        {id: 8, text: "123", title: "123", description: "desc"},
        {id: 99, text: "123", title: "123", description: "desc"},
        {id: 11, text: "123", title: "123", description: "desc"},
        {id: 22, text: "123", title: "123", description: "desc"},
        {id: 33, text: "123", title: "123", description: "desc"},
      ],
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
      console.log(size)
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
