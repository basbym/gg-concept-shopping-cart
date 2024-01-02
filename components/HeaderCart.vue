<template>
  <div class="header-cart">
    <button @click=openCart() class="header-cart__button">
      view cart
    </button>
    <div class="header-cart__cart-modal" v-if=showCart>
      <button @click=openCart() class="header-cart__close">
        close
      </button>
      <div class="header-cart__product" v-for="product in getCartProducts()">
        <MiniProduct :product=getProduct(product.id) :amount=product.amount /> 
      </div>
      <div v-if="getCartProducts().length === 0">No products in cart</div>
      <NuxtLink to="/cart" class="header-cart__link">
        To shopping cart
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const [cartProducts, products] = [useCartProducts(), useProducts()];
  let showCart = ref(false);

  const openCart = () => {
    showCart.value = !showCart.value;
  }

  const getProduct = (id) => {
    return(products.value.find( product  => product.id == id ))
  }

  const getCartProducts = () => cartProducts.value.filter(product => product.amount != 0)
</script>