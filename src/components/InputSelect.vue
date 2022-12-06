<template>
  <select
    class="bg-gray-50 border text-sm text-gray-400 rounded block p-2.5"
    :class="width"
  >
    <option>Select an Option</option>
    <option selected value="US">SHP</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
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
