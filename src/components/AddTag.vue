<template>
  <div>
    <div class="input-wrapper">
      <input
        type="text"
        v-model.trim="tag"
        @keypress.prevent.stop.enter="addTag"
      />
      <button @click.prevent.stop="addTag">Add</button>
    </div>

    <ul class="tags">
      <li class="tag" v-for="(tag, index) in tags" :key="index">
        <span>{{ tag }}</span>
        <span @click="tags.splice(index, 1)">&times;</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tag: '',
      tags: this.value || [],
      params: new URLSearchParams({
        arrayparams: ['val1', 'val2', 'val3'],
      }),
      otherParams: new URLSearchParams({}),
      formData: new FormData(),
      object: {},
    };
  },
  created() {
    //otherParams
    this.otherParams.append('arrayparams', 'val1');
    this.otherParams.append('arrayparams', 'val2');
    this.otherParams.append('arrayparams', 'val3');
    console.log(
      new URLSearchParams(this.otherParams).toString(),
      'otherParams',
    );

    //배열 test - 안되는 것 같음
    console.log(this.params.toString(), '배열 test');
    const params = Object.fromEntries(this.params);
    console.log(params, '배열 test');

    //formData
    this.formData.append('arrayparams', 'val1');
    this.formData.append('arrayparams', 'val2');
    this.formData.append('arrayparams', 'val3');
    console.log(new URLSearchParams(this.formData).toString(), 'formData 1');
    this.formData.forEach((value, key) => {
      console.log(`key: ${key}    /    value: ${value},  formData`);
      this.object = { ...this.object, [key]: `${value}` };
    });
    console.log(this.object, 'formData');
  },
  watch: {
    tags(n) {
      this.$emit('input', n);
    },
  },

  methods: {
    addTag() {
      if (this.tag && !this.tags.includes(this.tag)) {
        this.tags.push(this.tag);
        this.tag = '';
      }
    },
  },
};
</script>
