<template>
  <div class="table">
    <filter-group @filterChanged="getDataByFilters"></filter-group>
    <main-table
      :rows="rows"
      :sorting="sorting"
      @changeSorting="changeSorting"
      @newRow="newRow"
    ></main-table>
    <table-pagination
      ref="tablePagination"
      @pageChange="changePage"
      :pages="pages"
    ></table-pagination>
  </div>
</template>

<script>
import getData from '../api/getData';
import getCount from '../api/getCount';
import filterData from '../api/filterData';
import addNewRow from '../api/addNewRow';
import FilterGroup from './FilterGroup.vue';
import MainTable from './MainTable.vue';
import TablePagination from './TablePagination.vue';

export default {
  name: 'DataTable',
  data() {
    return {
      rows: [],
      pages: 0,
      filters: null,
      sorting: {
        orderBy: 'id',
        direction: 'asc',
      },
    };
  },
  components: { TablePagination, MainTable, FilterGroup },
  methods: {
    changePage(page) {
      this.getRows(page);
    },
    setPage(page) {
      this.$refs.tablePagination.setPage(page);
    },
    getDataByFilters(filters) {
      if (!filters.value) {
        this.filters = null;
        this.getRows(1);
      } else {
        this.filters = filters;
        this.getRowsWithFilters();
      }
    },
    getRows(page) {
      const offset = page ? page * 10 : this.page * 10;
      getData(offset, this.sorting).then((data) => {
        this.rows = data;
      });
    },
    getRowsWithFilters() {
      const filters = { ...this.filters, page: this.page };
      filterData(filters).then((data) => {
        this.pages = Math.ceil(data.count / 10);
        this.rows = data.rows;
      });
    },
    changeSorting(event) {
      this.sorting = event;
      this.getRows();
    },
    newRow(event) {
      addNewRow(event).then((response) => {
        if (response) this.getRows();
      });
    },
  },
  computed: {
    page() {
      return this.$refs.tablePagination.currentPage;
    },
  },
  mounted() {
    this.getRows(1);
    getCount().then((count) => {
      this.pages = Math.ceil(count / 10);
    });
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 720px;
  margin: 0 auto;
}
</style>
