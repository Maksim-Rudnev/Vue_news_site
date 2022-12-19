export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hide-dialog() {
      this.$emit('update:show', false);
    },
  },
};
