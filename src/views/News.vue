<template>
  <div id="news">
    <h1 class="news-last">Ultimas notícias</h1>

    <div v-for="(item, index) in news" :key="item.id">
      <div v-if="index < 3">
        <p class="news-date">{{ item.published_at | formatDate }}</p>

        <p class="news-description">{{ item.description | reduceText(70) }}</p>
      </div>
    </div>
    <div class="right">
      <btn class="link" title="Lista completa">
        <div class="arrow-right"></div>
      </btn>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

import btn from '../components/Button'

export default {
  components: {
    btn,
  },
  data() {
    return {
      news: null,
    }
  },
  async mounted() {
    await api.get('11qq59').then(res => (this.news = res.data))
  },
  filters: {
    reduceText: function(value, size) {
      return value.length > size ? value.substring(0, size) + '...' : value
    },
    formatDate: function(value) {
      return new Date(value).toLocaleDateString()
    },
  },
}
</script>

<style scoped lang="scss">
@import '../styles/variables';

#news {
  padding: 2.5rem 2rem;
  background-color: #fafafa;

  @media #{$media-lg-max} {
    padding: 1rem;
    margin-top: 2.5rem;
  }

  .news-last {
    color: #d1bba6;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .news-date {
    color: #a67b52;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .news-description {
    color: #484848;
    font-size: 14px;
    border-bottom: 1px solid #efefef;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .right {
    text-align: right;
  }
}
</style>
