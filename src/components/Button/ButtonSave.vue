<template>
  <button
    :type="type"
    class="mx-4 py-4 px-10 text-gray-600 rounded font-extralight text-sm border-2 border-gray-400 bg-white hover:border-gray-800"
  >
    {{ msg }}
  </button>
</template>
<script>
  export default {
    name: 'ButtonSave',
    props: {
      type: String,
      msg: String,
    },
  };
</script>
