<template>
  <button
    :type="type"
    class="mx-4 py-4 px-10 rounded border-2 border-gray-50 hover:border-gray-500 font-extralight text-sm"
  >
    {{ msg }}
  </button>
</template>
<script>
  export default {
    name: 'ButtonCancel',
    props: {
      type: String,
      msg: String,
    },
  };
</script>
