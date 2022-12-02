<template>
  <div class="wrap">
    <QuillEditor :options="options" ref="editor" />
    <button @click.prevent="tested">저장</button>
    <div class="data" v-html="data"></div>
  </div>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      data: null,
      options: {
        debug: 'info',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // <strong>, <em>, <u>, <s>
            ['blockquote', 'code-block'], // <blockquote>, <pre class="ql-syntax" spellcheck="false">
            [{ header: 1 }, { header: 2 }], // <h1>, <h2>
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // <sub>, <sup>
            [{ indent: '-1' }, { indent: '+1' }], // class제어
            [{ direction: 'rtl' }], //class 제어
            [{ size: ['small', false, 'large', 'huge'] }], //class 제어 - html로 되도록 확인
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, normal
            [{ font: [] }], // 글꼴 class로 제어
            [{ color: [] }, { background: [] }], //style="color: rgb(230, 0, 0);", style="background-color: rgb(230, 0, 0);"
            [{ align: [] }], // class
            // ["clean"],
            ['link', 'image', 'video'],
          ],
        },
        placeholder: 'Compose an epic...',
        theme: 'snow',
      },
      test: `<p>tesxtststetset</p>`,
    };
  },
  computed: {},
  mounted() {
    // console.log(this.$refs.editor.getEditor(), 'getEditor');
    // console.log(this.$refs.editor.getHTML(), 'getHTML');
    console.log(this.$refs.editor.setHTML(this.test));
    // console.log(this.$refs.editor.getContents(0, 0));
  },
  methods: {
    tested() {
      console.log(this.$refs.editor.getEditor(), 'getEditor');
      this.data = this.$refs.editor.getEditor().outerHTML;
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 200px;
}
</style>
