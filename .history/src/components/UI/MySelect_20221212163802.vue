<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <select @change="changeOption" class="select">
    <option disabled value="">Выберите из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
  .select {
    border: 2px solid teal;
    width: 35;
    background-color: ;
  }
</style>
