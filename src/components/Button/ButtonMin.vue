<template>
  <button
    @click="handleMinusChild"
    type="button"
    class="bg-gray-200 hover:bg-white border rounded block p-4"
  >
    <svg
      width="12"
      height="5"
      viewBox="0 0 22 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3125 0H1.5625C0.699707 0 0 0.699707 0 1.5625V3.125C0 3.98779 0.699707 4.6875 1.5625 4.6875H20.3125C21.1753 4.6875 21.875 3.98779 21.875 3.125V1.5625C21.875 0.699707 21.1753 0 20.3125 0Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>
<script>
  export default {
    name: 'ButtonMin',
    props: {
      id: Number,
      type: String,
    },
    methods: {
      handleMinusChild() {
        alert(`Button Minus ${this.id}`);
        // this.$emit('handle-minus', this.id);
      },
    },
  };
</script>
