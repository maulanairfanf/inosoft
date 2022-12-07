<template>
  <div class="grid grid-cols-15 gap-2 text-left bg-gray-50 p-2 w-full border">
    <div class="col-span-2">Description</div>
    <div>Qty</div>
    <div>UOM</div>
    <div class="col-span-2">Unit Price</div>
    <div>Discount (%)</div>
    <div>VAT (%)</div>
    <div></div>
    <div>Currency</div>
    <div>VAT Amount</div>
    <div>Sub Total</div>
    <div>Total</div>
    <div class="col-span-2">Charge To</div>
  </div>
</template>
<script>
  export default {
    name: 'HeadGridCost',
  };
</script>
