<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="input"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 2px solid teal;
  padding: 10px 15px;
  border-radius: 5px;
}
</style>
