<template>
  <div class="input-group">
    <label :for="id" class="input-label">{{ title }}</label>

    <textarea
      class="input-field"
      :cols="cols"
      :rows="rows"
      :id="id"
      :name="id"
      v-model="content"
      @input="handleInput"
      :placeholder="placeholder"
    >
    </textarea>
    <ul class="input-error-list">
      <li class="input-error-item" v-for="error in errors" :key="error">
        {{ error }}
      </li>

      <li v-if="!errors.length" class="input-error-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    id: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    cols: {
      type: String,
      default: null,
    },
    rows: {
      type: String,
      default: null,
    },
    errors: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      content: this.value,
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content)
    },
  },
}
</script>

<style scoped lang="scss" src="../styles/form.scss" />
