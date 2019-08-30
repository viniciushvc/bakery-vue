<template>
  <div class="container">
    <div id="recipes">
      <a
        href="#"
        class="recipes-item"
        v-for="(product, index) in products"
        :key="product.id"
        @mouseover="position = index"
      >
        <img
          :key="product.id"
          :src="product.image_url"
          :alt="product.name"
          :class="{ selected: index === position }"
        />

        <h1 class="recipes-title">{{ product.name }}</h1>
      </a>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'
import { clearInterval } from 'timers'

export default {
  data() {
    return {
      products: null,
      position: 0,
    }
  },
  async mounted() {
    await api.get('dbycd').then(res => (this.products = res.data))

    clearInterval(carousel)

    const carousel = window.setInterval(() => {
      if (this.position < this.products.length - 1) {
        this.position++
      } else {
        this.position = 0
      }
    }, 4000)
  },
}
</script>

<style scoped lang="scss">
#recipes {
  display: flex;
  margin: -100px 0 5rem 0;

  @media (max-width: 768px) {
    margin-top: 0;
    overflow-x: scroll;
  }

  .recipes-item {
    position: relative;
    color: #ddd;
    transition: 0.3s;

    img {
      width: 100%;

      @media (max-width: 768px) {
        font-size: 14px;
        height: 200px;
        width: auto;
      }
      filter: grayscale(90%);

      &.selected {
        filter: grayscale(0%);
      }
    }

    .recipes-title {
      font-size: 20px;
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
      text-align: center;
      text-transform: uppercase;
      text-shadow: 1px 1px 7px rgba(0, 0, 0, 0.56);
    }

    &:hover {
      color: #fff;
    }
  }
}
</style>
