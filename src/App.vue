<script setup>
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
</script>

<template>
    <body>
         <header>
              <div class="logo">
                  <h1>IFBooks</h1>
                  <h2>Apreço a leitura</h2>
              </div>
              <div class="pesquisa">
                  <p>Pesquisar</p>
                  <p class="icone"><span class="fa-solid fa-magnifying-glass"></span></p>
              </div>
                <ul class="menu">
                    <li>Termos</li>
                    <li>Equipe</li>
                    <li>Envio</li>
                    <li>Devoluções</li>
                </ul>
                <ul>
                  <li><span class="fa-solid fa-cart-shopping"></span></li>
                  <li class="borda"><span class="fa-solid fa-heart"></span></li>
                  <li><span class="fa-solid fa-user"></span></li>
                </ul>
            </header>
        
            <main>

              <section class="principal">
                <div class="texto">
                  <p class="autor">Autor de Abril</p>
                  <h2>Eric-Emanuel Schmitt</h2>
                  <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
                  <p>Acessar página do livro</p>
                </div>
                <div>
                  <p><img src="/src/livro_principal.png" alt="Imagem livro Noc Ognia"></p>
                  <p>*within the stock limit</p>
                </div>
              </section>
        
      <section class="lancamentos">
        <h2>Lançamentos</h2>
        <ul>
          <li v-for="produto in produtos" :key="produto.id">
            <img :src="produto.capa" :alt="produto.titulo" />
            <h3>{{ produto.titulo }}</h3>
            <p>{{ produto.autor }}</p>
            <div>
              <p class="preco">R${{ produto.preco }}</p>
              <p class="coracao"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" />
                </svg></p>
            </div>
            <button><span class="fa-solid fa-cart-shopping"></span> Comprar</button>
          </li>
        </ul>
      </section>
    </main>
    </body>
</template>

<style scoped>
/*HEADER*/
    header {
      display: flex;
      justify-content: space-between;
      padding: 0 0 15px 0;
      border-bottom: solid 1px #27AE60;
      align-items: center;
    }
    header div.logo {
      display: flex;
      align-items: center;
      width: 9%;
      margin: 0 0 0 10vw;
    }
    header div.logo h1 {
      font-size: 1.2rem;
      font-weight: normal;
      color: #231F2D;
      padding: 0 5px 0 0;
      border-right: 2px solid #27AE60;
    }
    header div.logo h2 {
      font-size: 0.8rem;
      color: #27AE60;
      font-weight: normal;
      padding: 0 0 0 5px;
      flex-wrap: wrap;
    }
    header div.pesquisa {
      padding: 0 10px 0 0;
      background-color: #F1F1F1;
      width: 30%;
      display: flex;
      justify-content: space-between;
    }
    header div.pesquisa p {
      font-size: 1rem;
      color: #B8B8B8;
      text-align: left;
      padding: 0 0 0 10px;
    }
    header div.pesquisa p.icone {
      color: #231F2D;
    }
    header ul.menu {
      display: flex;
      justify-content: space-between;
      width: 25%;
      margin: 0 2vw 0 2vw;
    }
    header ul.menu li {
      color: #7B7881;
      list-style: none;
    }
    header ul {
      display: flex;
      justify-content: space-between;
      width: 10%;
      margin: 0 10vw 0 0;
    }
    header ul li {
      color: #27AE60;
      list-style: none;
    }
    header ul li.borda {
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
  margin: 0 3vw;
}

.lancamentos ul {
  flex-wrap: wrap;
  display: flex;
}

.lancamentos li {
  width: 20%;
  margin: 3vw 1vw;
  list-style: none;
  line-height: 0.7rem;
}

.lancamentos li img {
  width: 100%;
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

}

.lancamentos .coracao {
  color: #27AE60;
}

.lancamentos button {
  background-color: #27AE60;
  color: white;
  border: none;
  width: 100%;
  height: 8%;
  font-size: 1rem;
  text-align: center;
  border-radius: 1px;

}

/*PRINCIPAL*/
    section.principal {
      display: flex;
      justify-content: space-between;
      border-bottom: solid 1px #27AE60;
      align-items: center;
    }
    section.principal div.texto {
      width: 50%;
      margin: 0 0 0 10vw;
    }
    section.principal div.texto p.autor {
      border: solid 1px #27AE60;
      color: #27AE60;
      padding: 8px;
      width: 11%;
    }

</style>
