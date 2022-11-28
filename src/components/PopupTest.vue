<template>
  <div v-if="open">test popup</div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    Toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style></style>
