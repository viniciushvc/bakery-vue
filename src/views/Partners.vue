<template>
  <div class="partners">
    <div class="container">
      <h1 class="partners-title">Parceiros</h1>
      <div class="row">
        <ul class="partners-list">
          <li
            class="partners-item"
            v-for="(partner, index) in partners"
            :key="partner.id"
          >
            <img
              v-if="index < 5"
              :key="partner.id"
              :src="partner.image_url"
              :alt="partner.title"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'
export default {
  data() {
    return {
      partners: null,
    }
  },
  async mounted() {
    await api.get('qfhnh').then(res => (this.partners = res.data))
  },
}
</script>

<style scoped lang="scss">
.partners {
  background-color: #f4f4f4;
  margin: 2.5rem 0;
  padding: 2.5rem 0;

  .partners-title {
    text-transform: uppercase;
    color: #403225;
    font-size: 18px;
    text-align: center;
    margin-bottom: 3rem;
  }

  .partners-list {
    display: flex;
    overflow-x: scroll;
  }
  .partners-item {
    list-style-type: none;
    align-self: center;
    margin: 0 5rem;
  }
}
</style>
