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
          :comment="comment.comment"
      />
    </div>

  </div>
</template>

<script>
import CommentItem from "@/components/post/CommentItem";
import {store} from "@/store";

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
      comments: []
    }
  },
  async mounted() {
    await store.dispatch("getComments", this.id)
    this.comments = store.getters.getComments
  },
  methods: {
    async addComment() {
      await store.dispatch("createComment", {
        comment: this.comment,
        postId: this.id
      })
      this.comment = ""
      this.comments = store.getters.getComments
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
