<template>
  <div class="container">
    <div class="row">
      <div v-for="(partner, index) in partners" :key="partner.id" class="partner">
        <img v-if="index <5 " :key="partner.id" :src="partner.image_url" :alt="partner.title" />
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
.partner {
  margin-right: 5rem;
}
</style>
