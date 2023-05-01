<template>
  <div>
    <div v-if="pageSetting.list.length" class="page-list">
      <span
        class="left-icon"
        color="#dfdfdf"
        @click="pageSetting.first !== null ? sendPage(pageSetting.first) : ''"
        >prev</span
      >
      <ul>
        <li
          :class="{ active: page === pageSetting.currentPage }"
          v-for="page in pageSetting.list"
          :key="page"
          @click="sendPage(page)"
        >
          {{ page }}
        </li>
      </ul>
      <span
        class="right-icon"
        color="#dfdfdf"
        @click="pageSetting.end !== null ? sendPage(pageSetting.end) : ''"
        >next</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["pageSetting"],
  methods: {
    sendPage(page) {
      this.$emit("paging", page);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    list-style: none;
    margin: 5px;
    &.active {
      font-weight: bold;
      color: cadetblue;
    }
  }
}
</style>
