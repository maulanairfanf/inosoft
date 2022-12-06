<template lang="">
  <div class="grid grid-cols-16 gap-2 p-2 w-full border border-t-0">
    <div class="col-span-2">
      <InputText type="text" placeholder="Description" width="w-full" />
    </div>
    <div class="w-full">
      <InputText type="text" placeholder="QTY" width="w-full" />
    </div>
    <div>
      <InputSelect width="w-full" />
    </div>
    <div class="col-span-2">
      <InputText type="text" placeholder="Unit Price" width="w-full" />
    </div>
    <div><InputText type="number" value="0" width="w-full" /></div>
    <div><InputText type="number" value="0" width="w-full" /></div>
    <div class="flex items-center justify-center">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.30176 1.42822L10.3857 0.344238C10.8447 -0.114746 11.5869 -0.114746 12.041 0.344238L21.5332 9.83154C21.9922 10.2905 21.9922 11.0327 21.5332 11.4868L12.041 20.979C11.582 21.438 10.8398 21.438 10.3857 20.979L9.30176 19.895C8.83789 19.4312 8.84766 18.6743 9.32129 18.2202L15.2051 12.6147H1.17188C0.522461 12.6147 0 12.0923 0 11.4429V9.88037C0 9.23096 0.522461 8.7085 1.17188 8.7085H15.2051L9.32129 3.10303C8.84277 2.64893 8.83301 1.89209 9.30176 1.42822Z"
          fill="#94a3b8"
        />
      </svg>
    </div>
    <div>
      <InputSelect width="w-full" />
    </div>
    <div class="flex items-center justify-end mr-6">
      <span>0.00</span>
    </div>
    <div class="flex items-center justify-center mr-6">
      <span>0.00</span>
    </div>
    <div class="flex items-center mr-6">
      <span>0.00</span>
    </div>
    <div class="col-span-2">
      <InputSelect width="w-full" />
    </div>
    <div>
      <button class="bg-gray-200 border rounded block p-4">
        <svg
          width="12"
          height="5"
          viewBox="0 0 22 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3125 0H1.5625C0.699707 0 0 0.699707 0 1.5625V3.125C0 3.98779 0.699707 4.6875 1.5625 4.6875H20.3125C21.1753 4.6875 21.875 3.98779 21.875 3.125V1.5625C21.875 0.699707 21.1753 0 20.3125 0Z"
            fill="#64748b"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
  import InputSelect from '../InputSelect.vue';
  import InputText from '../InputText.vue';
  export default {
    name: 'BodyGridCost',
    components: { InputText, InputSelect },
  };
</script>
