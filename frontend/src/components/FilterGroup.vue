<template>
 <div class="filter-group">
   <select @change="filterColumns" v-model="column" class="filter" name="column">
     <option value="date">Дата</option>
     <option value="name">Название</option>
     <option value="count">Количество</option>
     <option value="distance">Расстояние</option>
   </select>
   <select @change="filterColumns" class="filter" v-model="condition" name="condition" id="">
     <option v-if="column !== 'name'" value=">"> > </option>
     <option v-if="column !== 'name'" value="<">&lt;</option>
     <option value="="> = </option>
     <option v-if="column === 'name'" value="||"> || </option>
   </select>
   <input
     @change="filterColumns"
     v-if="column === 'date'"
     v-model="date"
     class="filter"
     type="date"
   >
   <input
     @input="filterColumns"
     v-else v-model="value"
     class="filter"
     type="text"
   >
 </div>
</template>

<script>
export default {
  name: 'FilterGroup',
  data() {
    return {
      column: null,
      condition: null,
      value: null,
      date: null,
    };
  },
  emits: {
    filterChanged: {
      type: Object,
    },
  },
  methods: {
    filterColumns() {
      const value = this.column === 'date' ? this.date : this.value;
      if (this.column && this.condition) {
        this.$emit('filterChanged', {
          column: this.column,
          condition: this.condition,
          value,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
  .filter {
    border: 1px solid lightgreen;
    align-self: center;
    margin: 10px;
  }
}
</style>
