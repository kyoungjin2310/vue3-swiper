<template>
  <div>
    <div class="absolute-center text-h1 text-center">
      {{ $t('signUp') }} 입니다
    </div>
    <div>{{ $filters.formatDate(date) }}</div>
    <div>
      {{ compare }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: '09:00',
      endTime: '10:00',
      date: new Date(),
    };
  },
  computed: {
    compare() {
      return this.startTime < this.endTime;
    },
  },
};
</script>

<style></style>
