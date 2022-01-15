<template>
  <div class="page">
    Page: {{currentPage}}
  </div>
 <div class="pagination">
   <div
     class="pagination-link"
     @click="currentPage = currentPage - 1"
     v-if="currentPage - 1 !== 0"
   >{{currentPage - 1 }}</div>
   <div class="pagination-link">{{currentPage}}</div>
   <div
     class="pagination-link"
     @click="currentPage = currentPage + 1"
     v-if="currentPage + 1 < pages"
   >{{currentPage + 1}}</div>
   <div
     class="pagination-link"
     v-if="currentPage + 2 < pages"
   >...</div>
   <div
     class="pagination-link"
     @click="currentPage = pages"
     v-if="currentPage !== pages && pages > 1"
   >{{pages}}</div>
 </div>
</template>

<script>
export default {
  name: 'TablePagination',
  data() {
    return {
      currentPage: 1,
    };
  },
  emits: {
    pageChange: {
      type: Number,
    },
  },
  props: {
    pages: {
      type: Number,
      required: true,
    },
  },
  watch: {
    currentPage() {
      this.pageChange();
    },
  },
  methods: {
    pageChange() {
      this.$emit('pageChange', this.currentPage);
    },
    setPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  &-link {
    font-size: 20px;
    margin: 10px;
    color: blue;
    cursor: pointer;
  }
}
</style>
