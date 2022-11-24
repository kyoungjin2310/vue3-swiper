<template>
  <div id="app">
    <v-calendar
      v-model="value"
      ref="picker"
      locale="us"
      :title="title"
      :attributes="attrs"
      :disabled-dates="days"
      @dayclick="onDayClick"
      title-position="left"
    >
    </v-calendar>
    {{ days }}
  </div>
</template>
<script>
import ct from 'countries-and-timezones';
export default {
  data() {
    return {
      days: [{ weekdays: [1, 7] }],
      title: 'text',
      attrs: [
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        },
      ],
    };
  },
  created() {
    const country = ct.getCountry('KR');
    console.log(country);
  },
  computed: {
    dates() {
      return this.days.map((day) => day.dates);
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
      if (this.days.indexOf(day.id) === -1) {
        this.days.push(day.id);
      } else {
        this.days.splice(this.days.indexOf(day.id), this.days.indexOf(day.id));
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
