<script setup>
import { ref, computed } from 'vue';

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import PrincipalComponent from './components/PrincipalComponent.vue'
import LancamentosComponent from './components/LancamentosComponent.vue';
import CarrinhoComponent from './components/CarrinhoComponent.vue'
import FavoritosComponent from './components/FavoritosComponent.vue';

const produtos = [
  {
    id: 1,
    titulo: 'Chain of Iron: Volume 2',
    autor: 'Cassandra Clare',
    preco: 23.24,
    capa: '/src/chain_of_iron.png',
  },
  {
    id: 2,
    titulo: 'Chain of Thorns',
    autor: 'Cassandra Clare',
    preco: 23.24,
    capa: '/src/chain_of_thorns.png',
  },
  {
    id: 3,
    titulo: 'City of Fallen Angels',
    autor: 'Cassandra Clare',
    preco: 13.94,
    capa: '/src/city_of_fallen_angels.png',
  },
  {
    id: 4,
    titulo: 'Nona the Ninth',
    autor: 'Cassandra Clare',
    preco: 16.84,
    capa: '/src/nona_the_niinth.png',
  },
  {
    id: 5,
    titulo: 'Harlem Shuffle',
    autor: 'Colson Whitehead',
    preco: 26.92,
    capa: '/src/harlem_shuffle.png',
  },
  {
    id: 6,
    titulo: 'Two Old Women',
    autor: 'Velma Wallis',
    preco: 13.95,
    capa: '/src/two_old_women.png',
  },
  {
    id: 7,
    titulo: 'Carrie Soto Is Back',
    autor: 'Taylor Jenkins Reid',
    preco: 26.04,
    capa: '/src/carrie_soto_is_back.png',
  },
  {
    id: 8,
    titulo: 'Book Lovers',
    autor: 'Emily Henry',
    preco: 15.81,
    capa: '/src/book_lovers.png',
  },
];
const booleanoCarrinho = ref(false);
const booleanoInicio = ref(false);
const booleanoFavoritos = ref(false);
const carrinho = ref([]);
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

function adicionar(produto) {
  const posicaoProduto = carrinho.value.findIndex(item => item.produto.id === produto.id);
  if (posicaoProduto !== -1) {
    carrinho.value[posicaoProduto].quantidade += quantidade.value;
  } else {
    carrinho.value.push({ produto, quantidade: quantidade.value });
  }
  quantidade.value = 1;
}

function cliqueCurtir(idProduto) {
  const index = curtidos.value.indexOf(idProduto);
  if (index !== -1) {
    curtidos.value.splice(index, 1);
  } else {
    curtidos.value.push(idProduto);
  }
}

function incrementar(item) {
  item.quantidade++;
}
function decrementar(item) {
  if (item.quantidade > 0) {
    item.quantidade--;
    if (item.quantidade === 0) {
      const posicao = carrinho.value.findIndex(contador => contador.produto.id === item.produto.id);
      if (posicao !== -1) {
        carrinho.value.splice(posicao, 1);
      }
    }
  }
}
const total = computed(() => {
  return carrinho.value.reduce((acc, item) => {
    return acc + item.quantidade * item.produto.preco;
  }, 0);
});

</script>

<template>
  <HeaderComponent @click-cart="booleanoCarrinho  = !booleanoCarrinho"  @click-heart="booleanoFavoritos = !booleanoFavoritos"/>

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
    <FooterComponent></FooterComponent>
</template>

<style scoped>

</style>
