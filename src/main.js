import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import VCalendar from 'v-calendar';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import i18n from './i18n';
import { formatDate } from '@/utils/filter';
import { store } from '@/store/index';
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(store).use(vuetify).use(VCalendar).use(i18n).use(router).mount('#app');

app.config.globalProperties.$filters = {
  formatDate,
};
