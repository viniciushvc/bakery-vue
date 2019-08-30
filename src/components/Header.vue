<template>
  <header id="home">
    <div class="container">
      <div class="row">
        <img
          class="header-logo"
          src="../assets/images/logo.svg"
          alt="Bakery logo"
          v-scroll-to="'#home'"
        />

        <ul class="header-links">
          <li v-scroll-to="'#home'">Home</li>
          <li v-scroll-to="'#about'">Sobre</li>
          <li v-scroll-to="'#recipes'">Receitas</li>
          <li v-scroll-to="'#news'">Noticias</li>
          <li v-scroll-to="'#contacts'">Contato</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 1.5rem;
  display: flex;

  .header-logo {
    cursor: pointer;
    height: 100px;

    @media (max-width: 768px) {
      height: 50px;
    }
  }

  .header-links {
    margin-top: 2rem;
    align-self: center;
    margin-left: auto;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      cursor: pointer;
      display: inline-block;
      color: #333;
      text-transform: uppercase;
      font-size: 14px;
      margin-left: 3rem;
      text-decoration: none;
      font-weight: 700;

      &:hover {
        color: #a67b52;
      }
    }
  }
}
</style>
