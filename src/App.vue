<script setup>
const produtos = [
  {
    id: 1,
    titulo: 'Chain of Iron: Volume 2',
    autor: 'Cassandra Clare' ,
    preco: 23.24,
    capa: 'public/src/chain_of_iron.png',
  },
  {
    id: 2,
    titulo: 'Chain of Thorns',
    autor: 'Cassandra Clare' ,
    preco: 23.24,
    capa: 'public/src/chain_of_thorns.png',
  },
  {
    id: 3,
    titulo: 'City of Fallen Angels',
    autor: 'Cassandra Clare' ,
    preco: 13.94,
    capa: 'public/src/city_of_fallen_angels.png',
  },
  {
    id: 4,
    titulo: 'Nona the Ninth',
    autor: 'Cassandra Clare' ,
    preco: 16.84,
    capa: 'public/src/nona_the_niinth.png',
  },
  {
    id: 5,
    titulo: 'Harlem Shuffle',
    autor: 'Colson Whitehead' ,
    preco: 26.92,
    capa: 'public/src/harlem_shuffle.png',
  },
  {
    id: 6,
    titulo: 'Two Old Women',
    autor: 'Velma Wallis' ,
    preco: 13.95,
    capa: 'public/src/two_old_women.png',
  },
  {
    id: 7,
    titulo: 'Carrie Soto Is Back',
    autor: 'Taylor Jenkins Reid' ,
    preco: 26.04,
    capa: 'public/src/carrie_soto_is_back.png',
  },
  {
    id: 8,
    titulo: 'Book Lovers',
    autor: 'Emily Henry' ,
    preco: 15.81,
    capa: 'public/src/book_lovers.png',
  },

]
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
                    <p>{{ produto.titulo }}</p>
                    <p>{{ produto.autor }}</p>
                    <p>R${{ produto.preco }}</p>
                  </li>
                </ul>
              </section>
        </main>
    </body>
</template>

<style scoped>

/*STYLE HEADER*/
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
/*FIM DO STYLE HEADER*/

/*STYLE DA SECTION PRINCIPAL*/
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
/*FIM DO STYLE DA SECTION PRINCIPAL*/

</style>
