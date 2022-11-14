<template>
  <div id="example-5" class="demo">
    change & value select -
    <select :value="selected1" @change="setSelect($event)">
      <option v-for="(item, index) in timeArr" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
    <br />
    -------------------------------------
    <br />
    <span>선택 value: {{ selected1 }}</span>
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeArr: [],
      selected1: '',
      snackbarFlag: false,
      text: '',
      timeout: 2000,
    };
  },
  created() {
    const start = new Date();
    start.setHours(9, 30, 0); //8 AM
    const end = new Date();
    end.setHours(23, 0, 0); //5 PM

    while (start <= end) {
      this.timeArr.push(
        start.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' }),
      );
      start.setMinutes(start.getMinutes() + 30);
    }
  },
  methods: {
    setSelect(event) {
      const asisSelect = this.selected1;
      // 변경 적용
      this.selected1 = event.target.value;
      if (this.selected1 === this.selectList[1].value) {
        this.text = this.selectList[1].value + '선택 불가!';
        this.snackbarFlag = true;
        // 원복
        this.selected1 = asisSelect;
      }
    },
  },
};
</script>

<style></style>
