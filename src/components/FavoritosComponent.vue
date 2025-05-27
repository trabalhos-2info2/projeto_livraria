<script setup>
defineProps(['curtidos', 'favoritos']);
const emit = defineEmits(['adicionar-carrinho', 'clique-curtir']);
</script>

<template>
    <section class="favoritos">
        <h2>Favoritos</h2>
        <ul>
          <li v-for="item in favoritos" :key="item.id">
            <img :src="item.capa" :alt="item.titulo" />
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.autor }}</p>
            <div>
              <p class="preco">R${{ item.preco }}</p>
              <button @click="emit('clique-curtir', item.id)" class="botaoCoracao">
                <p v-if="!curtidos.includes(item.id)" class="coracaoVazio"><span class="fa-regular fa-heart"></span>
                </p>
                <p v-else class="coracaoClique"><span class="fa-solid fa-heart"></span></p>
              </button>
            </div>
            <button @click="emit('adicionar-carrinho', item)" class="comprar">
              <span class="fa-solid fa-cart-shopping"></span> Comprar
            </button>
          </li>
        </ul>
      </section>
</template>

<style scoped>
    /*FAVORITOS*/
.favoritos {
  margin: 2vw 10vw;
  min-height: 30vw;
}

.favoritos h2 {
  color: #27AE60;
  font-weight: bold;
  font-size: 2.5rem;
  margin: 5vw 4vw 1vw 3vw;
  padding: 3vw 0;
  border-bottom: solid 1px #27AE60;
}

.favoritos ul {
  flex-wrap: wrap;
  display: flex;
  width: 100%;
}

.favoritos li {
  width: 20%;
  margin: 2vw 1vw 4vw 1vw;
  list-style: none;
  line-height: 0.7rem;
}

.favoritos li img {
  width: 100%;
  border-radius: 3px;
}

.favoritos li h3 {
  font-size: 1.1rem;
  line-height: 1rem;
}

.favoritos li div {
  height: 12%;
  justify-content: space-between;
  display: flex;
}

.favoritos li p {
  color: #4F4C57;
}

.favoritos .preco {
  font-weight: bold;
  color: black;
  font-size: 1.1rem;
}

.favoritos .botaoCoracao {
  border: none;
  background-color: #FFFFFF;
}

.favoritos .coracaoVazio {
  color: #27AE60;
  font-size: 1.2rem;

}

.favoritos .coracaoVazio:hover {
  transform: scale(1.15);
}

.favoritos .coracaoClique {
  color: #27AE60;
  font-size: 1.2rem;
}

.favoritos .coracaoClique:hover {
  transform: scale(1.15);
}

.favoritos button.comprar {
  background-color: #27AE60;
  color: white;
  border: none;
  width: 100%;
  height: 8%;
  font-size: 1rem;
  text-align: center;
  border-radius: 1px;

}

.favoritos button.comprar:hover {
  transform: scale(1.05);
}
</style>