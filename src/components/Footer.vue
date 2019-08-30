<template>
  <div>
    <footer>
      <div class="container">
        <div class="row center">
          <div class="col-12 col-md-4">
            <div class="footer-social">
              <div class="row">
                <div class="col-12">
                  <img
                    class="footer-logo"
                    src="../assets/images/logo.svg"
                    alt="logo"
                    v-scroll-to="'#home'"
                  />
                </div>
              </div>

              <TwitterIcon
                color="#a67b52"
                size="30"
                href="https://twitter.com/owinteractive"
              />

              <FacebookIcon
                color="#a67b52"
                size="30"
                href="https://pt-br.facebook.com/owinteractive"
              />
            </div>

            <div class="icon facebook"></div>
          </div>
          <div class="col-4 align-self-center d-none d-md-block">
            <div class="footer-links">
              <a href="/">Home</a>
              <a href="#about">Sobre</a>
              <a href="#recipes">Receitas</a>
              <a href="#news">Noticias</a>
              <a href="#contact">Contato</a>
            </div>
          </div>
          <div class="col-12 col-md-4 footer-contact left align-self-center">
            <div>
              <strong>Contato</strong>
              <p>(99)9999-9999 | (99)9999-9999</p>
            </div>

            <div>
              <strong>Localização</strong>
              <p>Nam porttitor diam in eleifend fringilla, 3180</p>
            </div>
          </div>
        </div>
        <p class="copyright">&copy; Bakery 2017. Todos direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import TwitterIcon from '../components/icons/Twitter'
import FacebookIcon from '../components/icons/Facebook'

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/align.scss';

footer {
  background-color: #403225;
  color: #fff;
  padding: 2rem;

  .footer-social {
    .footer-logo {
      height: 100px;
      cursor: pointer;

      margin: 2rem;
    }

    a {
      margin-right: 2rem;
    }
  }

  .footer-links {
    a {
      display: block;
      text-transform: uppercase;
      margin-bottom: 1rem;
      color: currentColor;
      font-size: 14px;
      text-decoration: none;
    }
  }

  .footer-contact {
    strong {
      margin-bottom: 0.5rem;
    }
    p {
      margin-bottom: 3rem;
    }
  }

  .copyright {
    margin-top: 4rem;
  }
}
</style>
