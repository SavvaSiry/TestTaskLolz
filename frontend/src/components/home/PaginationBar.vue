<template>
  <div class="pagination-bar">
    <div class="pagination-controls">
      <button @click="goToPage(page - 1)" :disabled="page === 1">Previous</button>
      <span>{{ this.page }} / {{ totalPages }}</span>
      <button @click="goToPage(page + 1)" :disabled="page === totalPages">Next</button>
    </div>
    <div class="pagination-options">
      <label for="perPage">Posts per page:</label>
      <select v-model="selectedSize" @change="updateSize">
        <option v-for="option in perPageOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<script>
// import {store} from "@/store";

export default {
  name: "PaginationBar",
  props: {
    size: Number,
    page: Number,
  },
  data() {
    return {
      perPageOptions: [5, 10, 15],
      totalItems: 10,
      selectedSize: Number
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.size);
    },
  },
  async mounted() {
    this.selectedSize = this.size
    // await store.dispatch('getPostsCount')
    // this.totalItems = store.getters.getPostsCount
  },
  methods: {
    goToPage(newPage) {
      // 0 -> NO - NO invalid
      // 1 -> NO - YES
      // 2 -> YES - YES
      // 3 -> YES  - NO
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.$emit('changePage', newPage);
      }
    },
    updateSize() {
      this.$emit('changeSize', this.selectedSize);
      this.$emit('changePage', 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 15px;
  }

  .pagination-controls {
    display: flex;
    align-items: center;

    button {
      padding: 5px 10px;
      margin: 0 5px;
      border: 1px solid #ccc;
      background-color: #fff;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .pagination-options {
    label {
      margin-right: 5px;
    }

    select {
      padding: 5px;
    }
  }
}
</style>
