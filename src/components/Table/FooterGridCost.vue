<template>
  <div class="grid grid-cols-16 text-left p-2 w-full border border-t-0">
    <div class="col-span-5 flex items-center text-sm">
      <span class="mr-2">Exchange Rate 1 USD = </span
      ><InputText width="w-2/12" value="3.6725" />
      <span class="ml-2">AED </span>
    </div>
    <div class="col-span-4"></div>
    <div class="flex flex-col items-center">
      <div class="bg-gray-300 w-full mb-1 py-1">
        <span class="ml-2 text-sm text-slate-900"> AED in Total</span>
      </div>
      <div class="bg-gray-300 w-full py-1">
        <span class="ml-2 text-sm text-slate-900"> USD in Total</span>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="bg-gray-300 w-full mb-1 py-1 text-right">
        <span class="ml-2 mr-6 text-slate-900"> 0.00</span>
      </div>
      <div class="bg-gray-300 w-full py-1 text-right">
        <span class="ml-2 mr-6 text-slate-900"> 0.00</span>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="bg-gray-300 w-full mb-1 py-1 text-center">
        <span class="ml-2 mr-6 text-slate-900"> 0.00</span>
      </div>
      <div class="bg-gray-300 w-full py-1 text-center">
        <span class="ml-2 mr-6 text-slate-900"> 0.00</span>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="bg-gray-300 w-full mb-1 py-1">
        <span class="ml-2 mr-6 text-slate-900"> 0.00</span>
      </div>
      <div class="bg-gray-300 w-full py-1">
        <span class="ml-2 mr-6 text-slate-900"> 0.00</span>
      </div>
    </div>
    <div class="col-span-2"></div>
    <div class="flex items-center justify-start">
      <button class="bg-teal-300 border rounded block p-4 ml-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3125 8.59375H13.2812V1.5625C13.2812 0.699707 12.5815 0 11.7188 0H10.1562C9.29346 0 8.59375 0.699707 8.59375 1.5625V8.59375H1.5625C0.699707 8.59375 0 9.29346 0 10.1562V11.7188C0 12.5815 0.699707 13.2812 1.5625 13.2812H8.59375V20.3125C8.59375 21.1753 9.29346 21.875 10.1562 21.875H11.7188C12.5815 21.875 13.2812 21.1753 13.2812 20.3125V13.2812H20.3125C21.1753 13.2812 21.875 12.5815 21.875 11.7188V10.1562C21.875 9.29346 21.1753 8.59375 20.3125 8.59375Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
  import InputText from '../InputText.vue';
  export default {
    name: 'FooterGridCost',
    components: { InputText },
  };
</script>
