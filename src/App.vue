<script setup>
import { ref, computed } from 'vue';

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import PrincipalComponent from './components/PrincipalComponent.vue'
import CarrinhoComponent from './components/CarrinhoComponent.vue'


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

      <section class="lancamentos" v-if="!booleanoCarrinho && !booleanoFavoritos">
        <h2>Lançamentos</h2>
        <ul>
          <li v-for="produto in produtos" :key="produto.id">
            <img :src="produto.capa" :alt="produto.titulo" />
            <h3>{{ produto.titulo }}</h3>
            <p>{{ produto.autor }}</p>
            <div>
              <p class="preco">R${{ produto.preco }}</p>
              <button v-on:click="cliqueCurtir(produto.id)" class="botaoCoracao">
                <p v-if="!curtidos.includes(produto.id)" class="coracaoVazio"><span class="fa-regular fa-heart"></span>
                </p>
                <p v-else class="coracaoClique"><span class="fa-solid fa-heart"></span></p>
              </button>
            </div>
            <button v-on:click="adicionar(produto)" class="comprar">
              <span class="fa-solid fa-cart-shopping"></span> Comprar
            </button>
          </li>
        </ul>
      </section>
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
      <section class="favoritos">
        <h2>Favoritos</h2>
        <ul>
          <li v-for="item in favoritos" :key="item.id">
            <img :src="item.capa" :alt="item.titulo" />
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.autor }}</p>
            <div>
              <p class="preco">R${{ item.preco }}</p>
              <button v-on:click="cliqueCurtir(item.id)" class="botaoCoracao">
                <p v-if="!curtidos.includes(item.id)" class="coracaoVazio"><span class="fa-regular fa-heart"></span>
                </p>
                <p v-else class="coracaoClique"><span class="fa-solid fa-heart"></span></p>
              </button>
            </div>
            <button v-on:click="adicionar(item)" class="comprar">
              <span class="fa-solid fa-cart-shopping"></span> Comprar
            </button>
          </li>
        </ul>
      </section>
      </main>
    
    <FooterComponent></FooterComponent>
</template>

<style scoped>
/*HEADER*/

/*PRINCIPAL*/

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

/*CARRINHO*/

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
