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
  <main>
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

</style>
