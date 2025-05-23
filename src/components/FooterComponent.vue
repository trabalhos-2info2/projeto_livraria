<template>
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
</template>

<style setup>
footer {
  background-color: #27AE60;
  padding: 3vw 0 0 0;

}

footer .maior {
  display: flex;
  justify-content: space-between;
  margin: 0 10vw;
}

footer .ifbooks {
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

footer .contato {
  display: block;
  width: 100%;
  line-height: 1.5rem;
  margin: 0 0 4vw 0;

}

footer .contato li {
  width: 100%;
  color: white;
}

footer .pagamentos ul {
  display: flex;

}

footer .direitos {
  text-align: center;
  color: #FFFFFF;
  opacity: 60%;
  padding: 1vw;
  border-top: solid 1px #FFFFFF;
}
</style>