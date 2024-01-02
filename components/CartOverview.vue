<template>
  <div class="cart-overview">
    <div class="cart-overview__container">
      <Product v-for="product in getSelectedProducts()" :product=product />
      <p class="cart-overview__no-items" v-if="getSelectedProducts().length === 0">No products in cart</p>
    </div>
  </div>

</template>

<script setup>
  let [cartProducts, products] = [useCartProducts(), useProducts()];

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

  const isRemoved = (productId) => cartProducts.value.find(product => product.id == productId)?.amount === 0;

  const getSelectedProducts = () => products.value.filter(product => !isRemoved(product.id));
</script>