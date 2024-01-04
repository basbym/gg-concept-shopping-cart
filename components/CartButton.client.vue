<template>
  <div class="cart-button">
    <div v-if=isInCart()>
      <button class="cart-button__remove-button" @click=removeItem()>
        <span>Remove from cart</span>
      </button>
      <button @click=incrementAmount(1)>+</button>
        {{ getProduct().amount }}
      <button @click=incrementAmount(-1)>-</button>
    </div>
    <div v-else>
      <button class="cart-button__add-button" @click=addItem()>
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
  });

  function getProduct() { return cartProducts.value.find( product => product.id === props.id )};
  function isInCart() { return getProduct()?.amount >= 1 };
  const showNotification = ref(false);
  const cartProducts = useCartProducts();

  function triggerNotification () {
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 1250);
  }
  
  function updateLocalStorage () {  
    if (process.client) localStorage.setItem("conceptShoppingCart", JSON.stringify(cartProducts.value));
  }

  function incrementAmount (amount) {
    getProduct().amount += amount;
    if (getProduct().amount === 0) removeItem();
    updateLocalStorage();
  }

  function removeItem () {
    cartProducts.value.splice(cartProducts.value.indexOf(getProduct()),1);
    updateLocalStorage();
    triggerNotification();
  }

  function addItem () {
    cartProducts.value.push({ id: props.id, amount: 1 });
    updateLocalStorage();
    triggerNotification();
  }
</script>