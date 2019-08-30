<template>
  <div>
    <div v-for="(banner, index) in banners" :key="banner.id">
      <img v-if="position === index" :key="banner.id" :src="banner.image_url" :alt="banner.title" />
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  data() {
    return {
      banners: null,
      position: 0,
    }
  },
  async mounted() {
    await api.get('y3zct').then(res => (this.banners = res.data))
  },
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>
