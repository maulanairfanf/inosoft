<template>
  <form @submit.prevent="onSubmit" class="p-4">
    <InformationDetail class="mb-4" />
    <CostDetail />
    <div class="flex justify-end mt-4 bg-gray-50 py-6">
      <ButtonCancel msg="Cancel" type="button" />
      <ButtonSave msg="Saves as Draft" type="button" />
      <ButtonSubmit msg="Submit" type="submit" />
    </div>
  </form>
</template>

<script>
  import CostDetail from '@/components/CostDetail.vue';
  import ButtonCancel from '@/components/Button/ButtonCancel.vue';
  import ButtonSave from '@/components/Button/ButtonSave.vue';
  import ButtonSubmit from '@/components/Button/ButtonSubmit.vue';
  import InformationDetail from '@/components/InformationDetail.vue';
  export default {
    name: 'HomeView',
    components: {
      CostDetail,
      ButtonCancel,
      ButtonSave,
      ButtonSubmit,
      InformationDetail,
    },
    methods: {
      onSubmit() {
        alert('Succes Submit');
      },
    },
  };
</script>
