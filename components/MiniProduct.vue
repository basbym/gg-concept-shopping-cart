<template>
  <div class="mini-product">
    <NuxtImg :src=product.image alt="product image" class="mini-product__image" />
    <h3 class="mini-product__title">{{ amount }} x {{ product.title }}</h3>
  </div>
</template>

<script setup>
  const props = defineProps({
    product: {},
    amount: 0,
  }); 
</script>