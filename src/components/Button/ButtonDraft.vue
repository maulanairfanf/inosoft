<template>
  <button
    :type="type"
    class="bg-gray-300 rounded-full px-16 py-1 border font-extralight text-sm border-gray-50 hover:border-gray-500"
  >
    {{ msg }}
  </button>
</template>
<script>
  export default {
    name: 'ButtonDraft',
    props: { type: String, msg: String },
  };
</script>
