<template>
  <div class="flex-row">
    <h1>Admin Page</h1>
    <button class="add-button" @click="createPost">Create new post</button>
  </div>

  <post-table
      :posts="posts"
      :edit-post="editPost"
      :edit-comments="editComments"
      :delete-post="deletePost"
  ></post-table>

  <post-form
    :mode="selectedMode"
    :post="selectedPost"
    v-if="showForm"
    @close="closeForm"
  />

</template>

<script>
import PostTable from "@/components/admin/PostTable";
import PostForm from "@/components/admin/PostForm";
import {store} from "@/store";

export default {
  name: "AdminPage",
  components: {PostForm, PostTable},
  data() {
    return {
      posts: [],
      selectedMode: "",
      selectedPost: "",
      showForm: false,
    };
  },
  async mounted() {
    await store.dispatch("getPosts", {page: 0, size: 10})
    this.posts = store.getters.getPosts
  },
  methods: {
    editPost(post) {
      this.selectedMode = "edit"
      this.selectedPost = post
      this.showForm = true
    },
    editComments(post) {
      // Logic to navigate to the edit comments page
      console.log(`Editing comments for post ${post.id}`);
    },
    createPost() {
      this.selectedMode = "add"
      this.showForm = true
    },
    closeForm() {
      this.selectedMode = ""
      this.selectedPost = ""
      this.showForm = false
    },
    deletePost(post) {
      store.dispatch('deletePostById', post)
      this.posts = this.posts.filter(post => post.id !== post.id);
    },
  },
}
</script>

<style scoped>
.add-button {
  padding: 5px 10px;
  background-color: #11ac19;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 5px;
}

.flex-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>