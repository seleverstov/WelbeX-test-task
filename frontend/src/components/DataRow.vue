<template>
  <tr class="table-data-row">
    <td class="table-data-row-item">{{row.id}}</td>
    <td class="table-data-row-item">{{row.date}}</td>
    <td class="table-data-row-item">{{row.name}}</td>
    <td class="table-data-row-item">{{row.count}}</td>
    <td class="table-data-row-item">{{row.distance}}km</td>
  </tr>
</template>

<script>
export default {
  name: 'DataRow',
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
