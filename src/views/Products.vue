<template>
  <div class="container">
    <div v-for="product in products" :key="product.id" class="products">
      <img :key="product.id" :src="product.image_url" :alt="product.title" />
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  data() {
    return {
      products: null,
    }
  },
  async mounted() {
    await api.get('dbycd').then(res => (this.products = res.data))
  },
}
</script>

<style scoped lang="scss">
.products {
  display: inline-block;

  img {
    max-width: 170px;
  }
}
</style>
