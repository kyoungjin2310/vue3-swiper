export const testCon = {
  methods: {
    content_(value) {
      return value.split('\n').join('<br>');
    },
  },
};

export const time = {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    loadingHide(data) {
      if (data) {
        this.loading = false;
      }
    },
  },
};
