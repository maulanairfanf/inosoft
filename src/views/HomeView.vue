<template>
  <div class="p-4">
    <CostDetail />
    <div class="flex justify-end mt-4 bg-gray-50 py-6">
      <ButtonCancel />
      <ButtonSave />
      <ButtonSubmit />
    </div>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue';
  import CostDetail from '@/components/CostDetail.vue';
  import ButtonCancel from '@/components/Button/ButtonCancel.vue';
  import ButtonSave from '@/components/Button/ButtonSave.vue';
  import ButtonSubmit from '@/components/Button/ButtonSubmit.vue';
  export default {
    name: 'HomeView',
    components: {
      HelloWorld,
      CostDetail,
      ButtonCancel,
      ButtonSave,
      ButtonSubmit,
    },
  };
</script>
