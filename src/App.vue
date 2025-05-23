<script setup>
import { ref, computed } from 'vue';

import FooterComponent from './components/FooterComponent.vue'
import PrincipalComponent from './components/PrincipalComponent.vue'

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

    <header>
      <nav>
        <div class="logo">
          <h1 v-on:click="booleanoInicio = !booleanoInicio"> <a href="#principal">IFBooks</a></h1>
          <h2>Apreço a leitura</h2>
        </div>
        <div class="pesquisa">
          <form action="#" method="get">
            <input class="pesquisar" type="text" name="pesquisar" id="pesquisar" placeholder="Pesquisar">
            <button type="reset"><span class="fa-solid fa-magnifying-glass"></span></button>
          </form>
        </div>
        <ul class="menu">
          <li><a href="#">Termos</a></li>
          <li><a href="#">Equipe</a></li>
          <li><a href="#">Envio</a></li>
          <li><a href="#">Devoluções</a></li>
        </ul>
        <ul class="icones">
          <li>
            <button v-on:click="booleanoCarrinho = !booleanoCarrinho">
              <span class="fa-solid fa-cart-shopping"></span>
              <span v-if="contadorCarrinho > 0" class="contCarrinho">{{ contadorCarrinho }}</span>
            </button>
          </li>
          <li class="borda">
            <button v-on:click="booleanoFavoritos = !booleanoFavoritos">
              <span class="fa-solid fa-heart"></span>
              <span v-if="contadorCurtidos > 0" class="contCoracao">{{ contadorCurtidos }}</span>
            </button>
          </li>
          <li><button>
              <span class="fa-solid fa-user"></span>
            </button></li>
        </ul>
      </nav>
    </header>

    <main>

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

      <section class="carrinho" id="cart" v-else-if="booleanoCarrinho">
        <h2>Carrinho</h2>
        <div class="listaProdutosCarrinho">
          <ul class="subtitulos">
            <li>
              <p class="tituloProduto">Título</p>
            </li>
            <li>
              <p class="quantidadeProduto">Quantidade</p>
            </li>
            <li>
              <p class="subtotalProduto">Subtotal</p>
            </li>
          </ul>
          <ul class="produtosCar">
            <li v-for="item in carrinho" :key="item.produto.id">
              <div class="livro">
                <div>
                  <img :src="item.produto.capa" :alt="item.produto.titulo" />
                </div>
                <div class="info">
                  <h3>{{ item.produto.titulo }}</h3>
                  <p class="autor">{{ item.produto.autor }}</p>
                  <p class="preco">R${{ item.produto.preco }}</p>
                </div>
              </div>
              <div>
                <p class="quantidadeItens">
                  <button v-on:click="incrementar(item)">+</button>
                  {{ item.quantidade }}
                  <button v-on:click="decrementar(item)">-</button>
                </p>
              </div>
              <div>
                <p class="precoTotal">R${{ (item.produto.preco * item.quantidade).toFixed(2) }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="dividir">
          <div class="compra">
            <button v-on:click="booleanoCarrinho = !booleanoCarrinho">Voltar para loja</button>
            <form action="#" method="get">
              <input class="cupom" type="text" name="cupom" id="cupom" placeholder="Código do cupom">
              <input class="confirmarCupom" type="reset" value="Inserir Cupom">
            </form>
          </div>
          <div class="totalCompra">
            <h3>Total da Compra</h3>
            <ul>
              <li>Produtos:</li>
              <li>R${{ total.toFixed(2) }}</li>
            </ul>
            <ul>
              <li>Frete:</li>
              <li>Grátis</li>
            </ul>
            <ul class="totalValor">
              <li>Total:</li>
              <li>R${{ total.toFixed(2) }}</li>
            </ul>
            <button>Ir para o pagamento</button>
          </div>
        </div>
      </section>

      <section class="favoritos" v-else-if="booleanoFavoritos">
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
header nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 15px 0;
  border-bottom: solid 1px #27AE60;
  align-items: center;
  position: fixed;
  top: 0%;
  width: 100%;
  background-color: #FFFFFF;
}

header nav div.logo {
  display: flex;
  align-items: center;
  width: 10%;
  margin: 0 0 0 10vw;
}

header nav div.logo h1 {
  font-size: 1.2rem;
  font-weight: normal;
  padding: 0 5px 0 0;
  border-right: 2px solid #27AE60;
}

header nav div.logo h1 a {
  text-decoration: none;
  color: #231F2D;
}

header nav div.logo h2 {
  font-size: 0.8rem;
  color: #27AE60;
  font-weight: normal;
  padding: 0 0 0 5px;
  flex-wrap: wrap;
  width: 40%;
}

header nav div.pesquisa form {
  background-color: #F1F1F1;
  width: 30%;
  display: flex;
  justify-content: space-between;
}

header nav div.pesquisa form input.pesquisar {
  font-size: 1rem;
  text-align: left;
  padding: 10px 150px 10px 10px;
  border: none;
  background-color: #F1F1F1;
}

header nav div.pesquisa form input.pesquisar:hover {
  border: solid 1px black;
}

header nav div.pesquisa form button {
  color: #231F2D;
  border: none;
  padding: 10px;
}

header nav div.pesquisa form button:hover {
  font-weight: bold;
  color: #27AE60;
}

header nav ul.menu {
  display: flex;
  justify-content: space-between;
  width: 25%;
  margin: 0 2vw 0 2vw;
  list-style: none;
  align-items: center;
}

header nav ul.menu li a {
  color: #7B7881;
  text-decoration: none;
}

header nav ul.menu li a:hover {
  transform: scale(1.2);
  font-weight: bold;
  color: #27AE60;
}

header nav ul.icones {
  display: flex;
  justify-content: space-between;
  width: 10%;
  margin: 0 10vw 0 0;
}

header nav ul.icones li button {
  color: #27AE60;
  border: none;
  margin: 0 1vw 0 1vw;
  background-color: #FFFFFF;
  font-size: 1.1vw;
}

header nav ul.icones li {
  list-style: none;
  max-height: 1vw;
}

header nav ul.icones li:hover {
  transform: scale(1.1);
}

header nav ul.icones li.borda {
  border-left: solid 1px #27AE60;
  border-right: solid 1px #27AE60;
  padding: 0 10px;
}

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
.carrinho {
  margin: 2vw 5vw;
}

.carrinho h2 {
  color: #27AE60;
  font-size: 2.4rem;
  margin: 8vw 0 3vw 2vw;
}

.carrinho ul.subtitulos {
  display: flex;
  border-bottom: solid 2px #27AE60;
  list-style: none;
  margin: 0 0 0 2vw;

}

.carrinho ul.subtitulos li {
  font-size: 1.3rem;
  border: none;

}

.carrinho ul.subtitulos li p.tituloProduto {
  min-width: 48vw;
}

.carrinho ul.subtitulos li p.quantidadeProduto {
  min-width: 25vw;
}

.carrinho div ul.produtosCar {
  min-height: 20vw;
}

.carrinho div ul.produtosCar li {
  display: flex;
  padding: 1vw 0;
  border-bottom: solid 2px #9a999a;
}

.carrinho li p {
  font-size: 1.3rem;
}

.carrinho li .autor {
  font-size: 1.1rem;
}

.carrinho li .livro {
  display: flex;
  align-items: center;
}

.carrinho li .info {
  text-align: left;
  line-height: 0.8rem;
  flex-grow: 1;
  margin: 0 0 5vw 2vw;
  min-width: 39vw;

}

.carrinho li div img {
  width: 120px;
  border-radius: 3px;
  flex-shrink: 0;
}

.carrinho li p.preco {
  font-weight: bold;
  font-size: 1.3rem;
}

.carrinho li h3 {
  font-size: 1.5rem;
}

.carrinho p.quantidadeItens button {
  background-color: #FFFFFF;
  border: none;
  font-size: 1.5rem;
  margin: 0 0.4vw;
}

.carrinho p.quantidadeItens {
  border: solid 2px black;
  padding: 0.8vw 1vw;
  font-size: 1.5rem;
  margin: 4vw 17vw 0 0;
  border: solid 1px black;
}

.carrinho li p.precoTotal {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 5vw 0;
}

.carrinho div.dividir {
  display: flex;
  justify-content: space-between;
}

.carrinho div.compra {
  margin: 3vw 2vw;
  width: 50%;
}

.carrinho div.compra button {
  margin: 0 0 5vw 0;
  padding: 20px 60px;
  background-color: #FFFFFF;
  border: solid 1px #9a999a;
  font-size: 0.9rem;
  border-radius: 5px;
}

.carrinho div.compra button:hover {
  transform: scale(1.1);
}

.carrinho div.compra form input.cupom {
  border: black solid 1px;
  padding: 20px 60px;
  border-radius: 5px;
  font-size: 0.9rem;
  margin: 0 15px 0 0;
}

.carrinho div.compra form input.confirmarCupom {
  background-color: #27AE60;
  color: #FAFAFA;
  font-size: 0.9rem;
  padding: 20px 80px;
  border-radius: 5px;
  border: none;
}

.carrinho div.compra form input.confirmarCupom:hover {
  transform: scale(1.1);
}

.carrinho div.totalCompra {
  text-align: left;
  width: 30%;
  border: black solid 1px;
  padding: 0 50px;
  margin: 11vw 0;
}

.carrinho div.totalCompra h3 {
  font-size: 1.3rem;
  margin: 2vw;
}

.carrinho div.totalCompra ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  border-bottom: solid 1px #9a999a;
  margin: 0;
}

.carrinho div.totalCompra ul li {
  margin: 1vw 1vw 1vw 0;
}

.carrinho div.totalCompra ul.totalValor {
  border: none;
  margin: 0;
}

.carrinho div.totalCompra button {
  margin: 1vw 8vw 2vw 8vw;
  border: none;
  background-color: #27AE60;
  color: #FFFFFF;
  padding: 20px 30px;
  border-radius: 5px;
}

.carrinho div.totalCompra button:hover {
  transform: scale(1.1);
}

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
