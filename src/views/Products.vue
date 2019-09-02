<template>
  <div class="container">
    <div id="recipes">
      <div class="recipe-list">
        <div
          class="recipe-item"
          v-for="(product, index) in products"
          :key="product.id"
          @mouseover="position = index"
          :class="{ selected: index === position }"
        >
          <img
            class="recipe-image"
            :key="product.id"
            :src="product.image_url"
            :alt="product.name"
          />

          <h1 class="recipes-title">{{ product.name }}</h1>
        </div>
      </div>
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
@import '../styles/variables';

@media #{$media-sm} {
  .container {
    padding: 0;
  }
}

#recipes {
  margin: -100px 0 5rem 0;

  @media #{$media-sm} {
    margin-top: 0;
    overflow-x: scroll;
  }

  .recipe-list {
    display: flex;

    .recipe-item {
      position: relative;
      color: #ddd;
      transition: 0.3s;

      &.selected {
        .recipe-image {
          filter: grayscale(0%);
        }
      }

      .recipe-image {
        width: 100%;

        @media #{$media-sm} {
          font-size: 14px;
          width: auto;
        }
        filter: grayscale(90%);
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
}
</style>
