<template>
 <tr class="add-new-row">
   <td><button @click="sendData" class="add-new-row-button">Add</button></td>
   <td><input v-model="date" class="add-new-row-input" type="date"></td>
   <td><input v-model="name" class="add-new-row-input" type="text"></td>
   <td><input v-model="count" class="add-new-row-input" type="number"></td>
   <td><input v-model="distance" class="add-new-row-input" type="number"></td>
 </tr>
</template>

<script>

export default {
  name: 'AddNewRow',
  data() {
    return {
      date: null,
      name: null,
      count: null,
      distance: null,
    };
  },
  methods: {
    sendData() {
      if (this.date && this.name && this.count && this.distance) {
        this.$emit('newRow', {
          date: new Date(this.date).getTime(),
          name: this.name,
          count: this.count,
          distance: this.distance,
        });
        this.clearValues();
      } else {
        alert('Введите значение!');
      }
    },
    clearValues() {
      [this.date, this.name, this.count, this.distance] = [null];
    },
  },
};
</script>

<style lang="scss" scoped>
.add-new-row {
  border: 1px solid lightgreen;
  width: 100%;
  text-align: center;
  height: 50px;
  &-button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: lightgreen;
    cursor: pointer;
    &:active {
      background-color: forestgreen;
    }
  }
  &-input {
    width: 100%;
    height: 100%;
    border: 1px solid lightgreen;
    font-size: 20px;
    text-align: center;
  }
}
</style>
