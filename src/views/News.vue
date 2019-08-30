<template>
  <div class="news">
    <h1>Ultimas notícias</h1>

    <div v-for="(item, index) in news" :key="item.id">
      <div v-if="index < 3">
        <p class="date">{{item.published_at}}</p>

        <p>{{item.description}}</p>
      </div>
    </div>
    <div class="right">
      <btn class="brown">Lista completa</btn>
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
}
</script>

<style scoped lang="scss">
.news {
  margin: 1rem 0;

  .right {
    text-align: right;
  }

  .date {
    color: #403225;
    font-weight: 700;
  }
}
</style>
