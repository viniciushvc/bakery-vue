<template>
  <component :is="type" :href="href">
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
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: 0.3s;
}

.brown {
  background-color: #403225;

  &:hover {
    background-color: #a67b52;
  }
}
.link {
  font-size: 14px;
  font-weight: 700;
  padding: 0;
  color: #a67b52;
  background-color: transparent;
}
</style>
