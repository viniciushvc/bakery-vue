<template>
  <div class="banners">
    <div
      class="banner-list"
      v-for="(banner, index) in banners"
      :key="banner.id"
    >
      <img
        :class="{ show: position === index }"
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
    }, 6000)
  },
}
</script>

<style scoped lang="scss">
@import '../styles/variables';

.banners {
  position: relative;
  height: 400px;
  background-color: #ddd;

  .banner-list {
    .banner-item {
      width: 100%;
      height: 400px;
      object-fit: cover;
      display: none;
    }

    .show {
      display: block;
      animation-name: fadein;
      animation-duration: 0.8s;
    }
  }

  .indicators {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(400px - 140px);
    text-align: center;

    @media #{$media-sm-max} {
      top: 350px;
    }

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

  @keyframes fadein {
    0% {
      opacity: 0.4;
    }
    25% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
