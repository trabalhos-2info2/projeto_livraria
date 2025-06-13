<script setup>
defineProps(['id']);
</script>

<template>
  <h1>Detalhes do livro: {{ id }}</h1>
</template>

<style scoped>
h1 {
  margin: 8vw;
  font-weight: normal;
}
</style>