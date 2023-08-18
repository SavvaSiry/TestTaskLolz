<template>
  <div class="wrapper">
    <h2>Комментарии</h2>
    <div class="flex-column">
      <textarea v-model="comment"/>
      <button @click="addComment">Отправить</button>
    </div>

    <div class="comment-wrapper">
      <comment-item
          v-for="comment in comments"
          :key="comment.id"
          :id="comment.id"
          :text="comment.text"
      />
    </div>

  </div>
</template>

<script>
// import {store} from "@/store";

import CommentItem from "@/components/post/CommentItem";

export default {
  name: "PostComments",
  components: {CommentItem},
  props: {
    id: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      comment: "",
      comments: [
        {id: 123, postId: 123, text: "Грозный коммент"},
        {id: 23, postId: 123, text: "Грозный коммент"},
        {id: 223, postId: 123, text: "Грозный коммент"},
        {id: 333, postId: 123, text: "Грозный коммент"},
        {id: 1223, postId: 123, text: "Грозный коммент"},
      ]
    }
  },
  async mounted() {
    // await store.dispatch("getComments")
    // this.comments = store.getters.getComments
  },
  methods: {
    addComment() {
      this.comments.push(this.comment)
      this.comment = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-column {
  display: flex;
  flex-direction: column;
}

.comment-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
}

textarea {
  width: 100%;
  height: 100px; /* You can set the initial height as needed */
  resize: vertical; /* Allow vertical resizing only */
}

button {
  width: 20%;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  align-self: flex-end;
}
</style>
