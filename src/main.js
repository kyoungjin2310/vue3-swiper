import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import VCalendar from 'v-calendar';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'ko',
  messages: {
    en: {
      signUp: 'Sign Up',
    },
    ko: {
      signUp: '테스트 가입하기',
    },
  },
});
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(VCalendar).use(i18n).use(router).mount('#app');
