<template>
  <div class="grid grid-cols-12 gap-2 p-2 w-full">
    <div class="col-span-2 flex items-start">
      <div class="bg-gray-50 text-teal-400 text-sm block p-2.5">
        <svg
          width="25"
          height="20"
          viewBox="0 0 25 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.375 13.75H23.75V9.52734C23.75 9.03125 23.5508 8.55469 23.1992 8.20312L19.2969 4.30078C18.9453 3.94922 18.4688 3.75 17.9727 3.75H16.25V1.875C16.25 0.839844 15.4102 0 14.375 0H1.875C0.839844 0 0 0.839844 0 1.875V14.375C0 15.4102 0.839844 16.25 1.875 16.25H2.5C2.5 18.3203 4.17969 20 6.25 20C8.32031 20 10 18.3203 10 16.25H15C15 18.3203 16.6797 20 18.75 20C20.8203 20 22.5 18.3203 22.5 16.25H24.375C24.7188 16.25 25 15.9688 25 15.625V14.375C25 14.0312 24.7188 13.75 24.375 13.75ZM6.25 18.125C5.21484 18.125 4.375 17.2852 4.375 16.25C4.375 15.2148 5.21484 14.375 6.25 14.375C7.28516 14.375 8.125 15.2148 8.125 16.25C8.125 17.2852 7.28516 18.125 6.25 18.125ZM18.75 18.125C17.7148 18.125 16.875 17.2852 16.875 16.25C16.875 15.2148 17.7148 14.375 18.75 14.375C19.7852 14.375 20.625 15.2148 20.625 16.25C20.625 17.2852 19.7852 18.125 18.75 18.125ZM21.875 10H16.25V5.625H17.9727L21.875 9.52734V10Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <InputSelect :listOption="listLogistic" class="w-full border-0" />
    </div>
    <div class="grid grid-cols-12 col-span-10">
      <div class="col-span-12 flex justify-start py-1 border-b">
        <ButtonDraft type="button" msg="Draft" />
      </div>
      <div class="grid grid-cols-6 col-span-12 gap-2 mt-4">
        <div class="col-span-2 flex flex-col items-start">
          <h4 class="whitespace-nowrap">Assigned Vendor</h4>
          <InputSelect :listOption="listVendor" class="w-full" />
        </div>
        <div class="col-span-1 flex flex-col items-start">
          <h4 class="whitespace-nowrap">Invoice To</h4>
          <InputText class="w-full" value="John Smith" />
        </div>
        <div class="col-span-1 flex flex-col items-start">
          <h4 class="whitespace-nowrap">Invoice To</h4>
          <InputText class="w-full" value="ABC-123-01" />
        </div>
        <div class="col-span-1 flex flex-col items-start pr-4">
          <h4 class="whitespace-nowrap">Invoice To</h4>
          <InputSelect :listOption="listInvoice" class="w-full" />
        </div>
        <div
          class="col-span-1 flex flex-col items-start pl-4 border-l-2 border-dashed"
        >
          <h4 class="whitespace-nowrap">Costumer - Contract</h4>
          <InputSelect :listOption="listCostumerContract" class="w-full" />
        </div>
      </div>
      <div class="grid grid-cols-6 col-span-12 gap-2 mt-1">
        <div class="col-span-5 flex flex-col items-start pr-4 relative">
          <h4 class="whitespace-nowrap">Vendor Address</h4>
          <InputText class="w-full" value="John Smith" />
        </div>
        <div
          class="col-span-1 flex flex-col items-start pl-4 border-l-2 border-dashed"
        >
          <h4 class="whitespace-nowrap">Costumper PO No.</h4>
          <InputSelect :listOption="listCostumerPO" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import InputSelect from '@/components/Input/InputSelect.vue';
  import InputText from '@/components/Input/InputText.vue';
  import ButtonDraft from '../Button/ButtonDraft.vue';
  export default {
    data() {
      return {
        listLogistic: [
          {
            name: 'Logistic Instruction',
            id: '1',
            selected: true,
          },
          {
            name: 'Logistic Instruction 2',
            id: '2',
            selected: false,
          },
        ],
        listVendor: [
          {
            name: 'Amarit & Associates Logistics Co Ltd',
            id: '1',
            selected: true,
          },
          {
            name: 'Inosoft',
            id: '2',
            selected: false,
          },
        ],
        listInvoice: [
          {
            name: 'MITO',
            id: '1',
            selected: true,
          },
          {
            name: 'OTIM',
            id: '2',
            selected: false,
          },
        ],
        listCostumerContract: [
          {
            name: 'ADNOC-ONSHORE',
            id: '1',
            selected: true,
          },
          {
            name: 'ONSHORE-ADNOC',
            id: '2',
            selected: false,
          },
        ],
        listCostumerPO: [
          {
            name: 'A123XXHTA0192',
            id: '1',
            selected: true,
          },
          {
            name: 'B123XXHTA0192',
            id: '2',
            selected: false,
          },
        ],
      };
    },
    name: 'GridInformation',
    components: { InputSelect, InputText, ButtonDraft },
  };
</script>
