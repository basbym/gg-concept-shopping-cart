<template>
  <div class="product">
    <NuxtImg :src=product.image class="product__image" alt="product image" />
    <h3 class="product__title">{{ product.title }}</h3>
    <p class="product__description">{{ product.description }}</p>
    <div class="product__button-container">
      <CartButton :id=product.id />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    product: {},
  }); 
</script>