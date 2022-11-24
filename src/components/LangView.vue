<template>
  <div>
    <div class="absolute-center text-h1 text-center">
      {{ $t('signUp') }} 입니다
    </div>
    <div>{{ $filters.formatDate(date) }}</div>
    <div>
      {{ compare }}
    </div>
    <div>
      <textarea
        cols="30"
        rows="10"
        ref="textboxObj"
        @change="changeValue"
        id="default"
        :multiline="true"
        :value="value"
        floatLabelType="Auto"
        placeholder="Enter your name"
        class="sdsd"
      ></textarea>
    </div>
    <div class="test" v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: '09:00',
      endTime: '10:00',
      date: new Date(),
      value: 'Syncfusion',
    };
  },
  computed: {
    compare() {
      return this.startTime < this.endTime;
    },
    content() {
      return this.value.split('\n').join('<br>');
    },
  },
  methods: {
    changeValue: function () {
      this.value = this.$refs.textboxObj.value;
      console.log(this.$refs.textboxObj.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.sdsd {
  border: 1px solid #000;
}
.test {
  width: 500px;
  height: 200px;
}
</style>
