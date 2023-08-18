<template>
  <div class="posts-table">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.description }}</td>
        <td>
          <button @click="editPost(post)">Edit Post</button>
          <button @click="deletePost(post)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PostTable",
  props: {
    posts: Array,
    editPost: Function,
    editComments: Function,
    deletePost: Function,
  },
};
</script>

<style scoped lang="scss">
.posts-table {
  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
    }

    td {
      text-align: center;
    }

    button {
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      margin-right: 5px;
    }
  }
}
</style>