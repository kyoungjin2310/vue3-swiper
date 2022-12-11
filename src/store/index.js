import { createStore } from 'vuex';
const day = new Date();
export const store = createStore({
  state() {
    return {
      loading: true,
      count: 1,
      TimeDate: [
        {
          start: day.setHours(9, 30, 0),
          end: day.setHours(23, 0, 0),
        },
      ],
    };
  },
});
