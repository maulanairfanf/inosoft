<template>
  <div class="grid grid-cols-15 gap-2 text-left bg-gray-50 p-2 w-full border">
    <div class="col-span-2 whitespace-nowrap">
      <span>Description</span>
    </div>
    <div>
      <span class="whitespace-nowrap"> Qty</span>
    </div>
    <div>
      <span class="whitespace-nowrap">UOM</span>
    </div>
    <div class="col-span-2 whitespace-nowrap"><span>Unit Price</span></div>
    <div>
      <span class="whitespace-nowrap">Discount (%)</span>
    </div>
    <div><span class="whitespace-nowrap">VAT (%)</span></div>
    <div>
      <span class="whitespace-nowrap"></span>
    </div>
    <div>
      <span class="whitespace-nowrap"> Currency</span>
    </div>
    <div>
      <span class="whitespace-nowrap">VAT Amount</span>
    </div>
    <div>
      <span class="whitespace-nowrap">Sub Total</span>
    </div>
    <div>
      <span class="whitespace-nowrap"> Total</span>
    </div>
    <div class="col-span-2">
      <span class="whitespace-nowrap">Charge To</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HeadGridCost',
  };
</script>
