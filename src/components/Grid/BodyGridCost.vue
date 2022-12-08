<template>
  <div class="grid grid-cols-15 gap-2 p-2 w-full border border-t-0">
    <div class="col-span-2">
      <InputText type="text" placeholder="Description" width="w-full" />
    </div>
    <div>
      <InputText type="number" placeholder="QTY" width="w-full" />
    </div>
    <div>
      <InputSelect :listOption="listUOM" width="w-full" />
    </div>
    <div class="col-span-2">
      <InputText type="number" placeholder="Unit Price" width="w-full" />
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
      <InputSelect :listOption="listCurrency" width="w-full" />
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
    <div class="col-span-2 flex justify-between">
      <InputSelect :listOption="listCharge" width="w-full mr-2" />
      <ButtonMin type="button" @handle-minus="handleMinus" :id="id" />
    </div>
  </div>
</template>
<script>
  import store from '@/store';
  import ButtonMin from '@/components/Button/ButtonMin.vue';
  import InputSelect from '@/components/Input/InputSelect.vue';
  import InputText from '@/components/Input/InputText.vue';
  export default {
    name: 'BodyGridCost',
    props: {
      listCurrency: [],
      id: Number,
    },
    components: { InputText, InputSelect, ButtonMin },
    computed: {
      listUOM() {
        return store.state.uom;
      },
      listCharge() {
        return store.state.charge;
      },
    },
    mounted() {
      store.dispatch('fetchUOM');
      store.dispatch('fetchCharge');
    },
    methods: {
      handleMinus(params) {
        alert(`Click Button Minus With ID : ${params} `);
      },
    },
  };
</script>
