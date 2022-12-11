<template>
  <div class="spinner"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body {
  font-family: sans-serif;
}

.spinner {
  width: 100px;
  height: 100px;
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 6px solid rgb(183, 213, 252);
  box-sizing: border-box;
  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    top: -6px;
    left: -6px;
    z-index: 2;
    border-radius: 50%;
    border: 6px solid rgb(40, 85, 143);
    border-color: transparent transparent transparent rgb(40, 85, 143);
    box-sizing: border-box;
    animation: spin 1.5s ease-out infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(180deg);
  }

  80% {
    trasform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
