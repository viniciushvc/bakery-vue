<template>
  <div class="container">
    <div id="about">
      <img class="about-image" src="../assets/images/about.png" alt="About" />

      <div class="about-content">
        <h1 class="about-title">Sobre a Bakery</h1>
        <p class="about-text">
          Ut vitae volutpat risus. Nam vitae congue odio, mattis dignissim
          neque. Nam eros sapien, semper in pellentesque ut, suscipit eu nunc.
          Donec malesuada egestas ligula, non malesuada sapien suscipit ut.
        </p>

        <p class="about-text">
          Praesent sed ipsum ullamcorper purus scelerisque laoreet. Nulla
          lobortis ex eu mi accumsan, non hendrerit ex rhoncus. Etiam auctor
          libero porttitor tellus imperdiet consequat. Nam porttitor diam in
          eleifend fringilla.
        </p>

        <btn class="link">Conheça mais</btn>
      </div>
    </div>
  </div>
</template>

<script>
import btn from '../components/Button'

export default {
  components: {
    btn,
  },
}
</script>

<style scoped lang="scss">
#about {
  display: flex;
  flex-basis: 200px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  .about-content {
    flex-basis: 65%;

    @media (max-width: 768px) {
      flex-basis: 100%;
    }

    .about-title {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 1.5rem;

      @media (max-width: 768px) {
        margin-top: 1.5rem;
      }
    }
    .about-text {
      font-size: 14px;
      margin-bottom: 1.5rem;
    }
  }
  .about-image {
    flex-basis: 35%;
    margin-right: 4rem;
    max-width: 100%;
    object-fit: cover;
    height: auto;

    @media (max-width: 768px) {
      flex-basis: 100%;
      flex-wrap: wrap;
      margin-right: 0;
    }
  }
}
</style>
