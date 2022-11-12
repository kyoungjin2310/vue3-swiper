<template>
  <div>
    <div class="absolute-center text-h1 text-center">
      {{ $t('signUp') }} 입니다
    </div>
    <div>{{ $filters.formatDate(date) }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style></style>
