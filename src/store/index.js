import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      count: 1,
      TimeDate: [
        {
          start: new Date.setHours(9, 30, 0),
          end: new Date.setHours(23, 0, 0),
        },
      ],
    };
  },
});
