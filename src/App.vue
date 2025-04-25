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
                    <li><a href="#">Termos</a></li>
                    <li><a href="#">Equipe</a></li>
                    <li><a href="#">Envio</a></li>
                    <li><a href="#">Devoluções</a></li>
                </ul>
                <ul>
                  <li><span class="fa-solid fa-cart-shopping"></span></li>
                  <li class="borda"><span class="fa-solid fa-heart"></span></li>
                  <li><span class="fa-solid fa-user"></span></li>
                </ul>
            </header>
        
            <main>

              <section class="principal">
                <div class="dividir">
                    <div class="texto">
                      <p class="autor">Autor de Abril</p>
                      <h2>Eric-Emanuel Schmitt</h2>
                      <p class="texto">Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
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
      <section class="lancamentos">
        <h2>Lançamentos</h2>
        <ul>
          <li v-for="produto in produtos" :key="produto.id">
            <img :src="produto.capa" :alt="produto.titulo" />
            <h3>{{ produto.titulo }}</h3>
            <p>{{ produto.autor }}</p>
            <div>
              <p class="preco">R${{ produto.preco }}</p>
              <p class="coracao"><i class="fa-regular fa-heart"></i></p>
            </div>
            <button><span class="fa-solid fa-cart-shopping"></span> Comprar</button>
          </li>
        </ul>
      </section>
    </main>
    <footer>
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
          <li><p><span class="fa-solid fa-phone"></span> +55 47 40045263</p></li>
          <li><p><span class="fa-solid fa-clock"></span> 8h às 23h - Seg a Sex</p></li>
          <li><p><span class="fa-solid fa-envelope"></span> contato@ifbooks.com</p></li>
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
    header ul.menu li a:hover {
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

.lancamentos .coracao {
  color: #27AE60;
  font-size: 1.2rem;
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
      border-bottom: solid 1px #27AE60;
    }
    section.principal div.dividir {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 12vw;
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
      margin: 3vw 8vw ;
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
  margin: 0 0 4vw 0 ;
  
}

.contato li  {
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
  border-top: solid 1px #FFFFFF ;
}

</style>
