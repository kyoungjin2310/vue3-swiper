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
      <textarea
        cols="30"
        rows="10"
        id="default"
        :multiline="true"
        :value="value"
        floatLabelType="Auto"
        placeholder="Enter your name"
        class="sdsd"
      ></textarea>
    </div>
    <div class="test" v-html="content"></div>
    <button class="popupBtn" @click.prevent="popup">popup</button>
    <popup-test ref="popup" />
  </div>
</template>

<script>
import PopupTest from './PopupTest.vue';
export default {
  components: { PopupTest },
  data() {
    return {
      startTime: '09:00',
      endTime: '10:00',
      date: new Date(),
      value: `dlsd
      
      sdsd`,
      test: `dlsd
      
      sdsd`,
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
    popup() {
      this.$refs.popup.Toggle();
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
.popupBtn {
  border: 1px solid #000;
  margin-bottom: 160px;
}
</style>
