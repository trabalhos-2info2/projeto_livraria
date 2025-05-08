<script setup>
import { ref, computed } from 'vue';

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
const booleanoCarrinho = ref(true);
const booleanoInicio = ref(true);
const carrinho = ref([]);
const quantidade = ref(1);
const booleanoCoracao = ref();
const produtosCurtidos = ref(new Set());

const contadorCurtidos = computed(() => produtosCurtidos.value.size);

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
  if (produtosCurtidos.value.has(idProduto)) {
    produtosCurtidos.value.delete(idProduto);
  } else {
    produtosCurtidos.value.add(idProduto);
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

</script>

<template>

  <body>
    <header>
      <nav>
        <div class="logo">
          <h1 v-on:click="booleanoInicio = !booleanoInicio"> <a href="#principal">IFBooks</a></h1>
          <h2>Apreço a leitura</h2>
        </div>
        <div class="pesquisa">
          <p>Pesquisar</p>
          <p class="icone"><span class="fa-solid fa-magnifying-glass"></span></p>
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
            <button>
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
      <section id="principal" class="principal" v-if="booleanoCarrinho">
        <div class="dividir">
          <div class="texto">
            <p class="autor">Autor de Abril</p>
            <h2>Eric-Emanuel Schmitt</h2>
            <p class="texto">Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and
              in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into
              over 40 languages.</p>
            <button>Acessar página do livro</button>
          </div>
          <div class="imagem">
            <p class="img"><img src="/src/livro_principal.png" alt="Imagem livro Noc Ognia"></p>
            <p class="texto">*within the stock limit</p>
          </div>
        </div>

        <div class="lista">
          <ul>
            <li>
              <p><span class="fa-solid fa-truck"></span></p>
              <p>Frete grátis para SC</p>
            </li>
            <li class="borda">
              <p><span class="fa-solid fa-star"></span></p>
              <p>Livros recomendados</p>
            </li>
            <li>
              <p><span class="fa-solid fa-book-open"></span></p>
              <p class="underline">Mais vendidos</p>
            </li>
          </ul>
        </div>
      </section>

      <section class="lancamentos" v-if="booleanoCarrinho">
        <h2>Lançamentos</h2>
        <ul>
          <li v-for="produto in produtos" :key="produto.id">
            <img :src="produto.capa" :alt="produto.titulo" />
            <h3>{{ produto.titulo }}</h3>
            <p>{{ produto.autor }}</p>
            <div>
              <p class="preco">R${{ produto.preco }}</p>
              <button v-on:click="cliqueCurtir(produto.id)" class="botaoCoracao">
                <p v-if="!produtosCurtidos.has(produto.id)" class="coracaoVazio"><span class="fa-regular fa-heart"></span>
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
      <section class="carrinho" id="cart" v-else>
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

        <div class="sectionCompra">
          <button v-on:click="booleanoCarrinho = !booleanoCarrinho">Voltar para loja</button>
          <form action="#" method="get">
            <input class="cupom" type="text" name="cupom" id="cupom" placeholder="Código do cupom">
            <input class="confirmarCupom" type="reset" value="Inserir Cupom">
          </form>
        </div>
        <div class="totalCompra">
          <h3>Total da Compra</h3>
        </div>

      </section>
    </main>
    <footer v-if="booleanoCarrinho || !booleanoCarrinho">
      <div class="maior">
        <div>
          <p class="ifbooks">IFbooks</p>
          <ul>
            <li><a href="https://facebook.com.br"><span class="fa-brands fa-square-facebook"></span></a></li>
            <li><a href="https://instagram.com.br"><span class="fa-brands fa-square-instagram"></span></a></li>
            <li><a href="https://twitter.com.br"><span class="fa-brands fa-square-twitter"></span></a></li>
          </ul>
        </div>
        <div>
          <h3>Contato</h3>
          <ul class="contato">
            <li>
              <p><span class="fa-solid fa-phone"></span> +55 47 40045263</p>
            </li>
            <li>
              <p><span class="fa-solid fa-clock"></span> 8h às 23h - Seg a Sex</p>
            </li>
            <li>
              <p><span class="fa-solid fa-envelope"></span> contato@ifbooks.com</p>
            </li>
          </ul>
          <ul class="pagamentos">
            <li>
              <img src="\src\paypal-card-logo.png" alt="Paypal">
            </li>
            <li>
              <img src="\src\masterCard-logo.png" alt="MasterCard">
            </li>
            <li>
              <img src="\src\visa-card-logo.png" alt="Visa">
            </li>
          </ul>
        </div>
      </div>
      <p class="direitos">© Alguns direitos reservados. IFbooks 2025. </p>
    </footer>
  </body>
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

header nav div.pesquisa {
  padding: 0 10px 0 0;
  background-color: #F1F1F1;
  width: 30%;
  display: flex;
  justify-content: space-between;
}

header nav div.pesquisa p {
  font-size: 1rem;
  color: #B8B8B8;
  text-align: left;
  padding: 0 0 0 10px;
}

header nav div.pesquisa p.icone {
  color: #231F2D;
}

header nav ul.menu {
  display: flex;
  justify-content: space-between;
  width: 25%;
  margin: 0 2vw 0 2vw;
  list-style: none;
}

header nav ul.menu li a {
  color: #7B7881;
  text-decoration: none;
}

header nav ul.icones {
  display: flex;
  justify-content: space-between;
  width: 10%;
  margin: 1vw 10vw 0 0;
}

header nav ul.icones li button {
  color: #27AE60;
  border: none;
  margin: 0 1vw 0 0.5vw;
  background-color: #FFFFFF;
}

header nav ul.icones li {
  list-style: none;
  
}

header nav ul.icones li.borda {
  border-left: solid 1px #27AE60;
  border-right: solid 1px #27AE60;
  padding: 0 25px;
}

/*LANÇAMENTOS*/
.lancamentos {
  margin: 2vw 10vw;
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
  bottom: 25px;
  left: 10px;
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
  bottom: 25px;
  left: 10px;
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

/*PRINCIPAL*/
section.principal {
  border-bottom: solid 1px #27AE60;
}

section.principal div.dividir {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3vw 12vw;
}

section.principal div.texto {
  width: 50%;
}

section.principal div.dividir div.texto p.autor {
  border: solid 1px #27AE60;
  color: #27AE60;
  padding: 8px;
  width: 14%;
}

section.principal div.dividir div.texto h2 {
  font-size: 3.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

section.principal div.dividir div.texto p.texto {
  font-size: 1.3rem;
  color: #4D4C4C;
  width: 74%;
  margin: 0 0 3vw 0;
}

section.principal div.dividir div.texto button {
  color: white;
  background-color: #27AE60;
  padding: 1vw 2vw;
  font-size: 1rem;
  border: none;
}

section.principal div.dividir div.imagem p.texto {
  text-align: right;
  color: #313131;
}

section.principal div.lista {
  border-top: solid 1px #27AE60;
}

section.principal div.lista ul {
  display: flex;
  justify-content: space-between;
  margin: 3vw 8vw;
  list-style: none;
}

section.principal div.lista ul li {
  font-size: 1.7rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: space-between;
}

section.principal div.lista ul li.borda {
  border-left: solid 1px #937DC2;
  border-right: solid 1px #937DC2;
  padding: 0 8vw;
}

section.principal div.lista ul li p.underline {
  text-decoration: underline;
}

section.principal div.lista ul li p {
  padding: 0 10px;
}

/*CARRINHO*/
.carrinho {
  margin: 2vw 5vw;
}

.carrinho h2 {
  color: #27AE60;
  font-size: 2.2rem;
  margin: 10vw 0 3vw 2vw;
}

.carrinho ul.subtitulos {
  display: flex;
  border-bottom: solid 2px #27AE60;
  list-style: none;

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

/*TOTAL COMPRA*/
.carrinho div.sectionCompra {
  margin: 3vw 2vw;
}

.carrinho div.sectionCompra button {
  margin: 0 0 5vw 0;
  padding: 20px 30px;
  background-color: #FFFFFF;
  border: solid 1px #9a999a;
  font-size: 0.9rem;
  border-radius: 5px;
}

.carrinho div.sectionCompra form input.cupom {
  border: black solid 1px;
  padding: 20px 30px;
  border-radius: 5px;
  font-size: 0.9rem;
  margin: 0 10px 0 0;
}

.carrinho div.sectionCompra form input.confirmarCupom {
  background-color: #27AE60;
  color: #FAFAFA;
  font-size: 0.9rem;
  padding: 20px 30px;
  border-radius: 5px;
  border: none;
}

/*FOOTER*/
footer {
  background-color: #27AE60;
  padding: 3vw 0 0 0;

}

.maior {
  display: flex;
  justify-content: space-between;
  margin: 0 10vw;
}

.ifbooks {
  color: white;
  margin: 0 3vw;

}

footer div ul {
  display: flex;
  list-style: none;
  width: 5%;
  justify-content: space-between;
}

footer div ul li a {
  color: white;
  font-size: 2vw;
  margin: 0.5vw;
}

footer h3 {
  font-size: 1rem;
  color: white;
  margin: 0 2vw;

}

.contato {
  display: block;
  width: 100%;
  line-height: 1.5rem;
  margin: 0 0 4vw 0;

}

.contato li {
  width: 100%;
  color: white;
}

.pagamentos ul {
  display: flex;

}

.direitos {
  text-align: center;
  color: #FFFFFF;
  opacity: 60%;
  padding: 1vw;
  border-top: solid 1px #FFFFFF;
}
</style>
