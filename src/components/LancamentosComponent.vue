<script setup>
const props = defineProps(['produtos', 'curtidos']);
const emit = defineEmits(['adicionar-carrinho', 'clique-curtir']);

import { useRouter } from 'vue-router';
const router = useRouter();

function openBook(id) {
  router.push({ name: 'Book', params: { id } });
}
</script>

<template>
    <section class="lancamentos">
        <h2>Lançamentos</h2>
        <ul>
          <li v-for="produto in produtos" :key="produto.id">
            <img :src="produto.capa" :alt="produto.titulo" @click="openBook(produto.id)" />
            <h3>{{ produto.titulo }}</h3>
            <p>{{ produto.autor }}</p>
            <div>
              <p class="preco">R${{ produto.preco }}</p>
              <button @click="emit('clique-curtir', produto.id)" class="botaoCoracao">
                <p v-if="!props.curtidos.includes(produto.id)" class="coracaoVazio"><span class="fa-regular fa-heart"></span>
                </p>
                <p v-else class="coracaoClique"><span class="fa-solid fa-heart"></span></p>
              </button>
            </div>
            <button @click="emit('adicionar-carrinho', produto)" class="comprar">
              <span class="fa-solid fa-cart-shopping"></span> Comprar
            </button>
          </li>
        </ul>
      </section>
</template>

<style scoped>
/*LANÇAMENTOS*/
.lancamentos {
  margin: 2vw 8vw 2vw 12vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.lancamentos h2 {
  font-weight: bold;
  font-size: 2vw;
  margin: 5vw 3vw 0 3vw;
}

.lancamentos ul {
  flex-wrap: wrap;
  display: flex;
}

.lancamentos li {
  width: 20%;
  margin: 2vw 1vw 4vw 1vw;
  list-style: none;
  line-height: 0.7rem;
}

.lancamentos li img {
  width: 100%;
  border-radius: 3px;
}

.lancamentos li h3 {
  font-size: 1.1rem;
  line-height: 1rem;
}

.lancamentos li div {
  height: 12%;
  justify-content: space-between;
  display: flex;
}

.lancamentos li p {
  color: #4F4C57;
}

.lancamentos .preco {
  font-weight: bold;
  color: black;
  font-size: 1.1rem;

}

.lancamentos .botaoCoracao {
  border: none;
  background-color: #FFFFFF;
}

.contCoracao {
  background-color: #27AE60;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0 4px;
  position: relative;
  bottom: 1.9vw;
  left: 0.7vw;
  text-align: center;

}

.contCarrinho {
  background-color: #27AE60;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0 4px;
  position: relative;
  bottom: 1.9vw;
  left: 0.7vw;
  text-align: center;
}

.lancamentos .coracaoVazio {
  color: #27AE60;
  font-size: 1.2rem;
}

.lancamentos .coracaoVazio:hover {
  transform: scale(1.15);
}

.lancamentos .coracaoClique {
  color: #27AE60;
  font-size: 1.2rem;
}

.lancamentos .coracaoClique:hover {
  transform: scale(1.15);
}

.lancamentos button.comprar {
  background-color: #27AE60;
  color: white;
  border: none;
  width: 100%;
  height: 8%;
  font-size: 1rem;
  text-align: center;
  border-radius: 1px;

}

.lancamentos button.comprar:hover {
  transform: scale(1.05);
}
</style>