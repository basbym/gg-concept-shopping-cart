<template>
  <div class="cart-overview">
    <div class="cart-overview__container">
      <Product v-for="product in cartProducts" :product="getProduct(product.id)" />
      <p class="cart-overview__no-items" v-if="products.length === 0">No products in cart</p>
    </div>
  </div>

</template>

<script setup>
  let cartProducts = useCartProducts();
  let products = useProducts()

  //client side only, get products form local storage
  if (process.client) {
    cartProducts.value = JSON.parse(localStorage.getItem("conceptShoppingCart"));
  }

  //Only get in cart products from API
  products.value = await Promise.all(cartProducts.value.map(async (product) => {
      const productData = await $fetch(`https://fakestoreapi.com/products/${product.id}`);
      return productData;
    }
  ));

  function getProduct(productId) {
    return products.value.find(product => product.id === productId)
  };
</script>