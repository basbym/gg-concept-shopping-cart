<template>
  <div class="site-menu">
    <div class="site-menu__container">
      <NuxtLink to="/" class="site-menu__item">
        Product overview
      </NuxtLink>
      <NuxtLink to="/cart" class="site-menu__item">
        Shopping cart
      </NuxtLink>
      <HeaderCart class="site-menu__cart" />
    </div>
  </div>
</template>