<template>
  <component :is="type" :href="href">
    {{ title }}
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    title: {
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

  &:hover {
    margin-left: 15px;
  }

  .arrow-right {
    display: inline-block;
    background-image: url('../assets/images/right-arrow.svg');
    position: relative;
    top: 3px;
    margin-left: 7px;
    height: 15px;
    width: 15px;
    transition: 0.4s;
  }
  &:hover {
    .arrow-right {
      margin-left: 15px;
    }
  }
}
</style>
