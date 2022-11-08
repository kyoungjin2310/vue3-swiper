<template>
  <div>
    <ul class="items">
      <li
        v-for="list in menu"
        :key="list"
        class="item"
        :class="active && id ? 'active' : null"
      >
        {{ list }}
      </li>
    </ul>
    <i class="follow"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: ['one', 'two', 'three', 'four'],
      active: true,
      id: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: sans-serif;
  margin: 0;
}

.items {
  position: relative;
  display: flex;
}

$count: 10;

.item {
  flex: 0 1 100%;
  padding: 0.5rem 1rem 1rem;
  @for $i from 1 through $count {
    &:nth-child(#{$i}) {
      &.active ~ .follow {
        transform: translate3d(($i - 1) * 100%, 0, 0);
      }
      & + .follow {
        width: 100% / $i;
      }
    }
  }
}

.follow {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.5rem;
  background: blue;
  transition: transform 500ms;
}
</style>
