export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    () {
      this.$emit('update:show', false);
    },
  },
};
