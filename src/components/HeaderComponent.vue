<script setup>
defineEmits(['click-cart', 'click-heart'])

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
            <button  @click="$emit('click-cart')">
              <span class="fa-solid fa-cart-shopping"></span>
              <span v-if="contadorCarrinho > 0" class="contCarrinho">{{ contadorCarrinho }}</span>
            </button>
          </li>
          <li class="borda">
            <button @click="$emit('click-heart')">
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

</template>
<style scoped>
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
</style>