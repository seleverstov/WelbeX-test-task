<template>
 <table>
   <tr class="table-names-row">
     <td @click="changeSorting('id')" class="table-names-row-item">#</td>
     <td class="table-names-row-item">Дата</td>
     <td @click="changeSorting('name')" class="table-names-row-item">Название</td>
     <td @click="changeSorting('count')" class="table-names-row-item">Количество</td>
     <td @click="changeSorting('distance')" class="table-names-row-item">Расстояние</td>
   </tr>
   <data-row v-for="row in rows" :key="row.id" :row="row"></data-row>
   <add-new-row @newRow="newRow"></add-new-row>
 </table>
</template>

<script>
import AddNewRow from './AddNewRow.vue';
import DataRow from './DataRow.vue';

export default {
  name: 'MainTable',
  components: { DataRow, AddNewRow },
  emits: {
    changeSorting: {
      type: Object,
    },
    newRow: {
      type: Object,
    },
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    sorting: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeSorting(value) {
      let newDirection = 'desc';
      if (this.sorting.orderBy === value) {
        newDirection = this.sorting.direction === 'desc' ? 'asc' : 'desc';
      }
      this.$emit('changeSorting', {
        orderBy: value,
        direction: newDirection,
      });
    },
    newRow(event) {
      this.$emit('newRow', event);
    },
  },
};
</script>

<style lang="scss">
table {
  border: 1px solid lightgreen;
  width: 100%;
  .table-names-row {
    background-color: lightgreen;
    &-item {
      user-select: none;
      cursor: pointer;
      font-size: 20px;
    }
  }
  td {
    border: 1px solid lightgreen;
    width: 20%;
    text-align: center;
    height: 50px;
  }
}
</style>
