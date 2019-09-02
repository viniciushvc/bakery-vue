<template>
  <div class="container">
    <div id="about">
      <div class="row">
        <div class="col-12 col-md-5">
          <img
            class="about-image"
            src="../assets/images/about.png"
            alt="About"
          />
        </div>
        <div class="col-12 col-md-7">
          <div class="about-content">
            <h1 class="about-title">Sobre a Bakery</h1>
            <p class="about-text">
              Ut vitae volutpat risus. Nam vitae congue odio, mattis dignissim
              neque. Nam eros sapien, semper in pellentesque ut, suscipit eu
              nunc. Donec malesuada egestas ligula, non malesuada sapien
              suscipit ut.
            </p>

            <p class="about-text">
              Praesent sed ipsum ullamcorper purus scelerisque laoreet. Nulla
              lobortis ex eu mi accumsan, non hendrerit ex rhoncus. Etiam auctor
              libero porttitor tellus imperdiet consequat. Nam porttitor diam in
              eleifend fringilla.
            </p>

            <btn class="link" title="Conheça mais">
              <div class="arrow-right"></div>
            </btn>
          </div>
        </div>
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
@import '../styles/variables';

#about {
  .about-content {
    .about-title {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 1.5rem;

      @media #{$media-sm-max} {
        margin-top: 1.5rem;
      }
    }
    .about-text {
      font-size: 14px;
      margin-bottom: 1.5rem;
    }
  }
  .about-image {
    object-fit: cover;
    width: 300px;
    height: 100%;
    padding-right: 4rem;

    @media #{$media-sm-max} {
      margin-right: 0;
      width: 100%;
      padding: 0;
    }
  }
}
</style>
