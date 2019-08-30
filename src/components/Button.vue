<template>
  <component :is="type" :href="href" :type="type">
    <slot />
  </component>
</template>
    
<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    type() {
      if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
  },
}
</script>

<style scoped lang="scss">
button {
  padding: 0.8rem 2rem;
  color: #fff;
  border: none;
}

.brown {
  background-color: #403225;
}
</style>