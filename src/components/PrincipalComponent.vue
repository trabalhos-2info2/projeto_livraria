<template>
<section id="principal" class="principal" v-if="!booleanoCarrinho && !booleanoFavoritos">
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
</template>
<style scoped>
.principal {
  border-bottom: solid 1px #27AE60;
}

.principal div.dividir {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3vw 12vw;
}

.principal div.texto {
  width: 50%;
}

.principal div.dividir div.texto p.autor {
  border: solid 1px #27AE60;
  color: #27AE60;
  padding: 11px;
  width: 15%;
}

.principal div.dividir div.texto h2 {
  font-size: 3.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.principal div.dividir div.texto p.texto {
  font-size: 1.3rem;
  color: #4D4C4C;
  width: 74%;
  margin: 0 0 3vw 0;
  line-height: 1.7rem;
}

.principal div.dividir div.texto button {
  color: white;
  background-color: #27AE60;
  padding: 1vw 2vw;
  font-size: 1rem;
  border: none;
}

.principal div.dividir div.texto button:hover {
  transform: scale(1.1);

}

.principal div.dividir div.imagem p.texto {
  text-align: right;
  color: #313131;
}

.principal div.lista {
  border-top: solid 1px #27AE60;
}

.principal div.lista ul {
  display: flex;
  justify-content: space-between;
  margin: 3vw 8vw;
  list-style: none;
}

.principal div.lista ul li {
  font-size: 1.7rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: space-between;
}

.principal div.lista ul li:hover {
  color: #27AE60;
}

.principal div.lista ul li.borda {
  border-left: solid 1px #937DC2;
  border-right: solid 1px #937DC2;
  padding: 0 8vw;
}

.principal div.lista ul li p.underline {
  text-decoration: underline;
}

.principal div.lista ul li p {
  padding: 0 10px;
}


</style>