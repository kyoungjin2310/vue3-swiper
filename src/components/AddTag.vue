<template>
  <div>
    <div class="input-wrapper">
      <input
        type="text"
        v-model.trim="tag"
        @keypress.prevent.stop.enter="addTag"
      />
      <button @click.prevent.stop="addTag">Add</button>
    </div>

    <ul class="tags">
      <li class="tag" v-for="(tag, index) in tags" :key="index">
        <span>{{ tag }}</span>
        <span @click="tags.splice(index, 1)">&times;</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    tags(n) {
      this.$emit('input', n);
    },
  },

  data() {
    return {
      tag: '',
      tags: this.value || [],
    };
  },

  methods: {
    addTag() {
      if (this.tag && !this.tags.includes(this.tag)) {
        this.tags.push(this.tag);
        this.tag = '';
      }
    },
  },
};
</script>
