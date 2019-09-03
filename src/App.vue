<template>
  <div>
    <Header />
    <Banner />
    <Products />
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-8">
          <About />
        </div>
        <div class="col-sm-12 col-lg-4">
          <News />
        </div>
      </div>
    </div>
    <Partners />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Banner from './views/Banner'
import Products from './views/Products'
import About from './views/About'
import News from './views/News'
import Partners from './views/Partners'
import Contact from './views/Contact'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Banner,
    Products,
    About,
    News,
    Partners,
    Contact,
    Footer,
  },
}
</script>

<style lang="scss">
@import './styles/grid';

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  outline: 0;
}

body,
html {
  background-color: #fff;
  color: #515151;
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  width: 100%;
}
</style>
