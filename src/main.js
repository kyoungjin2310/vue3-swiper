import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import VCalendar from 'v-calendar';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import i18n from './i18n';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(VCalendar).use(i18n).use(router).mount('#app');
