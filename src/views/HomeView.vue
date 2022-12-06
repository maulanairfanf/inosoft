<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <CostDetail />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
  import CostDetail from '@/components/CostDetail.vue';
  export default {
    name: 'HomeView',
    components: {
      HelloWorld,
      CostDetail,
    },
  };
</script>
