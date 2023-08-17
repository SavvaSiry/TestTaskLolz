<template>
  <div class="overflow">
    <div class="post-form">

      <form @submit.prevent="submitForm">
        <div class="flex-row">
          <h2>{{ mode === 'add' ? 'Add Post' : 'Update Post' }}</h2>
          <button @click="this.$emit('close')">Back</button>
        </div>

        <label for="title">Title:</label>
        <input v-model="editPost.title" type="text" id="title" required>

        <label for="description">Description:</label>
        <textarea v-model="editPost.description" id="description" required></textarea>

        <label for="text">Text:</label>
        <textarea v-model="editPost.text" id="text" required></textarea>

        <button type="submit">{{ mode === 'add' ? 'Add Post' : 'Update Post' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import {store} from "@/store";

export default {
  name: "PostForm",
  props: {
    mode: String, // 'add' or 'edit'
    post: Object, // The post being edited (if in edit mode)
  },
  data() {
    return {
      // Clone the post object to avoid mutating the original
      editPost: {...this.post},
    };
  },
  methods: {
    submitForm() {
      if (this.mode === 'add') {
        store.dispatch("createPost", this.editPost)
        this.$emit('close')
      }
      else {
        store.dispatch("updatePostById", this.editPost)
        this.$emit('close')
      }
    },
  },
};
</script>

<style scoped lang="scss">
.post-form {
  box-sizing: border-box;
  padding: 3vh 5vh;
  background: white;
  min-width: 60%;
  max-height: 80vh;
  overflow: auto;

  form {
    display: grid;
    gap: 10px;
    margin: 0 auto;

    label {
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 5px;
      border: 1px solid #ccc;
    }

    button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
}

textarea {
  width: 100%;
  height: 100px; /* You can set the initial height as needed */
  resize: vertical; /* Allow vertical resizing only */
}

.flex-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.overflow {
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  left: 0;
  top: 45px;
  height: 100%;
}
</style>