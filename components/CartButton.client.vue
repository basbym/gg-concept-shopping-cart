<template>
  <div class="cart-button">
    <div v-if=isInCart()>
      <button class="cart-button__remove-button" @click=updateCartStatus()>
        <span>Remove from cart</span>
      </button>
      <button @click=incrementAmount(1)>+</button>
        {{ getProduct().amount }}
      <button @click=incrementAmount(-1)>-</button>
    </div>
    <div v-else>
      <button class="cart-button__add-button" @click=updateCartStatus()>
        <span>Add to cart</span>
      </button>
    </div>
    <Teleport to="body" v-if=showNotification>
      <Notification />
    </Teleport>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    id: 0,
    class: ''
  });
  const getProduct = () => cartProducts.value.find(product => product.id == props.id);
  const isInCart = () => getProduct()?.amount >= 1;
  let showNotification = ref(false);
  let cartProducts = useCartProducts();

  const triggerNotification = () => {
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 1250);
  }

  const updateLocalStorage = () => {  
    if (process.client) localStorage.setItem("conceptShoppingCart", JSON.stringify(cartProducts.value));
  }

  const incrementAmount = (amount) => {
    getProduct().amount += amount;
    updateLocalStorage();
  }
  
  const updateCartStatus = () => {
    if (isInCart()) {
      getProduct().amount = 0;
    } else if (getProduct()) {
      getProduct().amount = 1;
    } else {
      cartProducts.value.push({ id: props.id, amount: 1 });
    }
    triggerNotification();
    updateLocalStorage();
  }
</script>