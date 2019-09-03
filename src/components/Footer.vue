<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="footer-social">
            <img
              class="social-logo"
              src="../assets/images/logo.svg"
              alt="logo"
              v-scroll-to="'#home'"
            />

            <div class="social-icons">
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
          </div>
        </div>

        <div class="col-lg-4 border-left d-only">
          <ul class="footer-links">
            <li class="links-item" v-scroll-to="'#home'">
              Home
            </li>
            <li class="links-item" v-scroll-to="'#about'">
              Sobre
            </li>
            <li class="links-item" v-scroll-to="'#recipes'">
              Receitas
            </li>
            <li class="links-item" v-scroll-to="'#news'">
              Noticias
            </li>
            <li class="links-item" v-scroll-to="'#contact'">
              Contato
            </li>
          </ul>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 footer-contact border-left">
          <div class="contact-item">
            <MapIcon color="#675749" size="17" />
            <strong class="contact-title">Contato</strong>
            <p class="contact-text">(99)9999-9999 | (99)9999-9999</p>
          </div>

          <div class="contact-item">
            <PhoneIcon color="#675749" size="15" />
            <strong class="contact-title">Localização</strong>
            <p class="contact-text">
              Nam porttitor diam in eleifend fringilla, 3180
            </p>
          </div>
        </div>
      </div>
      <p class="copyright">
        &copy; Bakery 2017. Todos direitos reservados.

        <a
          class="copyright-link"
          href="https://github.com/viniciushvc"
          target="_blank"
        >
          <img src="../assets/images/ow.png" alt="Vinicius Vicentini" />
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
import TwitterIcon from '../components/icons/Twitter'
import FacebookIcon from '../components/icons/Facebook'
import MapIcon from '../components/icons/Map'
import PhoneIcon from '../components/icons/Phone'

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    MapIcon,
    PhoneIcon,
  },
}
</script>

<style scoped lang="scss">
@import '../styles/variables';

footer {
  background-color: #403225;
  color: #fff;
  padding: 30px;

  .footer-social {
    display: block;

    .social-logo {
      width: 100%;
      height: 100px;
      cursor: pointer;
      margin-bottom: 20px;
    }

    .social-icons {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;

      a:nth-child(1) {
        margin-right: 30px;
      }
    }
  }
  @media #{$media-lg-max} {
    .d-only {
      display: none;
    }
  }

  .footer-links {
    text-align: center;

    .links-item {
      cursor: pointer;
      display: block;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: currentColor;
      font-size: 14px;
      text-decoration: none;

      &:hover {
        color: #a67b52;
      }
    }
  }

  .footer-contact {
    font-size: 13px;

    @media #{$media-sm-max} {
      text-align: center;
    }

    .contact-item {
      @media #{$media-md-max} {
        text-align: center;
      }

      @media #{$media-sm-min} {
        margin-left: 30px;
      }

      // icon
      span {
        margin-right: 10px;
        position: relative;
        top: 5px;
      }

      .contact-title {
        text-transform: uppercase;
      }

      .contact-text {
        margin-top: 7px;
        margin-bottom: 50px;
        margin-left: 25px;
      }
    }
  }

  .copyright {
    font-size: 12px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    @media #{$media-sm-max} {
      display: block;
      margin-top: 0;
      text-align: center;
      flex-wrap: wrap;

      .copyright-link {
        margin-top: 30px;
        display: block;
        width: 100%;
      }
    }
  }

  @media #{$media-md-min} {
    .border-left {
      border-left: 1px solid #867f79;
    }
  }
}
</style>
