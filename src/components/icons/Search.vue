<template>
  <component :is="type" :href="href" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :width="size"
      :height="size"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      :stroke="color"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </component>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: '50',
    },
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    type() {
      if (this.href) {
        return 'a'
      } else {
        return 'span'
      }
    },
  },
}
</script>
