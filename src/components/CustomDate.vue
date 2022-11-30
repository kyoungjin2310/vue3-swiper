<template>
  <v-date-picker v-model="range" is-range :attributes="attribute" id="test">
    <template v-slot="{ inputValue, inputEvents }">
      <div class="flex justify-center items-center">
        <input
          :value="inputValue.start"
          v-on="inputEvents.start"
          class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
        />
        <svg
          class="w-4 h-4 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        <input
          :value="inputValue.end"
          v-on="inputEvents.end"
          class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
        />
      </div>
    </template>
  </v-date-picker>
</template>

<script>
import '@/assets/test.css';
export default {
  data() {
    return {
      range: {
        start: new Date(2020, 0, 6),
        end: new Date(2020, 0, 23),
      },
      masks: {
        input: 'YYYY-MM-DD h:mm A',
      },
      attribute: [
        {
          highlight: {
            style: {
              // Circle styles
              background: '#ff8080',
            },
            contentStyle: {
              // Text styles
              color: 'black',
            },
          },
          dates: { start: new Date(2019, 0, 14), end: new Date(2019, 0, 18) },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
body {
  background: skyblue;
}

#test {
  .vc-day-box-center-center {
    .vc-highlight {
      background: pink !important;
      border: 1px solid pink !important;
    }
  }
}
</style>
