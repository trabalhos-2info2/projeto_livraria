<script setup>
import { ref, computed } from 'vue';

import PrincipalComponent from '@/components/PrincipalComponent.vue'
import LancamentosComponent from '@/components/LancamentosComponent.vue';
import CarrinhoComponent from '@/components/CarrinhoComponent.vue'
import FavoritosComponent from '@/components/FavoritosComponent.vue';


import { useBooksStore } from '@/stores/book';
import { useCartStore } from '@/stores/cart';
const booksStore = useBooksStore();
const cartStore = useCartStore();

const booleanoCarrinho = ref(false);
const booleanoInicio = ref(false);
const booleanoFavoritos = ref(false);
const quantidade = ref(1);
const curtidos = ref([]);

const favoritos = computed(() => {
  return produtos.filter(produto => curtidos.value.includes(produto.id));
});

const contadorCurtidos = computed(() => {
  return curtidos.value.length;
});

const contadorCarrinho = computed(() => {
  return carrinho.value.reduce((total, item) => total + item.quantidade, 0);
});

function cliqueCurtir(idProduto) {
  const index = curtidos.value.indexOf(idProduto);
  if (index !== -1) {
    curtidos.value.splice(index, 1);
  } else {
    curtidos.value.push(idProduto);
  }
}

</script>

<template>
    <main v-if="!booleanoCarrinho && !booleanoFavoritos">
      <PrincipalComponent />
      <LancamentosComponent
        :produtos="produtos"
        :curtidos="curtidos"
        @adicionar-carrinho="adicionar"
        @clique-curtir="cliqueCurtir"
         />
    </main>

    <main v-else-if="booleanoCarrinho">
      <CarrinhoComponent 
        v-bind:cart="carrinho" 
        v-bind:total="total"
        @increment-book="incrementar"
        @decrement-book="decrementar"
        @hide-cart="booleanoCarrinho = false"
        />
    </main>

    <main v-else-if="booleanoFavoritos">
      <FavoritosComponent
        :curtidos="curtidos"
        :favoritos="favoritos"
        @adicionar-carrinho="adicionar"
        @clique-curtir="cliqueCurtir"
        />
    </main>
</template>