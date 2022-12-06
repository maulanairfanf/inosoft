<template>
  <div class="flex flex-col w-full border">
    <div class="flex items-center m-2">
      <h1 class="text-teal-400 font-semibold mr-4">Cost Detail</h1>
      <svg
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.98486 9.74365L0.344237 3.10303C-0.114747 2.64404 -0.114747 1.90186 0.344237 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2856 1.44287C15.7446 1.90186 15.7446 2.64404 15.2856 3.09814L8.64502 9.73877C8.18603 10.2026 7.44385 10.2026 6.98486 9.74365Z"
          fill="#2dd4bf"
        />
      </svg>
    </div>
    <HeadGridCost />
    <BodyGridCost
      v-for="item in listCurrency"
      :listCurrency="item"
      :key="item.id"
    />
    <FooterGridCost />
  </div>
</template>

<script>
  import store from '@/store';
  import HeadGridCost from './Table/HeadGridCost.vue';
  import BodyGridCost from './Table/BodyGridCost.vue';
  import FooterGridCost from './Table/FooterGridCost.vue';

  export default {
    name: 'CostDetail',
    components: {
      HeadGridCost,
      BodyGridCost,
      FooterGridCost,
    },
    computed: {
      listCurrency() {
        return store.state.currency;
      },
    },
    mounted() {
      store.dispatch('fetchCurrency');
    },
  };
</script>
