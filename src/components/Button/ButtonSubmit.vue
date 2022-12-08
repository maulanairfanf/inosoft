<template>
  <button
    :type="type"
    class="ml-4 py-4 px-20 bg-teal-400 text-white rounded text-sm border hover:border-teal-400 hover:text-teal-400 hover:bg-white"
  >
    {{msg}}
  </button>
</template>
<script>
  export default {
    name: 'ButtonSubmit',
    props: {
      type: String,
      msg: String,
    },
  };
</script>
