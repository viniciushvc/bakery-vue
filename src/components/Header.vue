<template>
  <header>
    <div class="container">
      <div class="header-menu">
        <img
          class="header-logo"
          src="../assets/images/logo.svg"
          alt="Bakery logo"
          v-scroll-to="{ el: '#home', onStart: hideMenu }"
        />

        <div class="mobile-toggle" @click="toggleMenu">
          <div class="mobile-toggle" :class="{ open: mobileMenu }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="header-sidebar" :class="{ open: mobileMenu }">
          <ul class="sidebar-items">
            <li
              class="sidebar-link"
              v-scroll-to="{ el: '#home', onStart: hideMenu }"
            >
              Home
            </li>
            <li
              class="sidebar-link"
              v-scroll-to="{ el: '#about', onStart: hideMenu }"
            >
              Sobre
            </li>
            <li
              class="sidebar-link"
              v-scroll-to="{ el: '#recipes', onStart: hideMenu }"
            >
              Receitas
            </li>
            <li
              class="sidebar-link"
              v-scroll-to="{ el: '#news', onStart: hideMenu }"
            >
              Notícias
            </li>
            <li
              class="sidebar-link"
              v-scroll-to="{ el: '#contacts', onStart: hideMenu }"
            >
              Contato
            </li>
            <li class="sidebar-link links-icon">
              <SearchIcon color="#333" size="20" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchIcon from '../components/icons/Search'

export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      mobileMenu: false,
    }
  },
  methods: {
    toggleMenu: function() {
      this.mobileMenu = !this.mobileMenu
    },
    hideMenu: function() {
      this.mobileMenu = false
    },
  },
}
</script>

<style scoped lang="scss">
@import '../styles/variables';

header {
  padding: 1.5rem;
  background-color: #fff;

  @media #{$media-sm-max} {
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .header-menu {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .header-logo {
      cursor: pointer;
      height: 100px;

      @media #{$media-sm-max} {
        height: 50px;
      }
    }

    .mobile-toggle {
      display: none;

      @media #{$media-sm-max} {
        display: block;
      }
    }

    .sidebar-items {
      margin-top: 30px;
      align-self: center;
      margin-left: auto;

      @media #{$media-sm-max} {
        margin-top: 0;
      }

      .sidebar-link {
        cursor: pointer;
        display: inline-block;
        color: #333;
        text-transform: uppercase;
        font-size: 14px;
        padding: 5px 30px;
        text-decoration: none;
        font-weight: 700;

        &:hover {
          color: #a67b52;
        }

        @media #{$media-md-max} {
          font-size: 13px;
          padding: 5px 10px;
        }

        @media #{$media-sm-max} {
          margin-left: -200px;
          padding: 16px;
          text-decoration: none;
          font-size: 25px;
          display: block;
          transition: 0.3s;
        }
      }

      .links-icon {
        border-left: 1px solid #a8a8a8;
        position: relative;

        // icon
        span {
          top: 2px;
        }
      }

      @media #{$media-sm-max} {
        .links-icon {
          display: none;
        }
      }
    }
  }

  .mobile-toggle {
    width: 30px;
    height: 25px;
    position: relative;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background-color: #403225;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transition: 0.25s ease-in-out;
      &:nth-child(1) {
        top: 0px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        top: 10px;
      }
      &:nth-child(4) {
        top: 20px;
      }
    }
    &.open span {
      &:nth-child(1) {
        top: 10px;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 10px;
        width: 0%;
        left: 50%;
      }
    }
  }

  .header-sidebar {
    @media #{$media-sm-max} {
      margin-top: 82px;
      height: 100%;
      width: 0;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
      transition: 0.5s;
      padding-top: 40px;

      &.open {
        width: 90vw;

        .sidebar-link {
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
