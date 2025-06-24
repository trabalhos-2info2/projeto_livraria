import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const showCart = ref(false);

})

const carrinho = ref([]);


function adicionar(produto) {
  const posicaoProduto = carrinho.value.findIndex(item => item.produto.id === produto.id);
  if (posicaoProduto !== -1) {
    carrinho.value[posicaoProduto].quantidade += quantidade.value;
  } else {
    carrinho.value.push({ produto, quantidade: quantidade.value });
  }
  quantidade.value = 1;
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

return {
    showCart,
    carrinho,
    incrementar,
    decrementar,
    adicionar,
  };