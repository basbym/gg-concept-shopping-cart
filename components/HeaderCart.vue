<template>
  <div class="header-cart">
    <button @click=toggleCart() class="header-cart__button">
      view cart
    </button>
    <div class="header-cart__cart-modal" v-if=showCart>
      <button @click=toggleCart() class="header-cart__close">
        close
      </button>
      <div class="header-cart__product" v-for="product in getCartProducts()">
        <MiniProduct :product=getProduct(product.id) :amount=product.amount /> 
      </div>
      <div v-if="getCartProducts().length === 0">No products in cart</div>
      <NuxtLink to="/cart" @click=toggleCart() class="header-cart__link">
        To shopping cart
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const [cartProducts, products] = [useCartProducts(), useProducts()];
  const showCart = ref(false);

  function toggleCart() {
    showCart.value = !showCart.value;
  }

  function getProduct(id) {
    return(products.value.find( product  => product.id == id ))
  }

  function getCartProducts() {
    return cartProducts.value.filter( product => product.amount != 0 )
  }
</script>