<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="width"
    :value="value"
    class="bg-gray-50 border text-sm text-gray-700 rounded block p-2.5"
    required
  />
</template>

<script>
  export default {
    name: 'InputText',
    props: {
      placeholder: String,
      width: String,
      type: String,
      value: String,
    },
  };
</script>
