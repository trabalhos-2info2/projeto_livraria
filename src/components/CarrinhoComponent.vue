<script setup>
defineProps({
  cart: Array,
  total: Number
})
defineEmits(['increment-book', 'decrement-book', 'hide-cart'])
</script>

<template>
<section class="carrinho" id="cart">
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
            <li v-for="item in cart" :key="item.produto.id">
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
                  <button @click="$emit('increment-book', item)">+</button>
                  {{ item.quantidade }}
                  <button @click="$emit('decrement-book', item)">-</button>
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
            <button @click="$emit('hide-cart')">Voltar para loja</button>
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
</template>
<style scoped>
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

</style>