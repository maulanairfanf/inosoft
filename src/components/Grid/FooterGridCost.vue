<template>
  <div class="grid grid-cols-15 text-left px-2 w-full border border-t-0">
    <div class="col-span-5 flex items-center text-sm">
      <span class="mr-2">Exchange Rate 1 USD = </span
      ><InputText width="w-2/12" value="3.6725" />
      <span class="ml-2">AED </span>
    </div>
    <div class="col-span-4"></div>
    <div class="flex flex-col items-center">
      <div class="container-footer-text mb-1">
        <span class="text-footer ml-4"> AED in Total</span>
      </div>
      <div class="container-footer-text">
        <span class="text-footer ml-4"> USD in Total</span>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="container-footer-text mb-1 text-right">
        <span class="text-footer mr-6"> 0.00</span>
      </div>
      <div class="container-footer-text text-right">
        <span class="text-footer mr-6"> 0.00</span>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="container-footer-text mb-1 text-center">
        <span class="text-footer mr-6"> 0.00</span>
      </div>
      <div class="container-footer-text text-center">
        <span class="text-footer mr-6"> 0.00</span>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="container-footer-text mb-1">
        <span class="text-footer mr-6"> 0.00</span>
      </div>
      <div class="container-footer-text">
        <span class="text-footer mr-6"> 0.00</span>
      </div>
    </div>
    <div class="col-span-1"></div>
    <div class="flex items-center justify-end">
      <ButtonPlus />
    </div>
  </div>
</template>
<script>
  import InputText from '@/components/Input/InputText.vue';
  import ButtonPlus from '@/components/Button/ButtonPlus.vue';
  export default {
    name: 'FooterGridCost',
    components: { InputText, ButtonPlus },
  };
</script>
