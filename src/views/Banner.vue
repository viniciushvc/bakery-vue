<template>
  <div class="banners">
    <div
      class="banner-list"
      v-for="(banner, index) in banners"
      :key="banner.id"
    >
      <img
        :class="{ 'd-none': position !== index }"
        class="banner-item"
        :key="banner.id"
        :src="banner.image_url"
      />
    </div>

    <div class="indicators">
      <div
        class="banner-indicator"
        v-for="(banner, index) in banners"
        :key="banner.id"
        :class="{ selected: index === position }"
        @click="position = index"
      ></div>
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

    clearInterval(carousel)

    const carousel = window.setInterval(() => {
      if (this.position < this.banners.length - 1) {
        this.position++
      } else {
        this.position = 0
      }
    }, 4000)
  },
}
</script>

<style scoped lang="scss">
.banners {
  position: relative;

  .banner-list {
    .banner-item {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }

  .indicators {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50vh - 140px);
    text-align: center;

    .banner-indicator {
      cursor: pointer;
      background-color: none;
      border: 2px solid #fff;
      height: 13px;
      border-radius: 50%;
      width: 13px;
      display: inline-block;
      margin-right: 1rem;

      &.selected {
        background-color: #fff;
      }
    }
  }
}
</style>
