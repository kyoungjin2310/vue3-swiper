<template>
  <div id="app">
    <v-calendar
      v-model="value"
      ref="picker"
      locale="en"
      :title="title"
      :attributes="attributes"
      :available-dates="{ start: new Date(), end: null }"
      @dayclick="onDayClick"
    >
    </v-calendar>
    {{ days }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: [],
      title: 'text',
    };
  },
  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days = [];
        this.days.push(day.id);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
