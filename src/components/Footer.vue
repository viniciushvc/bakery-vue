<template>
  <div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img src="#" alt="logo" />

            <div class="icon twitter"></div>

            <div class="icon facebook"></div>
          </div>
          <div class="col-4">
            <div class="links">
              <a href="/">Home</a>
              <a href="#about">Sobre</a>
              <a href="#recipes">Receitas</a>
              <a href="#news">Noticias</a>
              <a href="#contact">Contato</a>
            </div>
          </div>
          <div class="col-4">
            <div class="contact">
              <strong>Contato</strong>
              <p>(99)9999-9999 | (99)9999-9999</p>
            </div>

            <div class="adress">
              <strong>Localização</strong>
              <p>Nam porttitor diam in eleifend fringilla, 3180</p>
            </div>
          </div>
        </div>
        <p>&copy; Bakery 2017. Todos direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
footer {
  background-color: #403225;
  color: #fff;
  padding: 2rem;

  .links {
    a {
      display: block;
      text-transform: uppercase;
      margin-bottom: 1rem;
      color: currentColor;
      font-size: 14px;
      text-decoration: none;
    }
  }
}
</style>
