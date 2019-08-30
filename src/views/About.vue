<template>
  <div class="container">
    <div class="about">
      <img src alt />

      <h1>Sobre a Bakery</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sunt, beatae obcaecati animi totam, explicabo, eveniet consequatur quasi molestias perspiciatis voluptates inventore.</p>

      <p>Tempore nostrum perspiciatis, odit accusantium voluptate ea minima!</p>

      <btn class="brown">Conheça mais</btn>
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
.about {
  h1 {
    text-transform: uppercase;
    font-weight: 700;
  }
  p {
    margin-top: 1rem;
  }
  button {
    margin: 1rem 0;
    padding: 1rem;
  }
}
</style>
