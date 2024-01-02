<template>
  <div class="product-overview">
    <h1>Our products</h1>
    <div class="product-overview__container">
      <Product :product=product class="product-overview__product" v-for="product in products" />
    </div>
  </div>
</template>

<script setup>
  let [cartProducts, products] = [useCartProducts(), useProducts()];

  //Get all products from API
  products.value = await $fetch('https://fakestoreapi.com/products');
  
  //client side only, this adds products to local storage to save the cart contents for a revisit.
  if (process.client) {
    if (!localStorage.getItem("conceptShoppingCart")) {
      localStorage.setItem("conceptShoppingCart", JSON.stringify([]));
    }
    cartProducts.value = JSON.parse(localStorage.getItem("conceptShoppingCart"));
  }
</script>