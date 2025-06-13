<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent @click-cart="booleanoCarrinho  = !booleanoCarrinho"  @click-heart="booleanoFavoritos = !booleanoFavoritos"/>
  <main>
    <RouterView />
  </main>
  <FooterComponent></FooterComponent>
</template>

<style scoped></style>
