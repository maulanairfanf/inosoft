<template>
  <select
    class="bg-gray-50 border text-sm text-gray-400 rounded block p-2.5"
    :class="width"
  >
    <option>Select an Option</option>
    <option :selected="item.selected" v-for="item in listOption">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'InputSelect',
    props: {
      listOption: [],
      width: String,
    },
  };
</script>
